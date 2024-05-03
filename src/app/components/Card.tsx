import { css } from "@/../styled-system/css";
import Image from "next/image";
import { circle, vstack } from "../../../styled-system/patterns";

type CardProps = {
  imageLink: string;
  imageDescription?: string;
  heading: string;
  paragraph: string;
  cardLink: string;
};

export const Card = ({
  imageLink,
  imageDescription,
  heading,
  paragraph,
  cardLink,
}: CardProps) => (
  <div
    className={css({
      border: "2px solid #E2E8F0",
    })}
  >
    <div
      className={vstack({
        gap: "2",
        p: "10",
        alignItems: "left",
        lg: { p: "8" },
      })}
    >
      <div
        className={circle({
          size: "12",
          overflow: "hidden",
          borderTopRadius: "md",
        })}
      >
        <Image
          src={imageLink}
          alt={imageDescription || "picture props"}
          width="30"
          height="30"
        />
      </div>
      <div className={vstack({ gap: "2", alignItems: "left" })}>
        <h2
          className={css({
            fontSize: "2xl",
            textAlign: "left",
            fontWeight: "bold",
            color: "gray.900",
          })}
        >
          {heading}
        </h2>
      </div>
      <p
        className={css({
          maxWidth: "3xl",
          fontSize: "md",
          textAlign: "left",
          color: "gray.600",
        })}
      >
        {paragraph}
      </p>
      <a target="_blank" href={cardLink} className={css({ color: "blue.600" })}>
        Learn more
      </a>
    </div>
  </div>
);
