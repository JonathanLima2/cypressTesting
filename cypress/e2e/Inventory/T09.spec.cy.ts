import { inventory } from "./inventory.PO";

describe('[T09] Remove products from the cart',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to remove multiple products from the shopping cart',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryAddFirstProduct().should('be.visible');
        inventoryPO.getInventoryAddProductButton().each((addCart)=>{
            cy.wrap(addCart).scrollIntoView().click();
        }).then(()=>{
            inventoryPO.getInventoryRemoveFirstProduct().should('be.visible');
            inventoryPO.getInventoryRemoveProductButton().each((remove)=>{
                cy.wrap(remove).scrollIntoView().click();
            });
        });
        inventoryPO.getInventoryShoppingCartIcon().should('be.visible').scrollIntoView();
        inventoryPO.getInventoryShoppingCartBadge().should('not.exist');    
    });
});