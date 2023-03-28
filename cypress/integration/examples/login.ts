/// <reference types="cypress"/>
import LoginPage from "../pageObjects/LoginPage";

describe("Typescript test 1", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Sauce demo", function () {
    const loginPage = new LoginPage();

    cy.visit("https://www.saucedemo.com/");
    // loginPage.getPageTitle().should("be.visible");
    loginPage.getUserNameField().type(this.data.username);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click();
  });
});
