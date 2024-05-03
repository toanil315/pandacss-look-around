import { css } from "@/../styled-system/css";
import Icon from "@/../public/assets/featureicon.svg";
import { Wrapper } from "../layouts/Wrapper";

import { vstack, wrap } from "../../../styled-system/patterns";
import { Card } from "./Card";

export const Features = () => {
  return (
    <Wrapper>
      <div
        className={vstack({ gap: "12", p: "10", mx: "auto", lg: { p: "32" } })}
      >
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
              Short heading
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet
            officiis.
          </p>
        </div>
        <div className={wrap({ gap: "6", align: "center", justify: "center" })}>
          <Card
            imageLink={Icon}
            heading="heading one"
            paragraph="Lorem ipsum dolor sit amet catetur, adipisicing elit."
            cardLink="https://chakra-templates.dev/templates/page-sections/features/simpleCardWrapper"
          />
          <Card
            imageLink={Icon}
            heading="heading one"
            paragraph="Lorem ipsum dolor sit amet catetur, adipisicing elit."
            cardLink="https://chakra-templates.dev/templates/page-sections/features/simpleCardWrapper"
          />
          <Card
            imageLink={Icon}
            heading="heading one"
            paragraph="Lorem ipsum dolor sit amet catetur, adipisicing elit."
            cardLink="https://chakra-templates.dev/templates/page-sections/features/simpleCardWrapper"
          />
          <Card
            imageLink={Icon}
            heading="heading one"
            paragraph="Lorem ipsum dolor sit amet catetur, adipisicing elit."
            cardLink="https://chakra-templates.dev/templates/page-sections/features/simpleCardWrapper"
          />
          <Card
            imageLink={Icon}
            heading="heading one"
            paragraph="Lorem ipsum dolor sit amet catetur, adipisicing elit."
            cardLink="https://chakra-templates.dev/templates/page-sections/features/simpleCardWrapper"
          />
        </div>
      </div>
    </Wrapper>
  );
};
