describe('[T11] Select a Product from the list',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see detailed information about a selected product',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().click();
        cy.url().should('contain','item');
        cy.get('#inventory_item_container').should('be.visible');
    });
});