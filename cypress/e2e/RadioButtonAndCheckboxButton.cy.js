describe('CheckAndVisible', () => {
    it("checkingRadioButtons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //selecting radio radio buttons
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('be.not.checked')
        
        //visibility of radio buttons
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')
        

    })

    it("checkingCheckBoxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        //Visibility of the elements
        cy.get("#monday").should("be.visible")

        //Selecting single checkbox
        cy.get("#monday").check().should("be.checked")
        
        //Unselecting checkbox
        cy.get("#monday").uncheck().should("not.be.checked")

        //All selecting checkbox
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        //All unselecting checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

    })
  })