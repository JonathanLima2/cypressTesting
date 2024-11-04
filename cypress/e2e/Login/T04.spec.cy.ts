import { login } from "./login.PO";

describe('[T04] Login with unregistered username',()=>{
    const loginPO = new login();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.invalidUser, alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform with an unregistered user',()=>{
        loginPO.getLoginErrorMessage().should('be.visible');
    });
});