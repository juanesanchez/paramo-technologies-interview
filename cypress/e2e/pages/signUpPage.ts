class SignUpPage {

   getFormLogin(){
      return cy.get("#registration_form_1", {timeout: 10000})
   }

   getInputEmail(){
      return cy.get("[data-test='input-email']")
   }
   getInputPromoCode(){
      return cy.get("#bonus-list > div:nth-child(1)")
   }

   getInputPromoBonus(){
      return cy.get("#bonus-list > div:nth-child(2)")
   }

   getInputPassword(){
      return cy.get("[data-test='input-password']")
   }

   getInputReenterPassword(){
      return cy.get("[data-test='input-password_confirmation']")
   }

   getBtnCreateAccount(){
      return cy.get("#registration_form_1  button")
   }

   setInputEmail(email: string){
    return this.getInputEmail().type(email)
   }

   setInputPassword(password: string){
      return this.getInputReenterPassword().type(password)
   }

   setInputReenterPassword(password: string){
      return this.getInputReenterPassword().type(password)
   }
   


}

export default SignUpPage;