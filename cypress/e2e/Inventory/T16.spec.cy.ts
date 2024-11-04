describe('[T16] Access shopping cart after product selection',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see the shopping cart list',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.btn_primary').first().should('be.visible').click();
        cy.get('.shopping_cart_badge').should('be.visible').scrollIntoView();
        cy.get('.shopping_cart_badge').should('contain.text','1');
        cy.get('#shopping_cart_container').should('be.visible').click();
        cy.url().should('contain','cart');
        cy.get('#cart_contents_container').should('be.visible');
    });
});