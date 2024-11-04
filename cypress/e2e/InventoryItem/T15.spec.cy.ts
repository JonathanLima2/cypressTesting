import { Item } from "./inventoryItem.PO";

describe('[T15] Access products list from menu',()=>{
    const itemPO = new Item();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can use the side menu to navigate to the home page',()=>{
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
        itemPO.getItemFirstName().click();
        itemPO.getItemURLCheck('item');
        itemPO.getItemDetails().should('be.visible');
        itemPO.getItemSidebarMenu().should('be.visible').click().then(()=>{
            itemPO.getItemWait(1000);
            itemPO.getItemSidebarHomepageButton().should('be.visible').click();
        });
        itemPO.getItemURLCheck('inventory');
        itemPO.getItemInventoryList().should('be.visible');
    });
});