const { $ } = require('@wdio/globals')
const BasePage = require('./base.page')

class MovieListPage extends BasePage {
  open() {
    super.open('http://localhost:3000')
  }

  // search functionality
  get searchFormInput () { return $('form.search input[type=text]') }
  searchFormInputIsNull () { return $('form.search input[type=text]') === null }
  setSearchFormInput(value) { $('form.search input[type=text]').setValue(value) }
  get searchFormSubmitButton () { return $('form.search input[type=submit]') }
  clickSearchFormSubmitButton () { return $('form.search input[type=submit]').click() }

  // sorting
  clickSort(sort) { 
    if(sort==='title') { 
      $('div.sortControl ul.dropdown-content :nth-child(2)').click() // title sort
    } else {
      $('div.sortControl ul.dropdown-content :nth-child(1)').click() // release year sort
    } 
  }

  // switching genres,
  get allGenresButton () { return $('ul.genresList :nth-child(1)')}
  getGenreButtonById(id) { return $(`ul.genresList li#(${id})`) }

  // movieTiles
  get foundMoviesAmount () { return $('div.movies-amount').getText() }

  getMovieTile (number) { return $(`div.movieTiles div.movieTile:nth-child(${number})`)}
  getMovieTileTitle(number) { return $(`div.movieTiles div.movieTile:nth-child(${number}) div.title span`) }
  getMovieTileReleaseYear(number) { return $(`div.movieTiles div.movieTile:nth-child(${number}) div.releaseYear span`) }
  
  // movie details section with button returning back to search.
  get pageHeaderMovieDetails () { return $('div.page-header.movie-details')}
  get pageHeaderMovieDetailsTitle () { return $('div.page-header.movie-details div.title')}
  get pageHeaderMovieDetailsReleaseYear () { return $('div.page-header.movie-details div.releaseYear')}
  get pageHeaderMovieDetailsSearchButton () { return $('div.page-header.movie-details button.search')}
}

module.exports = new MovieListPage();
