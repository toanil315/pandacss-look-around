import { css } from "@/../styled-system/css";
import { Wrapper } from "../layouts/Wrapper";

import Image from "next/image";
import { circle, vstack } from "../../../styled-system/patterns";

export const Testimonials = () => {
  return (
    <section className={css({ background: "gray.100", w: "full", py: "20" })}>
      <Wrapper>
        <div className={vstack({ gap: "10", alignItems: "center" })}>
          <p
            className={css({
              fontSize: "2xl",
              maxWidth: "full",
              textAlign: "center",
              lg: { maxWidth: "2xl" },
            })}
          >
            We had an incredible experience working with PandaCSS and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the product concept so quickly.
          </p>
          <div>
            <div className={vstack({ gap: "4", alignItems: "center" })}>
              <Image
                className={circle({
                  size: "12",
                  overflow: "hidden",
                  margin: "auto",
                })}
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt={"picture of a image"}
                width="30"
                height="30"
              />
              <div className={vstack({ gap: "1", alignItems: "center" })}>
                <p className={css({ fontWeight: "bold" })}>Jenny Wilson</p>
                <span className={css({ color: "gray.500" })}>
                  Vice President
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
