import { ReactNativeFile } from 'apollo-upload-client'
import { useState } from 'react'
import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker'

export const useImagePicker = (
  options: Options = {
    compressImageMaxWidth: 400,
    compressImageMaxHeight: 400,
    cropping: false,
    compressImageQuality: 0.5,
    writeTempFile: true,
    multiple: true,
    //includeBase64: true,
  }
) => {
  const [assets, setAssets] = useState<ImageOrVideo[]>([])

  const handle = (openOption: 'openCamera' | 'openPicker') => {
    ImagePicker[openOption](options)
      .then(asset => setAssets([asset, ...assets]))
      .catch(err => console.log(err.message))
  }

  const openCamera = () => handle('openCamera')
  const openLibrary = () => handle('openPicker')

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
