declare namespace Cypress{
    interface Chainable{
        login(user:string, password:string):Chainable<Element>;        
    }
}
Cypress.Commands.add('login',(username:string, password:string)=>{
    cy.visit('/');
    cy.get('.login_wrapper').should('be.visible').then(()=>{
        cy.get('#user-name').click().type(username);
        cy.get('#password').click().type(password);
        cy.get('#login-button').should('be.enabled').click();    
    });
});