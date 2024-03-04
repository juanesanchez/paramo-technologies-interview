class HellHot20 {

    iframe: Cypress.Chainable<JQuery<HTMLElement>>
    constructor(iframe: Cypress.Chainable<JQuery<HTMLElement>>){
        this.iframe = iframe
    }

    clickOnMenu(){
        return this.iframe.click(75, 640)
    }

    clickOnLine(){
        return this.iframe.click(250, 650)
    }

    clickOnCoinValue(){
        return this.iframe.click(400, 650)
    }

    clickOnTurbo(){
        return this.iframe.click(770, 650)
    }

    clickOnAuto(){
        return this.iframe.click(900, 650)
    }

    clickOnSpin(){
        return this.iframe.click(1100, 650)
    }

    
}

export default HellHot20