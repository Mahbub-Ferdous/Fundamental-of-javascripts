//// just think you are walking in a jungle to find some animal fo photograph. you can find 10 animal per miles in first 10 miles and find 50 animal per miles 10 to 20 miles and 100 animal per miles rest of the miles, create a function who take a miles output and return find animal number??

function findAnimal(miles) {
  const first10MilesPerMilesAnimalCount = 10; /// cause 1st 10 miles you can find 10 animal per miles
  const second10MilesPerMilesAnimalCount = 50; /// 2nd 10 miles you find 50 animal per miles
  const restMilesPerMilesAnimalCount = 100; /// after 1st 20 mile find 100 animal per miles rest of the miles
  if (miles <= 10) {
    const animalCount = miles * first10MilesPerMilesAnimalCount; /// pass arguments is lower than 10 miles so input miles * permiles find animals
    return animalCount;
  } else if (miles > 10 && miles <= 20) {
    const firstAnimalCount = first10MilesPerMilesAnimalCount * 10; /// 1st 10 miles animal count 100 cause 10 * 10
    const restMiles = miles - 10; /// when your input is greter than 10 less than 20 than we should find rest of the mile that is 20 - 10 cause nest 10 mile we can find 50 animal per miles
    const secoundAnimalCount = restMiles * second10MilesPerMilesAnimalCount; // than restmiles * 10 to 20 miles per miles find animal 50
    const totalAnimalCount = firstAnimalCount + secoundAnimalCount; // just getting total we can add fisrt and 2nd animal count
    return totalAnimalCount;
  } else {
    const firstAnimalCount = first10MilesPerMilesAnimalCount * 10;
    const secoundAnimalCount = second10MilesPerMilesAnimalCount * 10;
    const restMiles = miles - 20;
    const restAnimalCount = restMilesPerMilesAnimalCount * restMiles;
    const totalAnimalCount =
      firstAnimalCount + secoundAnimalCount + restAnimalCount;
    return totalAnimalCount;
  }
}
console.log(findAnimal(30)); /// ans is 1600
