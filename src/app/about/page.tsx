import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pag",
  description: "about us",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About" description="" />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
