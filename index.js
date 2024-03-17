function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    let distance = someValue - headquarters;
    if (distance < 0) 
        distance = -distance; 
    return distance;
}
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const distance = destination - start;
    return distance >= 0 ? distance * 264 : -distance * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) 
        return "cannot travel that far";
    if (distance <= 400) 
        return 0;
    if (distance <= 2000) 
        return (distance - 400) * 0.02;
    return 25;
}