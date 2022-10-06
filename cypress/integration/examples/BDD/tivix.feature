Feature: End to End Tivix car site validation

    application Regression

    Scenario: Tivix Car Rental Application
    Given I open Tvix car Rental page
    When I select country 
    And I select City
    And I enter model
    And I select pick up date for car
    And I select Drop off date for Car
    Then I Submit the information and get list of cars