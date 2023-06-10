

describe('My First Test', () => {

    it('test1-positive', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq' , 'OrangeHRM')
    })

    it('test1-negative', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should('eq' , 'OrangeHRM123')
    })
  })


