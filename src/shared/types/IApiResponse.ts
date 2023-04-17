interface IApiResponse<ResponseDataType> {
  totalAmount: number
  data: ResponseDataType
  offset: number
  limit: number
}

export default IApiResponse
