import { login } from "./login.PO";

describe('[T02] Login with disabled user',()=>{
    const loginPO = new login();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.lockoutUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform with a disabled account',()=>{
        loginPO.getLoginErrorMessage().should('be.visible');
    });
});