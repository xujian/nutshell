export type MediaType =
  'pdf' | 'image' | 'video' | 'file'

/**
 * 文档或者影像
 * 用于上传或者影像呈现
 */
export type Media = {
  id?: string,
  name?: string,
  type?: MediaType,
  url?: string,
  thumb?: string,
  blob?: File | Blob
}
