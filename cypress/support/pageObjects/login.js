class LoginPage{

    elements = {
        URL: () => cy.visit('https://aladdin-ui-stage.etloptival.com/'),
        emailInput: () => cy.get('input[placeholder="Enter Your Email"]'),
        passwordInput : () => cy.get('input[id=":r1:"]'),
        loginButton : () => cy.contains('button', 'LOGIN NOW'),
    }

    baseURL(){
        this.elements.URL();
    }

    enterUsername(username){
        this.elements.emailInput().type(username)
    }

    enterPassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLogin(){
        this.elements.loginButton().click()
    }
}

export default new LoginPage()