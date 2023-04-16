interface IApiMovieModel {
  id: number
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: Date
  poster_path: string
  overview: string
  budget: number
  revenue: number
  genres: string[]
  runtime: number
}

export default IApiMovieModel
