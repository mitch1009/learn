navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    const accessLoc = { lat: position.coords.latitude, lng: position.coords.longitude }
})