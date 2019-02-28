import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://44b009c6a6794359ab3ae39d4756a501@sentry.io/1404911"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
