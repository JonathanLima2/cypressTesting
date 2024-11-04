import { inventory } from "./inventory.PO";

describe('[T18] Access shopping cart',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see the shopping cart list',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');        
        inventoryPO.getInventoryShoppingCartIcon().should('be.visible').click();
        inventoryPO.getInventoryURLCheck('cart');
        inventoryPO.getInventoryItemOnCartList().should('be.visible');
    });
});