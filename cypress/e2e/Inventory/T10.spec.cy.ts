describe('[T10] Filter product list',()=>{
    let topItem:string;
    let bottomItem: string;
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it("Validate if the user can filter the products list with an order selection",()=>{
        cy.url().should('contain','inventory');
        cy.get('.inventory_list').should('be.visible');
        cy.get('.inventory_item_name').first().then((firstProduct)=>{
            topItem = firstProduct.text();
            console.log(topItem);
            cy.get('.inventory_item_name').last().then((lastProduct)=>{
                bottomItem = lastProduct.text();         
                cy.get('.product_sort_container').should('be.visible').select('za');
                cy.wait(1000);
                cy.get('.inventory_item_name').first().should('contain.text',bottomItem);
                cy.get('.inventory_item_name').last().should('contain.text',topItem);
            });
        });
    });
});