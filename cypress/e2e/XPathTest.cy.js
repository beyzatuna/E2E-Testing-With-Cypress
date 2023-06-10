

describe('XPath Locators', () => {

    it('find no of products', () => {
      
        cy.visit("http://automationpractice.pl/index.php?controller=best-sales")

        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length' , 6)
    })

    
  })