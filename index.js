function distanceFromHqInBlocks(someValue) {
  let hqLocation = 42
  if (someValue > hqLocation) {
    return someValue - hqLocation
  } else {
    return hqLocation - someValue
  }
}

function distanceFromHqInFeet(value2) {
  const distanceInBlocks = distanceFromHqInBlocks(value2)
  return distanceInBlocks * 264
}

function distanceTravelledInFeet(start, destination) {
  //const distanceInFeet = (start + destination) * 264
  if (start < destination) {
    return (start - destination) * -1 * 264
  } else return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  let rideFare = distanceTravelledInFeet(start, destination)
  if (rideFare > 2500) {
    return 'cannot travel that far'
  } else if (rideFare >= 2000) {
    return 25
  } else if (rideFare < 400) {
    return 0
  } else {
    return (rideFare - 400) * 0.02
  }
}
