// datos privados en js

const person = () => {
  var saveName = 'Name';
  return {
    getname: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

newPerson = person();

console.log(newPerson.getName());
newPerson.saveName("Hugo");
console.log(newPerson.getName());
 