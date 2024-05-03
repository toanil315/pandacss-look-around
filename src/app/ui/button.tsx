import { cva } from "../../../styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    borderRadius: "lg",
    cursor: "pointer",
    transition: "ease-in-out",
  },
  variants: {
    visual: {
      primary: {
        bg: "orange.600",
        color: "white",
        _hover: { bg: "orange.500" },
      },
      secondary: {
        bg: "gray.300",
        color: "gray.800",
        _hover: { bg: "gray.400" },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "orange.200",
        _hover: { borderColor: "orange.300" },
      },
    },
    size: {
      sm: { px: "1", py: "1", fontSize: "12px" },
      md: { px: "4", py: "4", fontSize: "md" },
      lg: { px: "4", py: "4", fontSize: "24px" },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "md",
  },
});
