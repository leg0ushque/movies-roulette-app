Feature: The Counter component in SPA

  Scenario Outline: As a user, I can see Counter with initial value

    Given I am on the main page
    Then I should see Counter with value equal <value>

    Examples:
      | value |
      | 321   |

  Scenario Outline: As a user, I can increment Counter value

    Given I am on the main page
    When I click increment button
    Then I should see Counter with value equal <value>

    Examples:
      | value |
      | 322   |
