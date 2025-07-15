describe('Create Theme', () => {

  it('Create Theme Successfully', () => {
    cy.visit('https://aladdin-ui-stage.etloptival.com/')
    cy.get('input[placeholder="Enter Your Email"]').type('tester@etloptival.com')
    cy.get('input[id=":r1:"]').type('soliva@123')
    cy.contains('button', 'LOGIN NOW').click()
    cy.get('div[aria-label="Assets"]').click()
    cy.contains('span', 'Design').click()
    cy.contains('span', 'Themes').click()
    cy.get('input[placeholder="Search site name or choose from the list"]').click()
    cy.get('input[placeholder="Search site name or choose from the list"]').type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}').type('{enter}')
    cy.contains('button', 'SELECT SITE').click()
    cy.contains('button', 'Create Theme').click()
    cy.get('#outlined-multiline-flexible').type('test theme') //theme name
    cy.get('div[class="ace_content"]').type('{}')
    cy.get('input[id=":r21:"]').click()
    cy.get('input[id=":r21:"]').type('{downarrow}').type('{enter}')
    cy.contains('button', 'Create Theme').click()
    cy.contains('button', 'Close').click()

  })
  })

describe('Edit Theme', () => {

  it('Create Theme Successfully', () => {
    cy.visit('https://aladdin-ui-stage.etloptival.com/')
    cy.get('input[placeholder="Enter Your Email"]').type('tester@etloptival.com')
    cy.get('input[id=":r1:"]').type('soliva@123')
    cy.contains('button', 'LOGIN NOW').click()


  })
  })
