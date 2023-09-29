describe('Signup and Login Test', () => {
  it('Signup_Test', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#signin2').click()
    cy.wait(2000)
    cy.get('#sign-username').type("Admin")
    cy.get('#sign-password').type("admin123")
    cy.get("button[onclick='register()']").click()

  })
})