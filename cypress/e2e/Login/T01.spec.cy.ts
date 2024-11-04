describe('[T01] Login',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can enter the platform',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
    });
});