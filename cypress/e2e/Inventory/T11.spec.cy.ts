import { inventory } from "./inventory.PO";

describe('[T11] Select a Product from the list',()=>{
    const inventoryPO = new inventory(); 
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see detailed information about a selected product',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryFirstProductName().click();
        inventoryPO.getInventoryURLCheck('item');
        inventoryPO.getInventoryItemDetails().should('be.visible');
    });
});