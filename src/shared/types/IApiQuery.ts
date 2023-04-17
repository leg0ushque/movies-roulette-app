interface IApiQuery {
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  search?: string
  searchBy?: 'title' | 'genres'
  filter?: string
  offset?: string
  limit?: string
}

export default IApiQuery
