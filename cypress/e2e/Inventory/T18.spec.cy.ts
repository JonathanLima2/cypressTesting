describe('[T18] Access shopping cart',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see the shopping cart list',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('#shopping_cart_container').should('be.visible').click();
        cy.url().should('contain','cart');
        cy.get('#cart_contents_container').should('be.visible');
    });
});