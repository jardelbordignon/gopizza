import { ReactNativeFile } from 'apollo-upload-client'
import { useState } from 'react'
import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker'

const cameraOptions: Options = {
  compressImageMaxWidth: 400,
  compressImageMaxHeight: 400,
  cropping: false,
  compressImageQuality: 0.7,
}

const randomNum = () => Math.floor(Math.random() * 10000)

export const useImagePicker = () => {
  const [files, setFiles] = useState<ReactNativeFile[]>([])

  const RNFilesFromMedias = (medias: ImageOrVideo[]) =>
    medias.map(
      media =>
        new ReactNativeFile({
          name: `${randomNum()}.${media.path.split('.').pop()}`, // 9999.jpg
          type: media.mime,
          uri: media.path,
        })
    )

  const openCamera = () =>
    ImagePicker.openCamera(cameraOptions)
      .then(media => setFiles([...RNFilesFromMedias([media]), ...files]))
      .catch(err => console.log(err.message))

  const openLibrary = () =>
    ImagePicker.openPicker({
      multiple: true,
      compressImageMaxWidth: 400,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
    })
      .then(medias => setFiles([...RNFilesFromMedias(medias), ...files]))
      .catch(err => console.log(err.message))

  const deleteFile = (fileToDelete: ReactNativeFile) => {
    setFiles(files.filter(file => file !== fileToDelete))
  }

  return { files, openCamera, openLibrary, deleteFile, setFiles }
}
