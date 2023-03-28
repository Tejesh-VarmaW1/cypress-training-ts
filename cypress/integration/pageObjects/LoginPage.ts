class LoginPage {
  getUserNameField() {
    return cy.get("#user-name");
  }

  getPasswordField() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getPageTitle() {
    return cy.get(".login_logo");
  }
}

export default LoginPage;
