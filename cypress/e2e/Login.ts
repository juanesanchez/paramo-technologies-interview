import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./pages/loginPage";

const loginPage = new LoginPage();


Given("I'm on login page", () => {
  cy.visit("/user/login", {failOnStatusCode: false});
});

When("I complete user and password field with invalid account", () => {
  const {username, password} = Cypress.env().invalidUser
  Step(this, `I complete user with "${username}"`)
  Step(this, `I complete password with "${password}"`)
});

When("I complete user and password field with valid account", () => {
  const {username, password} = Cypress.env().user
  Step(this, `I complete user with "${username}"`)
  Step(this, `I complete password with "${password}"`)
});

Then('I complete user with {string}', (user: string) => {
  loginPage.setInputUser(user)
})

Then("I complete password with {string}", (password: string) => {
  loginPage.setInputPassword(password)
})

Then("I click on login button", ()=>{
  loginPage.getBtnLogin().click()
})

Then("I must see {string} mesasge", (message: string)=>{
  cy.log("This was skipped by reCAPTCHA")
  return "skipped";
  //loginPage.getTxtUserInvalid().should('contain.text', message)
})

Then('I must redirected to {string}', (url: string)=>{
  cy.log("This was skipped by reCAPTCHA")
  return "skipped";
  //cy.url().should('eq', `${Cypress.env().baseUrl}`)
})