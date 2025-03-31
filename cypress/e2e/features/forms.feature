Feature: Form Validation Tests

  @positive 
  Scenario: TC02 - Valid "Connect with us" Form submit
    Given I open the "home" page
    When I enter a valid email in the "Connect with us" form
    Then I am redirected to the "signUp" page

  @negative
  Scenario: TC03 - Invalid "Connect with us" Form submit
    Given I open the "home" page
    When I enter an invalid email in the "Connect with us" form
    Then I see an error notification

  @negative
  Scenario: TC11 - Invalid domain "Receive a call from Telnyx" Form submit
    Given I open the "home" page
    When I fill the "Receive a call" Form with:
    | companyName | valid    |
    | domain      | invalid  |
    | mobile      | valid    |
    | email       | valid    |
    Then I see a domain error message

  @negative
  Scenario: TC12 - Invalid mobile "Receive a call from Telnyx" Form submit
    Given I open the "home" page
    When I fill the "Receive a call" Form with:
    | companyName | valid    |
    | domain      | valid    |
    | mobile      | invalid  |
    | email       | valid    |
    Then I see a mobile error message

  @negative
  Scenario: TC13 - Invalid email "Receive a call from Telnyx" Form submit
    Given I open the "home" page
    When I fill the "Receive a call" Form with:
    | companyName | valid    |
    | domain      | valid    |
    | mobile      | valid    |
    | email       | invalid  |
    Then I see an email error message