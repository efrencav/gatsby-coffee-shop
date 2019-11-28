import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from '../components/Home/Info';

const AboutPage = ({ data }) => (
    <Layout>
        <SEO title="About" />
        <BackgroundSection
            image={data.image.childImageSharp.fluid}
            title="about us"
            styleClass="about -background"
        />
        <Info />
    </Layout>
);

export const query = graphql`
  {
    image: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
