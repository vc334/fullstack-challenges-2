const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  if (soldierType === 'Hobbits' || soldierType === 'Dwarves' || soldierType === 'Eagles' || soldierType === 'Elves') {
    return true;
  } return false;
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const soldierArray = battlefield.split(',');
  const returningObject = {};

  soldierArray.forEach((soldier) => {
    const newSoldierArray = soldier.split(':');
    returningObject[newSoldierArray[0]] = Number.parseInt(newSoldierArray[1], 10);
  });

  return returningObject;
};


const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  const soldierTally = buildSoldierObject(battlefield);
  let good = 0;
  let bad = 0;

  const theKeys = Object.keys(soldierTally);

  theKeys.forEach((key) => {
    if (isGood(key)) {
      good += soldierTally[key];
    } else {
      bad += soldierTally[key];
    }
  });

  if (good > bad) return "Good";
  if (good < bad) return "Evil";
  return "Tie";
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
