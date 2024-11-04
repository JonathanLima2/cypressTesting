describe('[T15] Access products list from menu',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can use the side menu to navigate to the home page',()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().click();
        cy.url().should('contain','item');
        cy.get('#inventory_item_container').should('be.visible');
        cy.get('#react-burger-menu-btn').should('be.visible').click().then(()=>{
            cy.wait(1000);
            cy.get('#inventory_sidebar_link').should('be.visible').click();
        });
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
    });
});