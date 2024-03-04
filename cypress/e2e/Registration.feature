@paramo-tecnologies @signUp
Feature: Challenge Paramo tecnologies
  
  Background: Background scenario
    Given I'm on registartion's page
  
  @happy
  Scenario: Create an account
    When I am on the registartion's page
    Then I complete eamil with a user not registred
    And I choose promo bonus
    And I complete password field
    And I complete reenter password field
    And I click on create account
    