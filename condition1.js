// Part 1: Function to insert a name to the end of the list
function insertName(namesList, newName) {
    namesList.push(newName);
    return namesList;
  }
  
  // Part 2: Function to check if the list has a given name
  function hasName(namesList, name) {
    return namesList.includes(name);
  }
  
  // Part 3: Function to find names common to two lists
  function findCommonNames(list1, list2) {
    let commonNames = [];
  
    for (let name of list1) {
      if (list2.includes(name)) {
        commonNames.push(name);
      }
    }
  
    return commonNames;
  }
  
  // Part 4: Function to get the length of names as integers
  function getLengthOfNames(namesList) {
    let lengths = [];
  
    for (let name of namesList) {
      lengths.push(name.length);
    }
  
    return lengths;
  }
  
  // Example usage:
  let names = ["Maria", "Antony", "Joy", "Juan"];
  
  // Part 1: Inserting a name to the end of the list
  let updatedNames = insertName(names, "John");
  console.log("Names after inserting a new name:", updatedNames);
  
  // Part 2: Checking if the list has a name
  let hasNameMaria = hasName(names, "Maria");
  console.log("Does the list have the name 'Maria'? " + hasNameMaria);
  
  // Part 3: Finding common names between two lists
  let otherNames = ["Antony", "John", "Ella"];
  let commonNames = findCommonNames(names, otherNames);
  console.log("Common names between the two lists:", commonNames);
  
  // Part 4: Getting the length of names as integers
  let nameLengths = getLengthOfNames(names);
  console.log("Lengths of names:", nameLengths);
  