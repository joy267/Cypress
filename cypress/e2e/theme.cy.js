import login from "../support/pageObjects/login"

describe ('Theme', () => {

    const username = 'tester@etloptival.com'
    const password = 'soliva@123'
    const sitedropdown = 'input[placeholder="Search site name or choose from the list"]'
    const select_template = 'input[placeholder="Please select a Template from the list."]'

    beforeEach( () => {

        login.baseURL()

        // Login
        login.enterUsername('tester@etloptival.com')
        login.enterPassword('soliva@123')
        login.clickLogin()

        // Wait for dashboard or assets to load
        cy.get('div[aria-label="Assets"]', {timeout:10000}).should('be.visible').click()
        cy.contains('span', 'Design').click()
        cy.contains('span', 'Themes').click()

        // Select a site
        cy.get(sitedropdown).click().type('{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter}')
        cy.contains('button', 'SELECT SITE').click()
    })

    it('Should create a theme successfully', () => {

        cy.contains('button', 'Create Theme', {timeout:10000}).should('be.visible').click()
        const theme_name = `test-theme-${Date.now()}`
        cy.get('#outlined-multiline-flexible',{timeout:10000}).should('be.visible').click().type(theme_name, { parseSpecialCharSequences: false })

        // Enter empty JSON object
        cy.get('div[class="ace_content"]').type('{}')

        // Select a template from dropdown
        cy.get(select_template, {timeout:10000}).should('be.visible').first().click()
        cy.get(select_template).first().type('{downarrow}{enter}')

        // Submit creation
        cy.contains('button', 'Create Theme').click()

        // Assert success modal/dialog appears or changes in UI
        cy.contains('button', 'Close', {timeout:10000}).should('be.visible').click()
    })

    it('Should edit an excisting theme successfully', () => {

        // Open first theme edit icon
        cy.get('svg[data-testid="CreateOutlinedIcon"]',{timeout:10000}).should('be.visible').first().click()

        // Click save changes
        cy.contains('button', 'Save Changes',{timeout:10000}).should('be.visible').click()

        // Assert success or confirmation modal/dialog
        cy.contains('button', 'Close', {timeout:10000}).should('be.visible').click()

    })

})