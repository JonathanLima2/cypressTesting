import { Item } from "./inventoryItem.PO";

describe('[T14] Return to home page',()=>{
    const itemPO = new Item();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the platform breadcrumbs to return to the home page',()=>{
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
        itemPO.getItemFirstName().click();
        itemPO.getItemURLCheck('item');
        itemPO.getItemDetails().should('be.visible');
        itemPO.getItemReturnButton().should('be.visible').click();
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
    });
});