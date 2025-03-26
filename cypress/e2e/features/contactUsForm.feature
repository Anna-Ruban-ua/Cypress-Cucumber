Feature: Form Validation Tests

  @positive
  Scenario: TC02 - Valid "Connect with us" Form submit
    Given I open the "home" page
    When I enter a valid email
    Then I redirected to the "signUp" page

  @negative
  Scenario: TC03 - Invalid "Connect with us" Form submit
    Given I open the "home" page
    When I enter an invalid email
    Then I see an error message