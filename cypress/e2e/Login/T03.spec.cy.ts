import { login } from "./login.PO";

describe('[T03] Login with wrong password',()=>{
    const loginPO = new login();
    beforeEach(()=>{
        const wrongPw = 'no_sauce';
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,wrongPw);
        });
    });
    it('Validate if the user can enter the platform with the wrong password',()=>{
        loginPO.getLoginErrorMessage().should('be.visible');
    });
});