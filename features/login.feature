@login
Feature: KasirAja Login

  Background: 
    Given user is on the login page
    
  Scenario: User want to login with invalid credentials
    When user input email as "<email>" and password as "<password>"
    And user clicks on login button
    Then user can't login and error message <assertion> is displayed

    Examples:
      | email           | password             | assertion                            |
      | tokoan@toki.com | 1234567              | Kredensial yang Anda berikan salah   |

  Scenario: User want to login with valid credentials
    When user input email as "<email>" and password as "<password>"
    And user clicks on login button
    Then user directed to homepage and "<assertion>" is displayed

    Examples:
      | email         | password             | assertion |
      | toko@toki.com | 1234567              | tokozoo   |