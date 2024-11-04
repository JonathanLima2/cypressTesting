describe('[T12] Add a selected product to the cart',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can add a product to the shopping cart from the item details',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().click();
        cy.url().should('contain','item');
        cy.get('#inventory_item_container').should('be.visible');
        cy.get('#add-to-cart').should('be.visible').click();
        cy.get('.shopping_cart_badge').should('be.visible');
        cy.get('.shopping_cart_badge').should('contain.text',1);
    });
});