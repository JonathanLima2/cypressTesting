import { inventory } from "./inventory.PO";

describe('[T19] Logout',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can log out of the platform successfully',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');       
        inventoryPO.getInventorySideBarMenu().should('be.visible').click();
        inventoryPO.getInventoryLogout().should('be.visible').click();
        inventoryPO.getInventoryLogoutURLCheck();
    });
});