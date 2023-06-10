describe('CSSLocators', () => {
    it("cssLocators", () => {
        cy.visit("http://automationpractice.pl/index.php");
        cy.wait(2000); // 2 saniye bekle
        cy.get("#search_query_top").type("T-shirts")
        cy.get("[name='submit_search']").click()
        cy.wait(5000); // 5 saniye bekle
        cy.get(".heading-counter").contains("1 result has been found.")
        cy.wait(5000); // 5 saniye bekle
        

    })
  })