import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://44b009c6a6794359ab3ae39d4756a501@sentry.io/1404911"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
