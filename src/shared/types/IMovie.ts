interface IMovie {
  id: string
  title: string
  imageUrl: string
  releaseYear: string
  genresList: string[]
  onClick: (genreId: string) => void
}

export default IMovie
