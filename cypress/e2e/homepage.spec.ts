import { CMS_BASEURL } from "../fixtures/constants"

describe("Login flow", () => {
  const LOGIN_BUTTON_TEXT = "Login with GitHub"
  const GITHUB_LOGIN_URL = "https://github.com/login"

  it("Home page should have login button", () => {
    cy.visit(CMS_BASEURL)
    cy.contains("button", LOGIN_BUTTON_TEXT).should("exist")
  })

  it("Login button should redirect to GitHub login on click", () => {
    cy.visit(CMS_BASEURL)

    // This is necessary to prevent the frontend from throwing the 401 error from the backend.
    // TODO: We should handle this properly in the axios interceptor.
    cy.on("uncaught:exception", () => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.contains(LOGIN_BUTTON_TEXT).click()
    cy.url().should("include", GITHUB_LOGIN_URL)
  })
})
