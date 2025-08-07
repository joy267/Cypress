describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://aladdin-ui-stage.etloptival.com/');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('template creation', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://aladdin-ui-stage.etloptival.com/');
    cy.get('#\\:r0\\:').clear('t');
    cy.get('#\\:r0\\:').type('test');
    cy.get('#\\:r0\\:').click();
    cy.get('#\\:r0\\:').clear('tester@etloptival.com');
    cy.get('#\\:r0\\:').type('tester@etloptival.com');
    cy.get('#\\:r1\\:').clear('soliva@123');
    cy.get('#\\:r1\\:').type('soliva@123');
    cy.get('.MuiButton-root').click();
    /* ==== End Cypress Studio ==== */
  });
})