import React from "react";
import BackgroundImage from "gatsby-background-image";

export default function BackgroundSection({
  image,
  styleClass,
  title,
  children
}) {
  return  (
  <BackgroundImage className={styleClass} fluid={image}>
    <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
      {title}
    </h1>
    {children}
  </BackgroundImage>
  );
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "deafult-background"
};
