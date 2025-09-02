// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const option1 = 'Pure Strawberry Joy';
  const option2 = 'Energizer';
  const option3 = 'Green Garden';
  const option4 = 'Tropical Island';
  const option5 = 'All or Nothing';

  switch (name) {
    case option1:
      return 0.5;
      break;
    case option2:
      return 1.5;
      break;
    case option3:
      return 1.5;
      break;
    case option4:
      return 3;
      break;
    case option5:
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
   let wedgesCut = 0;
   let limesCut = 0;

  while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
    switch (limes[limesCut]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
    limesCut++;
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
 let timeUsed = 0;
  while (timeLeft > timeUsed){
    switch (orders [0]){
      case 'Pure Strawberry Joy':
        timeUsed += 0.5;
        break;
      case 'Energizer':
        timeUsed += 1.5;
        break;
      case 'Green Garden':
        timeUsed += 1.5;
        break;
      case 'Tropical Island':
        timeUsed += 3;
        break;
      case 'All or Nothing':
        timeUsed += 5;
        break;
      default:
        timeUsed += 2.5;
        break;
    }
    orders.shift();
  }
  return orders;
}
