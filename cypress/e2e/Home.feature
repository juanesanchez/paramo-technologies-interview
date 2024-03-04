@paramo-tecnologies
Feature: Challenge Paramo tecnologies
  
  Background: Background scenario
    Given I'm on the Home page

Scenario: Check Components on Nav Header
    When I verify that the page is in dark mode
    And I click on switch mode
    Then The page must change to light mode
    And I click on aside button
    Then Aside bar must be opened
    And I click on search button
    Then Modal background must be desplayed
    And Input search must be displayed and visible
    And I close the modal search


Scenario Outline: Search game <results>
    When I click on aside button
    And I click on search button
    And I look for the game "<game>"
    Then I expect find at least a game as "<results>"
    And I close the modal search
    
    @happy
    Examples: Games
    | game            | results                                 |
    | Juego de        | Juego De La Oca                         |
    | pato            | Topatoo                                 |
    | Eye of Horus The| Eye of Horus The Golden Tablet Megaways |

