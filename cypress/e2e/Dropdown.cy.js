

describe('dropdowns', () => {
   it.skip("Dropdown select", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Italy").type("{enter}")
        cy.get("#select2-billing_country-container").should("have.text" , "Italy")

    })


    it("Dropdown suggestion", () => {

        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type("İstanbul");
        cy.contains(".suggestion-title", "İstanbul'un Fethi").click();
        

    })



  })

