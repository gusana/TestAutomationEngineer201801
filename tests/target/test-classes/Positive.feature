Feature: QuandooTest

  Scenario Outline: Login scenario
    Given User navigates to "http://the-internet.herokuapp.com/login"
    When User puts "<password>" to "username" field
    When User puts "<login>" to "password" field
    When User press Login button
    Then User sees message which partially equals to "<message>"

    Examples:
      | password | login | message |
      | tomsmith | SuperSecretPassword! | You logged into a secure area is present |
      | tomtom | SuperSecretPassword! | Your password is invalid |
      | tomsmith | SuperSecret! | Your password is invalid |

  Scenario Outline: hoover
    Given User navigates to "http://the-internet.herokuapp.com/hovers"
    When User moves to "<figure>"
    Then Message "<name>" is shown

    Examples:
      | figure | name |
      | 1 | name: user1 |
      | 2 | name: user2 |
      | 3 | name: user3 |

  Scenario: work with table
    Given User navigates to "http://the-internet.herokuapp.com/tables"
    When User presses on tittle Last Name
    Then Names are in ascending order
    When User presses on tittle Last Name
    Then Names are in descending order
