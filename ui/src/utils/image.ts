import Compressor from 'compressorjs'

export interface CompressorOptions {
  sizeLimit: number
  quality?: number
  maxHeight?: number
  maxWidth?: number
}

export type CompressCallback = (file: File | Blob) => void

export function compressImage(
  data: File | Blob,
  options: CompressorOptions,
  callback: CompressCallback
) {
  if (data.size > options.sizeLimit * 1000 * 1024) {
    new Compressor(data, {
      quality: 0.8,
      maxWidth: options.maxWidth,
      maxHeight: options.maxHeight,
      success(result: File | Blob) {
        callback && callback(result)
      },
      error(error: Error) {
        console.log(error)
      },
    })
  } else {
    callback && callback(data)
  }
}
