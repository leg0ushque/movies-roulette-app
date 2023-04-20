const { Given, When, Then } = require('@wdio/cucumber-framework');
const MovieListPage = require('../pages/MovieListPage');

Given(/^I am on the MovieList page$/, () => {
  MovieListPage.open();
});

// WHEN

When(/^I click on the Search input$/, () => {
  MovieListPage.searchFormInput.click();
});

When(/^I type "(.*)" into Search input$/, (value) => {
  MovieListPage.searchFormInput.setValue(value);
});

When(/^I click Submit button in Search form$/, () => {
  MovieListPage.searchFormSubmitButton.click();
});

When(/^I choose sorting by "(.*)"$/, (sort) => {
  MovieListPage.clickSort(sort);
});

When(/^I click "(.*)" genre button$/, (genre) => {
  MovieListPage.getGenreButtonById(genre);
});

When(/^I click on the movie tile "(.*)"$/, (number) => {
  MovieListPage.getMovieTile(number).click();
});

When(/^I clicked the Search button with magnifier icon$/, async () => {
  (await MovieListPage.pageHeaderMovieDetailsSearchButton).click();
});

When(/^I don't see Search input$/, () => {
  expect(MovieListPage.searchFormInput).not.toExist();
});

Then(/^I see "(.*)" in movie details section as title$/, (value) => {
  expect(MovieListPage.pageHeaderMovieDetailsTitle).toHaveTextContaining(value);
});

Then(/^I see "(.*)" in movie details section as release year$/, (value) => {
  expect(MovieListPage.pageHeaderMovieDetailsReleaseYear).toHaveTextContaining(value);
});

// THEN

Then(/^I should see "(.*)" under Genre buttons$/, (value) => {
  expect(MovieListPage.foundMoviesAmount).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie tile "(.*)" as title$/, (value, number) => {
  expect(MovieListPage.getMovieTileTitle(number)).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie tile "(.*)" as release year$/, (value, number) => {
  expect(MovieListPage.getMovieTileReleaseYear(number)).toHaveTextContaining(value);
});

Then(/^I should see Search input with placeholder "(.*)"$/, (placeholderValue) => {
  expect(MovieListPage.searchFormInput).toHaveAttribute('placeholder', placeholderValue);
});

Then(/^I should see "(.*)" in movie details section as title$/, (value) => {
  expect(MovieListPage.pageHeaderMovieDetailsTitle).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie details section as release year$/, (value) => {
  expect(MovieListPage.pageHeaderMovieDetailsReleaseYear).toHaveTextContaining(value);
});

Then(/^I should not see Search input$/, () => {
  expect(MovieListPage.searchFormInput).not.toExist();
});
