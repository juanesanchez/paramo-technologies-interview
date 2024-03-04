class LoginPage {

   getInputUser(){
     return cy.get("[data-test='input-username']")
   }

   getInputPassword(){
     return cy.get("[data-test='input-password']")
   }

   getBtnLogin(){
     return cy.get("[data-test='control-submit']")
   }

   setInputUser(user: string){
     return this.getInputUser().type(user)
   }
   setInputPassword(password: string){
     return this.getInputPassword().type(password)
   }

   getTxtUserInvalid(){
     return cy.get("[data-test='error-username']")
   }


}

export default LoginPage;