var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

 /*
  * Takes an array of names in [First Middle] Last order and returns
  * the list in alphabetical order in Last[, First Middle] format
  * @param names  Array of names
  */
function alphabetizer(names) {
  var output = [];
  for (var i = 0; i < names.length; i++) {
    output.push(reverseName(names[i]));
  }
  return alphabetizeNames(output);
}

 /*
  * Takes a name [First Middle] Last format.
  * Returns the name in Last[, First Middle] format.
  * @param name Name string to reverse
  */
function reverseName(name) {
  var nameArray = name.split(' ');
  return nameArray.length > 1 ? 
         nameArray.pop() + ', ' + nameArray.join(' ') : nameArray[0];
}

 /*
  * Takes an array of names in Last, First format and returns the
  * array of names alphabetized.
  * @param names Array of names
  */
function alphabetizeNames(names) {
  return names.sort();
}