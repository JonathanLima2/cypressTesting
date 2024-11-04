import { Item } from "./inventoryItem.PO";

describe('[T13] Remove a selected product from the cart',()=>{
    const itemPO = new Item();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user is able to remove a product from the shopping cart inside the item details screen',()=>{
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
        itemPO.getItemFirstName().click();
        itemPO.getItemURLCheck('item');
        itemPO.getItemDetails().should('be.visible');
        itemPO.getItemAddProduct().should('be.visible').click();
        itemPO.getItemShoppingCartBadge().should('be.visible');
        itemPO.getItemShoppingCartBadge().should('contain.text',1);
        itemPO.getItemRemoveProduct().should('be.visible').click();
        itemPO.getItemShoppingCartBadge().should('not.exist');
    });
});