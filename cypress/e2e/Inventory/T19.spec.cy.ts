describe('[T19] Logout',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can log out of the platform successfully',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get('#logout_sidebar_link').should('be.visible').click();
        cy.url().should('not.contain','inventory');
    });
});