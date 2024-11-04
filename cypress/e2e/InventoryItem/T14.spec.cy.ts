describe('[T14] Return to home page',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the platform breadcrumbs to return to the home page',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().click();
        cy.url().should('contain','item');
        cy.get('#inventory_item_container').should('be.visible');
        cy.get('#back-to-products').should('be.visible').click();
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
    });
});