import { inventory } from "./inventory.PO";

describe('[T08] Remove a product from the cart',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to remove a product from the shopping cart',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryAddFirstProduct().should('be.visible').click();
        inventoryPO.getInventoryRemoveFirstProduct().should('be.visible').click();
        inventoryPO.getInventoryShoppingCartIcon().should('be.visible').scrollIntoView();
        inventoryPO.getInventoryShoppingCartBadge().should('not.exist');    
    });
});