export default `
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    min-height: 100vh;
    padding: 0;
    width: 100%;
  }

  body {
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, Lato, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: rgba(0,0,0,0.9);
    font-size: 16px;
    line-height: 1.5;
    min-height: 100vh;
    padding: 0;
    width: 100%;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  #react-root {
    min-height: 100vh;
  }
`;
