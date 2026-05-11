import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">;

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "primary-btn";
    case "secondary":
      return "secondary-btn";
    case "ghost-destructive":
      return "danger-btn";
    default:
      throw new Error(
        `Unexpected variant please check the variant - ${variant}`,
      );
  }
}

function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={`${getVariantStyles(variant)} ${className} `} {...props} />;
}

export default Button;
