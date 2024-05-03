import { css } from "../../../styled-system/css";

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div
      className={css({
        maxWidth: "1400px",
        mx: "auto",
      })}
    >
      {children}
    </div>
  );
};
