 /*
  * Returns a string describing the relationship between two values of any type.
  * @param x First value
  * @param y Second value
  */
function getRelationship(x, y) {
  if (!isNumber(x) || !isNumber(y)) {
    return getFailString(x, y);
  } else {
    return getComparisonString(x, y);
  }
}

 /*
  * Returns true if x is type number and not NaN.
  * @param x Value to check
  */
function isNumber(x) {
  return typeof x === 'number' && !isNaN(x);
}

 /*
  * Returns the string to output if one or more of the values is not a number.
  * Ensures that the string is grammatically correct based on the number
  * of values that fail the number check.
  * @param x First value
  * @param y Second value
  */
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
  output += count == 1 ? ' is not a number' : ' are not numbers';
  return output;
}

 /*
  * Returns the string value representing the correct comparison operator
  * between two number values.
  * @param x First value
  * @param y Second value
  */
function getComparisonString(x, y) {
  if (x == y) {
    return '=';
  } else if (x > y) {
    return '>';
  } else {
    return '<';
  }
}

 /*
  * Returns a trimmed string representation of the value x.
  * @param x Value to trim
  */
function getTrimmedString(x) {
  return String(x).trim();
}