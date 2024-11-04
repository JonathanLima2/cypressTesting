import { inventory } from "./inventory.PO";

describe('[T20] Resume a previous session',()=>{
    const inventoryPO = new inventory();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the user can login again and have the previous session saved',()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');       
        inventoryPO.getInventoryAddFirstProduct().should('be.visible').click();
        inventoryPO.getInventoryShoppingCartBadge().should('be.visible').scrollIntoView();
        inventoryPO.getInventoryShoppingCartBadge().should('contain.text','1').then(()=>{
            inventoryPO.getInventorySideBarMenu().should('be.visible').click();
            inventoryPO.getInventoryLogout().should('be.visible').click();
            inventoryPO.getInventoryLogoutURLCheck();
            cy.fixture('login').then((alias)=>{
                cy.login(alias.name.standardUser,alias.passwords.standard);
            });
            inventoryPO.getInventoryURLCheck('inventory');
            inventoryPO.getInventoryList().should('be.visible');       
            inventoryPO.getInventoryShoppingCartBadge().should('contain.text','1');
        });
    });
});