import * as React from "react";
import { Global, css } from "@emotion/core";

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    "0.625rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.5rem",
    "2rem",
    "2.75rem",
    "3.25rem",
  ],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
  },
  space: [0, "0.25rem", "0.5rem", "1rem", "2rem", "4rem", "6rem", "12rem"],
  fonts: {
    body: "'Source Sans Pro', system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
};

export const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        ul[class],
        ol[class] {
          padding: 0;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        p,
        ul[class],
        ol[class],
        li,
        figure,
        figcaption,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        body {
          min-height: 100vh;
          scroll-behavior: smooth;
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }

        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        img {
          max-width: 100%;
          display: block;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        html {
          font-size: 18px;
          font-family: ${theme.fonts.body};
        }
      `}
    />
  );
};
