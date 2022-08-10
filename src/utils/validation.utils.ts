import { object, string } from 'yup';
import { FormFields } from '../components/Form';
import { capitalizeFirstLetter } from './string.utils';

const getRequiredMessage = (fieldName: string) => {
  return `${capitalizeFirstLetter(fieldName)} is required`;
};

export const getValidationSchemaFromFields = (fields: FormFields) => {
  const validationObj = fields.reduce((acc, { name }) => {
    let validator;

    switch (name) {
      case 'email':
        validator = string()
          .required(getRequiredMessage(name))
          .email('Enter a valid email');
        break;
      case 'password':
        validator = string().min(6, 'Password must have at least 6 characters');
        break;
      default:
        validator = string().required(getRequiredMessage(name));
    }

    return { ...acc, [name]: validator };
  }, {});

  return object().shape(validationObj);
};
