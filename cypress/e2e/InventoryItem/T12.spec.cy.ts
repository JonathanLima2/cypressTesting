import { Item } from "./inventoryItem.PO";

describe('[T12] Add a selected product to the cart',()=>{
    const itemPO = new Item();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can add a product to the shopping cart from the item details',()=>{
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
        itemPO.getItemFirstName().click();
        itemPO.getItemURLCheck('item');
        itemPO.getItemDetails().should('be.visible');
        itemPO.getItemAddProduct().should('be.visible').click();
        itemPO.getItemShoppingCartBadge().should('be.visible');
        itemPO.getItemShoppingCartBadge().should('contain.text',1);
    });
});