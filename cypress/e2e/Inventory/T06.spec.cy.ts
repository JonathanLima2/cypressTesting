import { inventory } from "./inventory.PO";

describe('[T06] Add a product to the cart',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to add a product to the shopping cart',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryAddFirstProduct().should('be.visible').click();
        inventoryPO.getInventoryShoppingCartBadge().should('be.visible').scrollIntoView();
        inventoryPO.getInventoryShoppingCartBadge().should('contain.text','1');
    });
});