import { inventory } from "./inventory.PO";

describe('[T07] Add products to the cart',()=>{
    const inventoryPO = new inventory();
    let noItems:number = 0;
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to add multiple products to the shopping cart',()=>{       
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryAddFirstProduct().should('be.visible');
        inventoryPO.getInventoryAddProductButton().each((addCart)=>{
            cy.wrap(addCart).scrollIntoView().click();
            noItems=noItems+1;
        }).then(()=>{
            inventoryPO.getInventoryShoppingCartBadge().should('be.visible').scrollIntoView();
            inventoryPO.getInventoryShoppingCartBadge().should('contain.text',noItems.toString());    
        });
    });
});