Feature: Footer blocks links

  Scenario: TC01 - Validate all links in the "Company" block are clickable and lead to correct pages
    Given I open the "home" page
    When I check that the "Company" block links are visible in the footer
    Then each link in the "Company" block should navigate to its corresponding page
