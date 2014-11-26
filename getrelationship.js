function getRelationship(x, y) {
  if (!isNumber(x) || !isNumber(y)) {
    return getFailString(x, y);
  } else {
    return getComparisonString(x, y);
  }
}

function isNumber(x) {
  return typeof x === 'number' && !isNaN(x);
}

function getFailString(x, y) {
  var output = 'Can\'t compare relationships because ';
  var count = 0;
  if (!isNumber(x)) {
    count++;
    output += getTrimmedString(x);
  }
  if (!isNumber(y)) {
    count++;
    if (count == 2) {
      output += ' and ';
    }
    output += getTrimmedString(y);
  }
  output += count == 1 ? ' is not a number.' : ' are not numbers.';
  return output;
}

function getComparisonString(x, y) {
  if (x == y) {
    return '=';
  } else if (x > y) {
    return '>';
  } else {
    return '<';
  }
}

function getTrimmedString(x) {
  return String(x).trim();
}