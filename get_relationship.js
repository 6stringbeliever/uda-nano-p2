function getRelationship(x, y) {
  if (!isNumber(x) || !isNumber(y)) {
    return getFailString(x, y);
  } else {
    return getComparisonString(x, y);
  }
}

function isNumber(x) {
  return typeof x === 'number';
}

function getFailString(x, y) {
  //"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
  var output = "Can't compare relationships because ";
  var count = 0;
  if (!isNumber(x)) {
    count++;
    output += x;
  }
  if (!isNumber(y)) {
    count++;
    if (count == 2) {
      output += " and ";
    }
    output += y;
  }
  if (count == 1) {
    output += " is not a number";
  } else {
    output += " are not numbers";
  }
  return output;
}

function getComparisonString(x, y) {
  if (x == y) {
    return "=";
  } else if (x > y) {
    return ">";
  } else {
    return "<";
  }
}