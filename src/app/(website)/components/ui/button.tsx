import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-accent text-black border-none py-3 px-6 rounded-full text-lg font-normal font-satoshi cursor-pointer transition-transform hover:scale-105 hover:bg-accent shrink-0 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
