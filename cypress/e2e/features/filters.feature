Feature: Filters Tests
  
  @positive 
  Scenario: TC08 - Filter Verification on the Solutions Page
    Given I open the "solutions" page
    When I choose the filter option 
    Then content is filtred

  @positive 
  Scenario: TC09 - Valid Search verification
    Given I open the "solutions" page
    When I search valid title
    Then content is searched

  @negative
  Scenario: TC10 - Inalid Search verification
    Given I open the "solutions" page
    When I search invalid title
    Then no results for this filter