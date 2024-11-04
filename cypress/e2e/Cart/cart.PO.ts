export class cart{
    getCartURLCheck(url:string){
        return cy.url().should('contain',url);
    }
    getCartInventoryList(){
        return cy.get('.inventory_list');
    }
    getCartShoppingCartIcon(){
        return cy.get('#shopping_cart_container');
    }
    getCartShoppingCartList(){
        return cy.get('#cart_contents_container');
    }
    getCartContinueShoppingButton(){
        return cy.get('#continue-shopping');
    }
}  