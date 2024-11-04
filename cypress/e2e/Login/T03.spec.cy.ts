describe('[T03] Login with wrong password',()=>{
    beforeEach(()=>{
        const wrongPw = 'no_sauce';
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,wrongPw);
        });
    });
    it('Validate if the user can enter the platform with the wrong password',()=>{
        cy.get('.error-message-container').should('be.visible');
    });
});