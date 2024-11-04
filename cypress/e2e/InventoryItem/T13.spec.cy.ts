describe('[T13] Remove a selected product from the cart',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to remove a product from the shopping cart inside the item details screen',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().click();
        cy.url().should('contain','item');
        cy.get('#inventory_item_container').should('be.visible');
        cy.get('#add-to-cart').should('be.visible').click();
        cy.get('.shopping_cart_badge').should('be.visible');
        cy.get('.shopping_cart_badge').should('contain.text',1);
        cy.get('#remove').should('be.visible').click();
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});