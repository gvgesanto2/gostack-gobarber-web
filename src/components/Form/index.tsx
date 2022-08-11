/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { ValidationError, ObjectSchema } from 'yup';
import { ObjectShape } from 'yup/lib/object';
import { getValidationErrors } from '../../utils/validation.utils';
import Button from '../Button';
import Input from '../Input';

import { StyledForm } from './styles';

type InputEvent = ChangeEvent<HTMLInputElement>;
type FormEventType = FormEvent<HTMLFormElement>;

export interface FormFields {
  type: string;
  name: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
}

interface DefaultFormFields {
  [name: string]: string;
}

type InputErrors = DefaultFormFields;

interface FormProps {
  title: string;
  fields: Array<FormFields>;
  buttonText: string;
  validationSchema?: ObjectSchema<ObjectShape>;
}

export default function Form({
  title,
  fields,
  buttonText,
  validationSchema,
}: FormProps) {
  const defaultFormFields: DefaultFormFields = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: '' }),
    {},
  );
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState<InputErrors>({});

  const resetAllFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const resetFormFieldsWithError = (inputErrors: InputErrors) => {
    let newFormFields = formFields;
    Object.keys(inputErrors).forEach(fieldName => {
      newFormFields = {
        ...newFormFields,
        [fieldName]: '',
      };
    });
    setFormFields(newFormFields);
  };

  const handleChange = (event: InputEvent) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEventType) => {
    event.preventDefault();

    try {
      if (validationSchema) {
        await validationSchema.validate(formFields, {
          abortEarly: false,
        });
      }
      setErrors({});
      resetAllFormFields();
    } catch (error: ValidationError | any) {
      const validationErrors = getValidationErrors(error);
      setErrors(validationErrors);
      resetFormFieldsWithError(validationErrors);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map(({ name, ...rest }) => (
        <Input
          key={name}
          name={name}
          value={formFields[name]}
          onChange={handleChange}
          errorMsg={errors[name]}
          {...rest}
        />
      ))}
      <Button type="submit">{buttonText}</Button>
    </StyledForm>
  );
}
