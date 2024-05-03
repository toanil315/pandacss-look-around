import Image from "next/image";
import { hstack, vstack } from "@/../styled-system/patterns";
import { css } from "@/../styled-system/css";
import Illustration from "@/../public/assets/illustration.svg";
import { Wrapper } from "../layouts/Wrapper";
import { button } from "../ui/button";

export const Banner = () => {
  return (
    <Wrapper>
      <section>
        <div className={vstack({ gap: "10", p: "10", lg: { p: "32" } })}>
          <div className={vstack({ gap: "4" })}>
            <div
              className={css({
                md: { maxWidth: "full", textAlign: "center" },
                lg: { maxWidth: "6xl" },
              })}
            >
              <h2
                className={css({
                  fontSize: "6xl",
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "gray.900",
                })}
              >
                Meeting scheduling{" "}
                <span className={css({ color: "orange.600" })}>made easy</span>
              </h2>
            </div>
            <p
              className={css({
                maxWidth: "3xl",
                fontSize: "md",
                textAlign: "center",
                color: "gray.600",
              })}
            >
              Never miss a meeting. Never be late for one too. Keep track of
              your meetings and receive smart reminders in appropriate times.
              Read your smart “Daily Agenda” every morning.
            </p>
          </div>
          <div className={hstack({ gap: "6" })}>
            <button className={button({ visual: "primary", size: "md" })}>
              Get started
            </button>
            <button className={button({ visual: "secondary", size: "md" })}>
              Learn more
            </button>
          </div>
        </div>
        <div>
          <div className={css({ mx: "auto" })}>
            <Image
              className={css({ mx: "auto" })}
              src={Illustration}
              alt="illustration picture image"
              height="600"
              width="600"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
