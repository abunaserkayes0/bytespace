import React from "react";

interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "facebook" | "google";
}

export default function SocialLoginButton({
  icon,
  ...props
}: SocialLoginButtonProps) {
  return (
    <button
      className="w-[60px] h-[60px] rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm"
      {...props}
    >
      {icon === "facebook" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
        </svg>
      )}
      {icon === "google" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.81 15.73 17.59V20.35H19.29C21.38 18.43 22.56 15.6 22.56 12.25Z"
            fill="black"
          />
          <path
            d="M12 23C14.97 23 17.46 22.02 19.29 20.35L15.73 17.59C14.74 18.25 13.48 18.66 12 18.66C9.13001 18.66 6.70001 16.73 5.84001 14.15H2.17001V16.99C4.00001 20.61 7.74001 23 12 23Z"
            fill="black"
          />
          <path
            d="M5.84001 14.15C5.62001 13.49 5.49001 12.76 5.49001 12C5.49001 11.24 5.62001 10.51 5.84001 9.85V7.01H2.17001C1.40001 8.53 0.960007 10.21 0.960007 12C0.960007 13.79 1.40001 15.47 2.17001 16.99L5.84001 14.15Z"
            fill="black"
          />
          <path
            d="M12 5.34C13.62 5.34 15.06 5.89 16.2 6.98L19.38 3.8C17.45 2.01 14.96 1 12 1C7.74001 1 4.00001 3.39 2.17001 7.01L5.84001 9.85C6.70001 7.27 9.13001 5.34 12 5.34Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
}
