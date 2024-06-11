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

export type FileName = {
  base: string,
  ext: string,
}

export function resolveFileName (name: string): FileName {
  const splits = name.split('.'),
    ext = splits.pop() || '',
    base = splits.join('.')
    return {
      base,
      ext
    }
}

export const extTypeMapping: Record<string, MediaType> = {
  jpg: 'image',
  jpeg: 'image',
  pdf: 'pdf',
  png: 'image',
  mp4: 'video',
  mkv: 'video',
}

export function getMediaType (name: string): MediaType {
  const { base, ext } = resolveFileName(name)
  return extTypeMapping[ext] || 'file'
}
