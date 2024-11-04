describe('[T02] Login with disabled user',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.lockoutUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform with a disabled account',()=>{
        cy.get('.error-message-container').should('be.visible');
    });
});