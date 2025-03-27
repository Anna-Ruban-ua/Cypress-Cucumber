Feature: Navigation Tests

  @positive
  Scenario: TC01 - Footer "Company" Links Navigation Test
    Given I open the "home" page
    When I check that the "Company" block links are visible in the footer
    Then each link of the "Company" block should navigate to its corresponding page

  @positive 
  Scenario: TC04 - Header Navigation Test
    Given I open the "home" page
    When I open the Header menu
    Then each link of the "Header" block should navigate to its corresponding page

  @negative 
  Scenario: TC07 - 404 Page Behavior
    Given I open the "fake" page
    When I see the 404 error message
    And I click "Back to home" button
    Then I redirected to the "home" page
