import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "./pages/homePage";
import SignUpPage from "./pages/signUpPage";

const homePage = new HomePage();
const signUpPage = new SignUpPage();

Given("I'm on registartion's page", () => {
    cy.visit("/user/registration", {failOnStatusCode: false});
    signUpPage.getFormLogin()
});

When("I am on the registartion's page", () =>{
    signUpPage.getFormLogin()
})

Then("I complete eamil with a user not registred", ()=>{
    signUpPage.setInputEmail("exampleœ@example.com")
})

Then("I choose promo bonus", () => {
    signUpPage.getInputPromoBonus().click()
})

Then("I complete password field", () => {
    signUpPage.setInputPassword("Casino123456")
})

Then("I complete reenter password field", () => {
    signUpPage.setInputReenterPassword("Casino123456")
})


Then("I click on create account", ()=>{
    signUpPage.getBtnCreateAccount().click()
})


