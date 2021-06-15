import classes from './style.module.scss';
import { FC } from 'react';

interface InputFieldProps {
  placeholder: string;
  type: string;
  name: string;
  autoFocus: boolean;
  value?: number;
  onChange: (e: any) => void;
}

const InputField: FC<InputFieldProps> = ({
  placeholder,
  name,
  autoFocus,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      autoFocus={autoFocus}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      className={classes.root}
    />
  );
};

export default InputField;
