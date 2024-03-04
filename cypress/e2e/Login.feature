@paramo-tecnologies  @login
Feature: Challenge Paramo tecnologies
  
  Background: Background scenario
    Given I'm on login page

  Scenario: Login with invalid account
    When I complete user and password field with invalid account
    And I click on login button
    Then I must see "Incorrect login, email, phone number or password." mesasge

  @happy
  Scenario: Login with valid account
    When I complete user and password field with valid account
    And I click on login button
    Then I must redirected to '/'
