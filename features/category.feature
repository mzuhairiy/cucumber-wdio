@category
Feature: KasirAja Category

  Background: 
    Given user is on the login page
    
  Scenario: User want to create a category with invalid data
    When user input email as "toko@toki.com" and password as "1234567"
    And user clicks on login button
    Then user directed to homepage
    And user clicks on kategori button
    And user clicks on tambah button
    And user input nama as <nama> and deskripsi as <deskripsi>
    Then user can't create category and see <assertion> message

    Examples:
      | nama | deskripsi | assertion                            |
      |      | 1234567   | "name" is not allowed to be empty    |

  Scenario: User want to create a category with valid data
    Given user is on dashboard page
    And user clicks on kategori button
    And user clicks on tambah button
    And user input nama as <nama> and deskripsi as <deskripsi>
    Then user is success to create a category and should see <assertion> message

    Examples:
      | nama   | deskripsi  | assertion          |
      | RAM    | RAM Laptop | item ditambahkan   |