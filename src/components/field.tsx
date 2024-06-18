import {
  ChangeEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { MdOutlineDoNotDisturb } from "react-icons/md";

export const Field = ({
  type,
  id,
  placeholder,
  children,
  errorId,
  errorMessage,
  clear,
  setClear,
}: {
  type: string;
  id: string;
  placeholder: string;
  children: string;
  errorId?: string;
  errorMessage?: string;
  clear: boolean;
  setClear: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (clear) {
      setValue("");
      setClear(false);
    }
  }, [clear]);
  return (
    <div className="flex flex-col w-full gap-4">
      <label className="text-dm font-bold text-blue-900" htmlFor={id}>
        {children}
      </label>
      <input
        required
        className="w-full p-3 text-md rounded-md border-2
        focus:outline-none focus:border-2 focus:border-blue-900"
        type={type}
        autoComplete="on"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
      ></input>
      <p
        id={errorId}
        className="text-red-600 text-md font-bold hidden items-center gap-2"
      >
        <MdOutlineDoNotDisturb />
        {errorMessage}
      </p>
    </div>
  );
};
