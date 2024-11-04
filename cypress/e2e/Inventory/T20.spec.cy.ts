describe('[T20] Resume a previous session',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can login again and have the previous session saved',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.btn_primary').first().should('be.visible').click();
        cy.get('.shopping_cart_badge').should('be.visible').scrollIntoView();
        cy.get('.shopping_cart_badge').should('contain.text','1').then(()=>{
            cy.get('#react-burger-menu-btn').should('be.visible').click();
            cy.get('#logout_sidebar_link').should('be.visible').click();
            cy.url().should('not.contain','inventory');
            cy.fixture('login').then((alias)=>{
                cy.login(alias.name.standardUser,alias.passwords.standard);
            });
            cy.url().should('contain','inventory');
            cy.get('.inventory_list').should('be.visible');
            cy.get('.shopping_cart_badge').should('contain.text','1');
        });
    });
});