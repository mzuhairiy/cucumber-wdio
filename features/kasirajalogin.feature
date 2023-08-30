Feature: Test Login Functionality

  Background: 
    Given User is on the login page

  Scenario: User want to login with valid credentials
    When user enters <email> and <password>
    And clicks on login button
    Then <assertion> is displayed

    Examples:
      | email         | password             | assertion |
      | toko@toki.com | 1234567              | tokozoo   |