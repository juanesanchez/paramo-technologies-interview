import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "./pages/homePage";

const homePage = new HomePage

Given("I'm on the Home page", ()=>{
    cy.visit("/", {failOnStatusCode: false});
})

When('I verify that the page is in dark mode', ()=>{
    homePage.getHtmlDocument().should('have.class', 'theme-dark')
})

Then("I click on switch mode", ()=>{
    homePage.getBtnSwtichTheme().click()
})

Then("The page must change to light mode", ()=>{
    homePage.getHtmlDocument().should('have.class', 'theme-light')
})

Then("I click on aside button", ()=>{
    homePage.getBtnAside().click()
})

Then("Aside bar must be opened", () =>{
    homePage.getBtnAside().should('have.class', 'opened')
})

Then("I click on search button", ()=>{
    homePage.getBtnSearch().click()
})

Then("Modal background must be desplayed", ()=>{
    homePage.getModalBackground().should('be.visible')
})

Then("Input search must be displayed and visible", ()=>{
    homePage.getInputSearch().should('be.visible')
})


Then("I look for the game {string}", (game: string)=>{
    homePage.getInputSearch().type(game) 
})

Then("I expect find at least a game as {string}", (result: string)=>{
    homePage.getListResultsGame().each((item)=>{
        cy.wrap(item)
        .should('contain.text', result)})
})

