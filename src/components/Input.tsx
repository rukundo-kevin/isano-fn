type DefaultProps = {
  customClass?: string;
};

const InputDefaultProps = {
  customClass: "",
} as DefaultProps;

type Input = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  register: any;
  errors: any;
};

function Input({
  labelFor,
  labelText,
  id,
  name,
  type,
  errors,
  placeholder,
  customClass,
  isRequired,
  register,
}: Input & DefaultProps) {
  /* Format error message to remove the tick and capitilize the first letter */
  let fieldName = name.replace(/-/gi, " ");
  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  /* Format error message end */

  return (
    <div className="flex flex-col justify-start items-start">
      <label htmlFor={labelFor} className="font-semibold mb-2">
        {labelText}
      </label>
      <input
        {...register(name, {
          required: {
            value: isRequired,
            message: `${fieldName} is required`,
          },
        })}
        id={id}
        type={type}
        className={`rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  ${customClass}`}
        placeholder={placeholder}
      />
      <div className="">
        <small className="text-red-600">
          {errors[name] && errors[name].message}
        </small>
      </div>
    </div>
  );
}

Input.defaultProps = InputDefaultProps;

export default Input;
