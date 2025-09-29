import React from "react";

type Props = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  tabIndex?: number;
  inputClassName?: string;
};

export default function InputCampo({ id, label, type = "text", placeholder, tabIndex, inputClassName = "" }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="pl-2 text-lg text-white">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        className={`mt-2 px-3 py-2 rounded-t-md focus:outline-[5px] focus:outline-yellow-500 ${inputClassName}`}
      />
    </div>
  );
}
