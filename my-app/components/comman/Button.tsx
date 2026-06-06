import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: number | string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  bgColor = "#2563eb",
  textColor = "#ffffff",
  fontSize = "16px",
  fontWeight = 500,
  width = "auto",
  height = "auto",
  padding = "10px 20px",
  margin = "0",
  borderRadius = "6px",
  border = "none",
  style,
  ...props
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize,
        fontWeight,
        width,
        height,
        padding,
        margin,
        borderRadius,
        border,
        cursor: props.disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
        opacity: props.disabled ? 0.6 : 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;