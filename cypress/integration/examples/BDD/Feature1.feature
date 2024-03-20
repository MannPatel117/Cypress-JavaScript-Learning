Feature: End to End Ecommerce Validation

    Application Testing and Learning Cumumber

    Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items to Cart
    Then Validate the total prices
    Then Select the country and submit and verify success

