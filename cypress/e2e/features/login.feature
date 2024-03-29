Feature: Juice-Shop Login Page

    Scenario: Login using valid credentials
        Given I access the Juice-Shop Login Page
        When I enter an email mare@gmail.com
        And I enter a password mare
        And I click on the Login button
        Then I should be presented with the following page All Products

    
    Scenario: Login using invalid credentials
        Given I access the Juice-Shop Login Page
        When I enter an email mare23@gmail.com
        And I enter a password mare
        And I click on the Login button
        
