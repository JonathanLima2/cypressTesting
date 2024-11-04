describe('[T04] Login with unregistered username',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.invalidUser, alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform with an unregistered user',()=>{
        cy.get('.error-message-container').should('be.visible');
    });
});