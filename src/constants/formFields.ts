const signupFields = [
  {
    labelText: "Firstname",
    labelFor: "firstname",
    id: "firstname",
    name: "firstname",
    type: "text",
    autoComplete: "firstname",
    isRequired: true,
    placeholder: "Enter your first name",
  },
  {
    labelText: "Lastname",
    labelFor: "lastname",
    id: "lastname",
    name: "lastname",
    type: "text",
    autoComplete: "lastname",
    isRequired: true,
    placeholder: "Enter your last name",
  },
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Enter your email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Enter Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirmPassword",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

export const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Enter Password",
  },
];

export const resetPasswordField = {
  name: "email",
  type: "email",
  placeholder: "Email Address",
  isRequired: true,
};

export default signupFields;
