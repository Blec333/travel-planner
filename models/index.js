// import models
const Traveller = require('./traveller');
const Location = require('./location');
const Trip = require('./trips');


Traveller.belongsToMany(Location, {
  through: Trip,
  foreignKey: 'traveler_id',
});
Location.belongsToMany(Traveller, {
  through: Trip,
  foreignKey: 'location_id',
});






module.exports = {
  Traveller,
  Location,
  Trip,
};
