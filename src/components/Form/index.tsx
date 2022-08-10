import { ChangeEvent, FormEvent, useState } from 'react';
import { IconBaseProps } from 'react-icons';
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

interface FormProps {
  title: string;
  fields: Array<FormFields>;
  buttonText: string;
}

interface DefaultFormFields {
  [name: string]: string;
}

export default function Form({ title, fields, buttonText }: FormProps) {
  const defaultFormFields: DefaultFormFields = fields.reduce(
    (acc, { name }) => ({ ...acc, [name]: '' }),
    {},
  );
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: InputEvent) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event: FormEventType) => {
    event.preventDefault();

    console.log(formFields);

    resetFormFields();
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
          required
          {...rest}
        />
      ))}
      <Button type="submit">{buttonText}</Button>
    </StyledForm>
  );
}
