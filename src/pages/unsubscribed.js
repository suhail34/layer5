import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../sections/app.style";

import SEO from "../components/seo";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import Unsubscribed from "../sections/unsubscribed/unsubscribed";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";

const UnsubscribedSection = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Cloud Native Newsletter" description="The Layer5 Newsletter" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Unsubscribed />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default UnsubscribedSection;
