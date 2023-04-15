import type IEntity from './IEntity'

interface IMovie extends IEntity {
  title: string
  description: string
  duration: string
  releaseDate: Date | null
  rating: number
  genreIds: string[]
  movieUrl: string
  imageUrl: string
}

export default IMovie
