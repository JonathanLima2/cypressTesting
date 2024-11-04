import { inventory } from "./inventory.PO";

describe('[T16] Access shopping cart after product selection',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can see the shopping cart list',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryAddFirstProduct().should('be.visible').click();
        inventoryPO.getInventoryShoppingCartBadge().should('be.visible').scrollIntoView();
        inventoryPO.getInventoryShoppingCartBadge().should('contain.text','1');
        inventoryPO.getInventoryShoppingCartIcon().should('be.visible').click();
        inventoryPO.getInventoryURLCheck('cart');
        inventoryPO.getInventoryItemOnCartList().should('be.visible');
    });
});