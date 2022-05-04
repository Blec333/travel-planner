// import models
const Traveler = require('./traveler');
const Location = require('./location');
const Trip = require('./trips');


Traveler.belongsToMany(Location, {
  through: Trip,
  foreignKey: 'traveler_id',
});
Location.belongsToMany(Traveler, {
  through: Trip,
  foreignKey: 'location_id',
});


Traveler.hasMany(Location, {
  through: Trip,
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});
Location.hasMany(Traveler, {
  through: Trip,
  foreignKey: 'traveler_id',
  onDelete: 'CASCADE',
});




module.exports = {
  Traveler,
  Location,
  Trip,
};
