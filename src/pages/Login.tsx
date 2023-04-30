import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginFields } from "../constants/formFields";
// import { login } from "../../redux/actions/auth.action";
import Input from "../components/Input";
import Alert from "../components/Alert";

type fields = {
  [key: string]: string | number;
};
const fieldState: fields = {};

loginFields.forEach((field) => {
  fieldState[field.id as keyof typeof fieldState] = "";
});

const Login = () => {
  const [loginState, setLoginState] = useState(fieldState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    setTimeout(() => {
      if (isAuth) return navigate("../dashboard");
    }, 300);
  }, [isAuth]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginState;
    return dispatch(login({ email, password }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {error && (
          <Alert message={error.payload} heading="Error" variant="error" />
        )}
        {isAuth && (
          <Alert
            message="Login successful"
            heading="Success"
            variant="success"
          />
        )}
        {loginFields.map((field) => (
          <Input
            key={field.id}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            register={register}
            errors={errors}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={t(`${field.placeholder}`)}
            customClass="dark:bg-dark-bg"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLoginState({ ...loginState, [e.target.id]: e.target.value });
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between ">
        <div className="text-sm">
          <a
            href="/password/reset"
            className="font-medium text-yellow-600 hover:text-yellow-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
