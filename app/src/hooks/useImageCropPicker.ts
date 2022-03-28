import { useState } from 'react'
import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker'

export const useImageCropPicker = (asArray?: boolean) => {
  const [media, setMedia] = useState<ImageOrVideo>()
  const [medias, setMedias] = useState<ImageOrVideo[]>([])

  const options: Options = {
    compressImageMaxWidth: 600,
    compressImageMaxHeight: 600,
    cropping: true,
  }

  const openCamera = () => {
    ImagePicker.openCamera(options)
      .then(file => {
        asArray ? setMedias([...medias, file]) : setMedia(file)
      })
      .catch(err => console.log(err.message))
  }

  const openPicker = () => {
    ImagePicker.openPicker(options)
      .then(file => {
        asArray ? setMedias([...medias, file]) : setMedia(file)
      })
      .catch(err => console.log(err.message))
  }

  return { media, medias, openCamera, openPicker }
}
