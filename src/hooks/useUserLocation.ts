import { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

export const useUserLocation = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false)
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      setHasLocationPermission(granted === PermissionsAndroid.RESULTS.GRANTED)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verifyLocationPermission()

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position =>
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        error => console.log(error.code, error.message)
      )
    }
  }, [hasLocationPermission])

  return userLocation
}
