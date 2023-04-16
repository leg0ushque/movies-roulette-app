interface IApiResponse<T> {
  totalAmount: number
  data: T
  offset: number
  limit: number
}

export default IApiResponse
