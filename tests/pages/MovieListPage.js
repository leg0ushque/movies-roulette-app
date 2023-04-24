const { $ } = require('@wdio/globals')
const BasePage = require('./base.page')

class MovieListPage extends BasePage {
  async open() {
    await super.open('http://localhost:3000')
  }

  // search functionality
  get searchFormInput () { return $('form.search input[type=text]') }
  get searchFormSubmitButton () { return $('form.search input[type=submit]') }
  async searchFormInputIsNull  () { 
    return await $('form.search input[type=text]') === null 
  }
  async setSearchFormInput(value) { 
    await $('form.search input[type=text]').setValue(value) 
  }
  async clickSearchFormSubmitButton () { 
    return await $('form.search input[type=submit]').click() 
  }

  // sorting
  get sortByButton () { return $('div.sortControl div.dropdown div.sortBtn') }

  getSortSelector(sort) {
    return sort==='title' 
      ? ('div.sortControl ul.dropdown-content :nth-child(2)') // title sort
      : ('div.sortControl ul.dropdown-content :nth-child(1)') // release year sort
    } 

  async getSort(sort) { 
    return await $(this.getSortSelector(sort)) 
  }
  
  async clickSort(sort) { 
    const sortButton = await this.getSort(sort)
    await sortButton.click() 
  }
  

  // switching genres,
  get allGenresButton () { return $('ul.genresList :nth-child(1)')}
  async getGenreButtonById(id) { return await $(`ul.genresList li#${id}`) }
  async getSelectedGenreButton() { return await $(`ul.genresList li.selected`) }

  // movieTiles
  get foundMoviesAmount () { return $('div.movies-amount span') }

  async getMovieTile (number) { return await $(`div.movieTiles div.movieTile:nth-child(${number})`)}
  async getMovieTileTitle(number) { return await $(`div.movieTiles div.movieTile:nth-child(${number}) div.title span`) }
  async getMovieTileReleaseYear(number) { return await $(`div.movieTiles div.movieTile:nth-child(${number}) div.releaseYear span`) }
  
  // movie details section with button returning back to search.
  get pageHeaderMovieDetails () { return $('div.page-header.movie-details')}
  get pageHeaderMovieDetailsTitle () { return $('div.page-header.movie-details div.title')}
  get pageHeaderMovieDetailsReleaseYear () { return $('div.page-header.movie-details div.releaseYear')}
  get pageHeaderMovieDetailsSearchButton () { return $('div.page-header.movie-details button.search')}
}

module.exports = new MovieListPage();
