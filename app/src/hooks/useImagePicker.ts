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

export const useImagePicker = () => {
  const [assets, setAssets] = useState<ImageOrVideo[]>([])

  const openCamera = () =>
    ImagePicker.openCamera(cameraOptions)
      .then(assetFromCamera => setAssets([assetFromCamera, ...assets]))
      .catch(err => console.log(err.message))

  const openLibrary = () =>
    ImagePicker.openPicker({
      multiple: true,
      compressImageMaxWidth: 400,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.7,
    })
      .then(assetsFromLibrary => setAssets([...assetsFromLibrary, ...assets]))
      .catch(err => console.log(err.message))

  const assetsToRNFiles = () =>
    assets.map(
      asset =>
        new ReactNativeFile({
          name: `.${asset.path.split('.').pop()}`,
          type: asset.mime,
          uri: asset.path,
        })
    )

  return { assets, assetsToRNFiles, openCamera, openLibrary }
}
