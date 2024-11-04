export class login{
    getLoginProductsList(){
        return cy.get('.inventory_list');
    }
    getLoginURLCheck(url:string){
        return cy.url().should('contain',url);
    }
    getLoginErrorMessage(){
        return cy.get('.error-message-container');
    }
}