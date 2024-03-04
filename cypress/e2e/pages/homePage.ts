class HomePage{

    getHtmlDocument(){
        return cy.get('html')
    }

    getBtnSingUp(){
        return cy.get(".login > div.button")
    }

    getBtnSingIn(){
        return cy.get("header > div > div > div.header--right > a")
    }

    getModalWelcome(){
        return cy.get("#welcome_modal")
    }

    getBtnSwtichTheme(){
        return cy.get("#switch")
    }

    getBtnAside(){
        return cy.get("div.sidebar-toggler")
    }

    getBtnSearch(){
        return cy.get("#btn-search")
    }

    getModalBackground(){
        return cy.get("#search-modal-background")
    }

    getFormSearch(){
        return cy.get("#search-widget-form")
    }

    getInputSearch(){
        return this.getFormSearch().find("input")
    }

    getListResultsGame(){
        return cy.get("#search-widget-game-list")
    }
    getListNotFound(){
        return cy.get("#games-not-found")
    }


}

export default HomePage