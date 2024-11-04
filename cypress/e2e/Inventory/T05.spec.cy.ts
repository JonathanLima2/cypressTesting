describe('[T05] Access home page',()=>{
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it("Validate if the user can access the platform's home page",()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
    });
});