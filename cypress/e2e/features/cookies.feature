Feature: Cookie Consent Banner

  @positive
  Scenario: TC05 - Accept Cookies
    Given I open the "home" page
    When I accept cookies
    Then the cookie banner should be "hidden"

  @positive
  Scenario: TC06 - Clear Cookies
    Given I open the "home" page
    And I accept cookies
    When I clear cookies
    Then the cookie banner should be "visible"