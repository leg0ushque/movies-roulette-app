import type IMovieModel from '../../../models/IMovieModel';

const TEST_MOVIES: IMovieModel[] = [
  {
    id: '3076',
    imageUrl: 'https://m.media-amazon.com/images/I/715QHVj8vaL._SL1302_.jpg',
    title: 'John Wick 4',
    releaseDate: new Date('24-Mar-2023'),
    genreIds: ['1', '6', '7'],
    genresList: [],
    rating: 9.5,
    movieUrl: 'https://www.imdb.com/title/tt10366206/',
    duration: '2h 49m',
    description: 'John Wick (Keanu Reeves) uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi sunt odio libero magni assumenda soluta consectetur quia eveniet cumque error sit deserunt temporibus recusandae similique, enim fugit qui autem?'
  }
];

export default TEST_MOVIES
