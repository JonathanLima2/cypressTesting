import {cart} from './cart.po';

describe('[T17] Return to home page from shopping cart',()=>{
    const cartPO = new cart();
    beforeEach(()=>{
        cy.fixture('login').then((alias)=>{
            cy.login(alias.name.standardUser,alias.passwords.standard);
        });
    });
    it('Validate if the platform breadcrumbs to return to the home page	Cart',()=>{
        cartPO.getCartURLCheck('inventory');
        cartPO.getCartInventoryList().should('be.visible');
        cartPO.getCartShoppingCartIcon().should('be.visible').click();
        cartPO.getCartURLCheck('cart');
        cartPO.getCartShoppingCartList().should('be.visible');
        cartPO.getCartContinueShoppingButton().should('be.visible').click();
        cartPO.getCartURLCheck('inventory');
    });
});