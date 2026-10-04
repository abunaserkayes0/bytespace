import React from "react";
import {
  createLucideIcon,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/**
 * Facebook Lucide icon (24x24 stroke-based Lucide icon matching the Feather/Lucide design system)
 */
export const FacebookIcon: LucideIcon = createLucideIcon("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "facebook-path",
    },
  ],
]);

/**
 * Google Lucide icon (24x24 Lucide-compatible icon)
 */
export const GoogleIcon: LucideIcon = createLucideIcon("Google", [
  [
    "path",
    {
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
      fill: "currentColor",
      stroke: "none",
      key: "google-p1",
    },
  ],
  [
    "path",
    {
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
      fill: "currentColor",
      stroke: "none",
      key: "google-p2",
    },
  ],
  [
    "path",
    {
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z",
      fill: "currentColor",
      stroke: "none",
      key: "google-p3",
    },
  ],
  [
    "path",
    {
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z",
      fill: "currentColor",
      stroke: "none",
      key: "google-p4",
    },
  ],
]);

export interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "facebook" | "google" | LucideIcon;
  iconProps?: LucideProps;
}

export default function SocialLoginButton({
  icon,
  iconProps,
  className = "",
  ...props
}: SocialLoginButtonProps) {
  let IconComponent: LucideIcon;

  if (icon === "facebook") {
    IconComponent = FacebookIcon;
  } else if (icon === "google") {
    IconComponent = GoogleIcon;
  } else {
    IconComponent = icon;
  }

  return (
    <button
      type="button"
      className={`size-15 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-105 cursor-pointer shadow-sm ${className}`}
      {...props}
    >
      <IconComponent size={24} {...iconProps} />
    </button>
  );
}
