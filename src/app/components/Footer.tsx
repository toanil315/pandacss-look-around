import Image from "next/image";
import Logo from "@/../public/assets/logo.svg";
import { Wrapper } from "../layouts/Wrapper";

import { css } from "../../../styled-system/css";
import { hstack, vstack } from "../../../styled-system/patterns";

export const Footer = () => {
  return (
    <footer
      className={css({
        backgroundColor: "gray.100",
        py: "20",
        borderTop: "1px  solid #e5e7eb",
      })}
    >
      <Wrapper>
        <div className={vstack({ gap: "8", alignItems: "center" })}>
          <Image
            src={Logo}
            alt={"picture of a image"}
            width="200"
            height="200"
          />
          <div>
            <ul className={hstack({ gap: "4", alignItems: "center" })}>
              <li>
                <a
                  className={css({ _hover: { textDecoration: "underline" } })}
                  href={"#"}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={css({ _hover: { textDecoration: "underline" } })}
                  href={"#"}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={css({ _hover: { textDecoration: "underline" } })}
                  href={"#"}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className={css({ _hover: { textDecoration: "underline" } })}
                  href={"#"}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
