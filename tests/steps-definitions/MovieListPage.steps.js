const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals');
const MovieListPage = require('../pages/MovieListPage');

Given(/^I am on the MovieList page$/, async () => {
  await MovieListPage.open();
});

// WHEN

When(/^I click on the Search input$/, async () => {
  const input = await MovieListPage.searchFormInput
  await input.click();
});

When(/^I type "(.*)" into Search input$/, async (value) => {
  await MovieListPage.searchFormInput.setValue(value);
});

When(/^I click Submit button in Search form$/, async () => {
  const button = await MovieListPage.searchFormSubmitButton
  await button.click();
});

When(/^I choose sorting by "(.*)"$/, async (sort) => {
  await MovieListPage.clickSort(sort);
});

When(/^I click "(.*)" genre button$/, async (genre) => {
  const button = await MovieListPage.getGenreButtonById(genre);
  await button.click();
});

When(/^I click on the movie tile "(.*)"$/, async (number) => {
  const movieTile = await MovieListPage.getMovieTile(number);
  await movieTile.click();
});

When(/^I clicked the Search button with magnifier icon$/, async () => {
  const button = await MovieListPage.pageHeaderMovieDetailsSearchButton;
  await button.click();
});

When(/^I don't see Search input$/, async () => {
  await expect(MovieListPage.searchFormInput).not.toExist();
});

When(/^I move mouse cursor over Sort by button$/, async () => {
  const button = await MovieListPage.sortByButton
  await button.moveTo();
});

// THEN

Then(/^I see "(.*)" in movie details section as title$/, async (value) => {
  await expect(MovieListPage.pageHeaderMovieDetailsTitle).toHaveTextContaining(value);
});

Then(/^I see "(.*)" in movie details section as release year$/, async (value) => {
  await expect(MovieListPage.pageHeaderMovieDetailsReleaseYear).toHaveTextContaining(value);
});
Then(/^I should see "(.*)" under Genre buttons$/, async (value) => {
  const foundMoviesElement = await MovieListPage.foundMoviesAmount;
  await expect(foundMoviesElement).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie tile "(.*)" as title$/, async (value, number) => {
  await expect(await MovieListPage.getMovieTileTitle(number)).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie tile "(.*)" as release year$/, async (value, number) => {
  await expect(await MovieListPage.getMovieTileReleaseYear(number)).toHaveTextContaining(value);
});

Then(/^I should see Search input with placeholder "(.*)"$/, async (placeholderValue) => {
  await expect(MovieListPage.searchFormInput).toHaveAttribute('placeholder', placeholderValue);
});

Then(/^I should see "(.*)" in movie details section as title$/, async (value) => {
  await expect(MovieListPage.pageHeaderMovieDetailsTitle).toHaveTextContaining(value);
});

Then(/^I should see "(.*)" in movie details section as release year$/, async (value) => {
  await expect(MovieListPage.pageHeaderMovieDetailsReleaseYear).toHaveTextContaining(value);
});

Then(/^I should not see Search input$/, async () => {
  await expect(MovieListPage.searchFormInput).not.toExist();
});

Then(/^I should see "(.*)" in browser URL$/, async (address) => {
  setInterval({}, 2000)
  const url = await browser.getUrl();
  await expect(url).toBe(address);
});

