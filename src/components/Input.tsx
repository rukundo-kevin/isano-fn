
type DefaultProps = {
  customClass?: string;
};

const customClassDefaultProps = {
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

};

function Input({
  labelFor,
  labelText,
  id,
  name,
  type,
  placeholder,
  customClass,
  isRequired,
  handleChange
}: Input & DefaultProps): JSX.Element {


  return (
    <div className="flex flex-col justify-start items-start">
      <label htmlFor={labelFor} className="font-semibold mb-2">
        {labelText}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={`rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  ${customClass}`}
        placeholder={placeholder}
        onChange={handleChange}
        required={isRequired}
        
      />
  
    </div>
  );
}

Input.defaultProps = customClassDefaultProps;

export default Input;
