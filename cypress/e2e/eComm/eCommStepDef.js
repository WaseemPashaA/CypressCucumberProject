import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('Open ECommerce website',()=>
{
    cy.visit("https://www.amazon.in/")
})

//title - Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in

// When I add items to Cart
When('Validate page title',function ()
{
    cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
  });
  
Then('Select the product',()=>
{
    cy.contains("Refrigerators").click()
    })
    