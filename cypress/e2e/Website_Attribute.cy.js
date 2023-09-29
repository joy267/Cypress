
describe('Website_Attribute', () => {


  it('Edit Default Post Template', () => {
    //cy.viewport(1280,720)
    cy.visit('https://staging.etloptival.com/admin/')
    cy.get('#id_username').type('mrityunjoy@solivatech.com')
    cy.get('#id_password').type('killerboyz567')
    cy.get('.submit-row > input').click()
    cy.get('.model-websiteattribute > th > a').click()
    cy.get('#websites-select-div > .dropdown > .btn').click()
    cy.get('#websites-select-div > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("Punters")
    cy.get('#bs-select-1-10').click()
    cy.get('#confirm-website-button').click()
    cy.wait(6000)
    cy.get('#post-template-select-elements > .dropdown > .btn').click()
    cy.get('#post-template-select-elements > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control').type("News Template")
    cy.get('#bs-select-4-7').click()
    cy.get('#wa-save-button').click()
  })
})