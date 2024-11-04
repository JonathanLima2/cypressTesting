export class inventory{
    getInventoryWait(time:number){
        return cy.wait(time);
    }
    getInventoryURLCheck(url:string){
        return cy.url().should('contain',url);
    }
    getInventoryList(){
        return cy.get('.inventory_list');
    }
    getInventoryAddFirstProduct(){
        return  cy.get('.btn_primary').first();
    }
    getInventoryAddProductButton(){
        return cy.get('.btn_primary');
    }
    getInventoryRemoveProductButton(){
        return cy.get('.btn_secondary');
    }
    getInventoryRemoveFirstProduct(){
        return cy.get('.btn_secondary').first();
    }
    getInventoryShoppingCartIcon(){
        return cy.get('.shopping_cart_link');
    }
    getInventoryShoppingCartBadge(){
        return cy.get('.shopping_cart_badge');
    }
    getInventoryFirstProductName(){
        return cy.get('.inventory_item_name').first();
    }
    getInventoryLastProductName(){
        return cy.get('.inventory_item_name').last();
    }
    getInventoryFilterButtonSelection(sort:string){
        return cy.get('.product_sort_container').should('be.visible').select(sort);
    }
    getInventoryItemDetails(){
        return cy.get('#inventory_item_container');
    }
    getInventoryItemOnCartList(){
        return cy.get('#cart_contents_container');
    }
    getInventorySideBarMenu(){
        return cy.get('#react-burger-menu-btn');
    }
    getInventoryLogout(){
        return cy.get('#logout_sidebar_link');
    }
    getInventoryLogoutURLCheck(){
        return cy.url().should('not.contain','inventory'); 
    }
}