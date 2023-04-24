Feature: The MovieList page in the application

Background:
  Given I am on the MovieList page

  Scenario Outline: As a user, I can see Search input

    Then I should see Search input with placeholder "What do you want to watch?"

  Scenario Outline: As a user, I can use Search input

    When I type "<value>" into Search input
    And I click Submit button in Search form
    Then I should see "1 movie(s) found by <value>" under Genre buttons
    And I should see "<value>" in movie tile "1" as title
    And I should see "<release year>" in movie tile "1" as release year

    Examples:
      | value                | release year |
      | John Wick: Chapter 2 | 2017         |

  Scenario Outline: As a user, I can use sorting

    When I click on the Search input
    And I type "<search>" into Search input
    And I click Submit button in Search form
    And I move mouse cursor over Sort by button
    And I choose sorting by "<sort>"
    Then I should see "<1st movie>" in movie tile "1" as title
    And I should see "<1st movie year>" in movie tile "1" as release year
    And I should see "<2nd movie>" in movie tile "2" as title
    And I should see "<2nd movie year>" in movie tile "2" as release year
    And I should see "<3rd movie>" in movie tile "3" as title
    And I should see "<3rd movie year>" in movie tile "3" as release year

    Examples:
      | search | sort         | 1st movie            | 1st movie year | 2nd movie       | 2nd movie year | 3rd movie            | 3rd movie year |
      | zoo    | title        | Zootopia             | 2016           | We Bought a Zoo | 2011           | The Zookeeper's Wife | 2017           |
      | zoo    | release date | We Bought a Zoo      | 2011           | Zootopia        | 2016            |The Zookeeper's Wife | 2017           |

  Scenario Outline: As a user, I can select genre

    When I click on the Search input
    And I type "<search>" into Search input
    And I click Submit button in Search form
    And I click "<genre>" genre button
    Then I should see "<1st movie>" in movie tile "1" as title
    And I should see "<1st movie year>" in movie tile "1" as release year
    And I should see "<2nd movie>" in movie tile "2" as title
    And I should see "<2nd movie year>" in movie tile "2" as release year

    Examples:
      | search | genre | 1st movie            | 1st movie year | 2nd movie       | 2nd movie year |
      | zoo    | Drama | The Zookeeper's Wife | 2017           | We Bought a Zoo | 2011           | 

  Scenario Outline: As a user, I can click the movie tile to select a movie

    When I type "<movie>" into Search input
    And I click Submit button in Search form
    And I click on the movie tile "1"
    Then I should not see Search input
    And I should see "<movie>" in movie details section as title
    And I should see "<release year>" in movie details section as release year

    Examples:
      | movie                | release year |
      | JOHN WICK: CHAPTER 2 | 2017         |

  Scenario Outline: As a user, I can click the search button to get back from movie details to Search form

    When I type "<movie>" into Search input
    And I click Submit button in Search form
    And I click on the movie tile "1"
    And I don't see Search input
    And I see "<movie>" in movie details section as title
    And I see "<release year>" in movie details section as release year
    And I clicked the Search button with magnifier icon
    Then I should see Search input with placeholder "What do you want to watch?"
    # again

    Examples:
      | movie                | release year |
      | JOHN WICK: CHAPTER 2 | 2017         |
      
  Scenario Outline: As a user, I can enter a search query and submit the search form, then URL should be updated

    When I click on the Search input
    And I type "<movie>" into Search input
    And I click Submit button in Search form
    Then I should see "<address>" in browser URL

    Examples:
      | movie     | address                                 |
      | john wick | http://localhost:3000/?search=john+wick |

  Scenario Outline: As a user, I can add "search" parameter to URL and see a search form with parameter text and a movie list relevant to the search query.

    Given I am on the page "<address>"
    Then I should see Search form with typed data "<text>" in Search input
    And I should see "<movie 1>" in movie tile "1" as title
    And I should see "<year 1>" in movie tile "1" as release year
    And I should see "<movie 2>" in movie tile "2" as title
    And I should see "<year 2>" in movie tile "2" as release year

    Examples:
      | address                                 | text      | movie 1              | year 1 | movie 2   | year 2 |
      | http://localhost:3000/?search=john+wick | john wick | John Wick: Chapter 2 | 2017   | John Wick | 2014  |

  Scenario Outline: As a user, select a genre and see updates the URL with "genre" search parameter containing the selected genre. The movie list is refreshed to display movies of the selected genre.
    
    When I click "<genre>" genre button
    Then I should see "<address>" in browser URL
    And I should see "<movie 1>" in movie tile "1" as title
    And I should see "<year 1>" in movie tile "1" as release year
    And I should see "<movie 2>" in movie tile "2" as title
    And I should see "<year 2>" in movie tile "2" as release year

    Examples:
      | genre | address                             | movie 1                        | year 1 | movie 2 | year 2 |
      | Drama | http://localhost:3000/?filter=Drama | Jurassic World: Fallen Kingdom | 2018   | Paterno | 2018   |
  
  Scenario Outline: As a user, I can add "genre" parameter to URL and I should see genre from parameter selected and movies of specific genre.
    
    Given I am on the page "<address>"
    Then I should see "<genre>" genre selected
    And I should see "<movie 1>" in movie tile "1" as title
    And I should see "<year 1>" in movie tile "1" as release year
    And I should see "<movie 2>" in movie tile "2" as title
    And I should see "<year 2>" in movie tile "2" as release year

    Examples:
      | address                             | genre | movie 1                        | year 1 | movie 2 | year 2 |
      | http://localhost:3000/?filter=Drama | Drama | Jurassic World: Fallen Kingdom | 2018   | Paterno | 2018   |
  
  Scenario Outline: As a user, I can select sorting by title and see the URL containing "sortBy" search parameter with the respective value. The movie list is refreshed to display movies in a sorted way.
      
    When I move mouse cursor over Sort by button
    And I choose sorting by "<sort>"
    Then I should see "<address>" in browser URL
    And I should see "<movie 1>" in movie tile "1" as title
    And I should see "<year 1>" in movie tile "1" as release year
    And I should see "<movie 2>" in movie tile "2" as title
    And I should see "<year 2>" in movie tile "2" as release year

    Examples:
      | address                             | sort  | movie 1 | year 1 | movie 2  | year 2 |
      | http://localhost:3000/?sortBy=title | title | Zulu    | 2013   | Zootopia | 2016   |
  