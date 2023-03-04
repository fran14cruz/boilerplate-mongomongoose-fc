require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Francisco', 
    age: 25, 
    favoriteFoods: ['Ramen', 'Moussaka']
  });
  person.save(function(err, data) {
    if (err) return done(err);
    done(null, data);
  });
};

// const arrayOfPeople = [
//   {name: 'Francisco', age: 25, favoriteFoods: ['Ramen', 'Moussaka']},
//   {name: 'Alejandro', age: 30, favoriteFoods: ['Pho', 'Chocolate']},
//   {name: 'Alex', age: 15, favoriteFoods: ['Rice', 'Matcha tea']}
// ];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return done(err);
    done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
