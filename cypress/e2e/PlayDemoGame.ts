import { Given, When, Then, Step } from "@badeball/cypress-cucumber-preprocessor";
import HellHot20 from "./pages/games/hellHot20";


Given("I'm on in a Hell Hot 20 Game", () => {
    cy.visit("/game/demoGame/12204", {failOnStatusCode: false});
})

When("I wait the game was loaded", () => {
    
    cy.intercept("/games-wgl/endorphina2/HellHot20/configs/config.desktop.json?_t=*").as("config")
    cy.intercept("games-wgl/endorphina2/HellHot20/build.properties?_t=*").as("properties")
    cy.intercept("/games-wgl/endorphina2/HellHot20/sounds/**").as("sounds")

    cy.wait("@config", {timeout: 10000}) 
    cy.wait("@properties", {timeout: 10000})  
    cy.wait("@sounds", {timeout: 30000})
})

Then("I play the game", ()=>{

    const iframe = cy.get("iframe.gameContainer")
    .its('0.contentDocument')
    .should('exist')
    .then(cy.wrap)
    .find("#viewport")

    const game = new HellHot20(iframe)
    
    //Open/Close Menu
    cy.wait(2000)
    game.clickOnMenu()
    
    //Open/Close Menu
    cy.wait(1000)
    game.clickOnMenu()
    
    //Click on FixedLine button
    cy.wait(1000)
    game.clickOnLine()

    //Click on Coin Value button
    cy.wait(1000)
    game.clickOnCoinValue()

    //Click on Turbo button
    cy.wait(1000)
    game.clickOnTurbo()

    //Click on Spin button
    cy.wait(1000)
    game.clickOnSpin()

    //Click on Spin button
    cy.wait(1000)
    game.clickOnSpin()

    //Click on Auto buton
    cy.wait(1000)
    game.clickOnAuto()
    cy.wait(5000)
    game.clickOnAuto()
    cy.wait(1000)
    
})

Then("I take a picture of the game", () => {
    cy.get("iframe.gameContainer")
    .screenshot("HellHot20", {overwrite: true})
})

