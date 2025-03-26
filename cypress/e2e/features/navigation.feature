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