import React from "react";

type Props = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  tabIndex?: number;
  // novas props:
  className?: string;       // wrapper extra classes
  labelClassName?: string;  // classes do label
  inputClassName?: string;  // classes do input
  variant?: "default" | "projeto"; // opção prática
};

export default function InputCampo({
  id,
  label,
  type = "text",
  placeholder,
  tabIndex,
  className = "",
  labelClassName = "",
  inputClassName = "",
  variant = "default",
}: Props) {
  // classes padrão (contato)
  const baseLabel = "pl-2 text-lg text-white " + labelClassName;
  const baseInput =
    "w-[400px] mt-2 px-3 py-2 placeholder-black rounded-t-md focus:outline-[5px] focus:outline-yellow-500 " +
    (variant === "default"
      ? "bg-gray-100/80 border-b-4 border-yellow-400/100"
      : "bg-white/90 border-2 border-gray-300"); // exemplo para 'projeto'

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className={baseLabel}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        className={baseInput}
      />
    </div>
  );
}