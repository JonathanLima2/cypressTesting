describe('[T08] Remove a product from the cart',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to remove a product from the shopping cart',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.btn_primary').first().should('be.visible').click();
        cy.get('.btn_secondary').first().should('be.visible').click();
        cy.get('.shopping_cart_link').should('be.visible').scrollIntoView();
        cy.get('.shopping_cart_badge').should('not.exist');    
    });
});