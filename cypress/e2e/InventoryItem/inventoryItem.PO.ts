export class Item{
    getItemWait(time:number){
        return cy.wait(time);
    }
    getItemURLCheck(url:string){
        return cy.url().should('contain',url);
    }
    getItemInventoryList(){
        return cy.get('.inventory_list');
    }
    getItemFirstName(){
        return cy.get('.inventory_item_name').first();
    }
    getItemDetails(){
        return cy.get('#inventory_item_container');
    }
    getItemAddProduct(){
        return cy.get('#add-to-cart');
    }
    getItemShoppingCartBadge(){
        return cy.get('.shopping_cart_badge');
    }
    getItemRemoveProduct(){
        return cy.get('#remove');
    }
    getItemReturnButton(){
        return cy.get('#back-to-products');
    }
    getItemSidebarMenu(){
        return cy.get('#react-burger-menu-btn');
    }
    getItemSidebarHomepageButton(){
        return cy.get('#inventory_sidebar_link');
    }
}