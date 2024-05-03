import { css } from "../../styled-system/css";
import { Banner } from "./components/Banner";
import { Features } from "./components/Feature";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
