describe('dropdowns', () => {
    it("Dropdown select", () => {
 
         cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
         cy.get("#select2-billing_country-container").click()
         cy.get("input[role='combobox']").type("Italy").type("{enter}")
         cy.get("#select2-billing_country-container").should("have.text" , "Italy")
 
     })
 
 
    .it("Dropdown suggestion", () => {
 
         cy.visit("https://www.wikipedia.org/")
         cy.get("#searchInput").click().type("İstanbul")
         cy.get("suggestion-title").contains("İstanbul'un Fethi").click()
         
 
     })
 
 
 
   })