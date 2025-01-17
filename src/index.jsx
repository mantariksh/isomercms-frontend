import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import ReactDOM from "react-dom"

import "styles/index.scss"
import "styles/isomer-template.scss"
import App from "App"

if (
  process.env.REACT_APP_SENTRY_ENV === "staging" ||
  process.env.REACT_APP_SENTRY_ENV === "production"
) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  })
}

ReactDOM.render(<App />, document.getElementById("root"))
