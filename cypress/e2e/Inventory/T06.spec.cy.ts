describe('[T06] Add a product to the cart',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to add a product to the shopping cart',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.btn_primary').first().should('be.visible').click();
        cy.get('.shopping_cart_badge').should('be.visible').scrollIntoView();
        cy.get('.shopping_cart_badge').should('contain.text','1');
    });
});