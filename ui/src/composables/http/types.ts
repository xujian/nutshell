/**
 * 由使用场景提供的配置
 * createHttp() 使用的配置
 */
export type HttpClientConfig = {
  vendor?: HttpVendor,
  baseUrl: string,
  /**
   * 向 HTTP header 加入的数据
   * 通常含有 JWT token 以及其他参数
   */
  headers?: HeaderParams,
  paging?: PagingConfig,
  /**
   * 拦截器组
   * 请求返回异常时进行一定的操作
   */
  interceptors?: HttpInterceptor[],
  translates?: HttpTranslates,
  transforms?: HttpTransforms,
}

/**
 * HTTP 请求的底层实现
 * Axios/Taro.request
 */
export type HttpVendor = {
  request <T = ResponseData>(config: HttpRequestConfig): Promise<ResponseRaw<T>>
}

export type HttpInterceptor = (raw: ResponseRaw) => boolean

/**
 * Request Config for request API
 * 沿用 Axios 的部分配置
 */
export type HttpRequestConfig<D = RequestData> = {
  url: string,
  method?: HttpMethod,
  baseUrl?: string,
  headers?: HeaderData,
  responseType?: string,
  data?: D,
}

/**
 * Request data for http get & post method
 */
export type RequestData = Record<string, any>

/**
 * 接口请求返回的标准格式
 */
export type ResponseRaw<T = ResponseData> = {
  status: number,
  headers?: Record<string, string | number>,
  message: string,
  data: T
}

/**
 * 拆箱之后前端拿到的数据
 */
export type ResponseData = Record<string, any> | any[] | undefined

export type HttpInstance = {
  request<T = ResponseData>(config: HttpRequestConfig): Promise<T>
  get<T = ResponseData>(url: string, data?: RequestData): Promise<T>,
  post<T = ResponseData>(url: string, data?: RequestData): Promise<T>,
  download(url: string, data?: RequestData): Promise<void>,
  stream(url: string, data?: RequestData): Promise<File>,
}

/**
 *
 */
export type HttpTranslates = Record<string, HttpTranslate | undefined>
export type HttpTransforms = Record<string, HttpTransform | undefined>

/**
 * 向 request header 加入参数
 * 多数是 token
 */
export type HeaderParams = Record<string, string>

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  download = 'DOWNLOAD',
  stream = 'STREAM'
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

/**
 * 分页参数
 */
export type PagingParams = {
  /**
   * 页数
   */
  page: number,
  /**
   * 页数据条数
   */
  pageSize?: number,
  [key: string]: any,
}

/**
 * 分页器的翻页状态
 */
export type Paging = {
  /**
   * 当前页
   */
  current: number,
  /**
   * 数据总数
   */
  total: number,
  pageSize: number,
}

/**
 * Wrapped with Paging Data
 */
export type WithPaging<T = ResponseData> = {
  paging: Paging;
} & {
  data: T;
}

/**
 * 分页设置
 */
export type PagingConfig = {
  translate (params: PagingParams): any,
  transform (resonse: any): Paging,
}
