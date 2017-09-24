import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import "reset-css/reset.css";
import "./index.css";

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

renderComponent(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    renderComponent(App);
  });
}
