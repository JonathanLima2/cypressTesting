describe('[T07] Add products to the cart',()=>{
    let noItems:number = 0;
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to add multiple products to the shopping cart',()=>{
        
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.btn_primary').first().should('be.visible');
        cy.get('.btn_primary').each((addCart)=>{
            cy.wrap(addCart).scrollIntoView().click();
            noItems=noItems+1;
        }).then(()=>{
            cy.get('.shopping_cart_badge').should('be.visible').scrollIntoView();
            cy.get('.shopping_cart_badge').should('contain.text',noItems.toString());    
        });
    });
});