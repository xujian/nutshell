/**
 * 由使用场景提供的配置
 */
export type HttpClientConfig = {
  vendor?: HttpVendor
  baseURL: string,
  /**
   * 向 HTTP header 加入的数据
   * 通常含有 JWT token 以及其他参数
   */
  headers?: HeaderParams
  /**
   * 定义返回数据的外层格式
   */
  response?: {
    getCode (raw: ResponseRaw): `${number}` | number,
    getMessage (raw: ResponseRaw): string,
    getData (raw: ResponseRaw): ResponseData
  },
  /**
   * 错误码配置
   * 依据后端给出的 code 定义错误类型及处理方法
   */
  interceptors?: {
    auth (data: ResponseRaw): boolean
    server (data: ResponseRaw): boolean
  },
  onAuthError? (): void
  onServerError? (): void
  translates?: HttpTranslates
  transforms?: HttpTransforms
}

/**
 * Request Config for request API
 * 沿用 Axios 的部分配置
 */
export type HttpRequestConfig<D = RequestData> = {
  url: string,
  method?: HttpMethod,
  baseURL?: string,
  headers?: HeaderData,
  data?: RequestData,
}

/**
 * Request data for http get & post method
 */
export type RequestData = Record<string, any>

export type HttpResonse<T> = {
  data: T,
  status: number,
  statusText: string,
}

/**
 * 本地后端团队的接口数据格式
 */
export type ResponseRaw<T = ResponseData> = Record<string, any>

/**
 * 拆箱之后前端拿到的数据
 */
export type ResponseData = Record<string, any> | any[]

export type HttpInstance = {
  request<T = ResponseData>(config: HttpRequestConfig): Promise<ResponseRaw<T>>
  get<T = ResponseData>(url: string, data?: RequestData): Promise<T>,
  post<T = ResponseData>(url: string, data?: RequestData): Promise<T>,
}

/**
 *
 */
export type HttpTranslates = Record<string, (data: RequestData) => RequestData>
export type HttpTransforms = Record<string, (data: ResponseData) => ResponseData>

/**
 * 向 request header 加入参数
 * 多数是 token
 */
export type HeaderParams = Record<string, string>

/**
 * HTTP 请求的底层实现
 * Axios/Taro.request
 */
export type HttpVendor = {
  request (config: HttpRequestConfig): ResponseRaw
}

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
}

export enum HttpError {
  auth = 'auth',
  server = 'server'
}

export type HeaderData = Record<string, string>

/**
 * 接口参数转换器
 */
export type HttpTranslate = (data: RequestData) => RequestData

/**
 * 接口数据转换器
 */
export type HttpTransform = (data: ResponseData) => ResponseData

/**
 * 接口设置
 */
export type HttpEndpoint = {
  path: string,
  translate?: HttpTranslate,
  transform?: HttpTransform,
}

/**
 * 接口组
 */
export type HttpEndpoints = {
  [name: string]: HttpEndpoint
}
