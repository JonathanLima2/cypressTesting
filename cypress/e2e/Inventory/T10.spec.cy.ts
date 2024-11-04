import { inventory } from "./inventory.PO";

describe('[T10] Filter product list',()=>{
    const inventoryPO = new inventory();
    let topItem:string;
    let bottomItem: string;
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it("Validate if the user can filter the products list with an order selection",()=>{
        inventoryPO.getInventoryURLCheck('inventory');
        inventoryPO.getInventoryList().should('be.visible');
        inventoryPO.getInventoryFirstProductName().then((firstProduct)=>{
            topItem = firstProduct.text();
            inventoryPO.getInventoryLastProductName().then((lastProduct)=>{
                bottomItem = lastProduct.text();         
                inventoryPO.getInventoryFilterButtonSelection('za');
                inventoryPO.getInventoryWait(1000);
                inventoryPO.getInventoryFirstProductName().should('contain.text',bottomItem);
                inventoryPO.getInventoryLastProductName().should('contain.text',topItem);
            });
        });
    });
});