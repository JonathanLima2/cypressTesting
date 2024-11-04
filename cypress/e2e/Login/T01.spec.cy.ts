import { login } from "./login.PO";

describe('[T01] Login',()=>{
    const loginPO = new login();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform',()=>{
        cy.url().should('contain','inventory');
        loginPO.getLoginProductsList().should('be.visible');
    });
});