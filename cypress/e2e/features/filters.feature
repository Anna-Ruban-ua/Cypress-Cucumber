Feature: Filters Tests
  
  @positive 
  Scenario: TC08 - Filter Verification on the Solutions Page
    Given I open the "solutions" page
    When I choose the filter option 
    Then content is filtered

  @positive 
  Scenario: TC09 - Valid Search verification
    Given I open the "solutions" page
    When I search valid title
    Then content is searched

  @negative
  Scenario: TC10 - Invalid Search verification
    Given I open the "solutions" page
    When I search invalid title
    Then no results for this filter

  @positive 
  Scenario: TC14 - Verify pricing content updates when currency is switched
    Given I open the "messaging" page
    When I switch currency from "USD" to "EUR"
    Then I should see the prices update accordingly with "€"

  @positive 
  Scenario: TC15 - Filter Verification on the Global Coverage Page
    Given I open the "globalCoverage" page
    When I choose the filter option 
    Then content is filtered