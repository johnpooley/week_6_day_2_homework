const Park = function(name, ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dino_collection = [];
};

Park.prototype.addDinosaur = function (dino) {
  this.dino_collection.push(dino);
};

Park.prototype.removeDinosaur = function(dino){
  this.dino_collection.splice(this.dino_collection.indexOf(dino),1);

};

Park.prototype.mostPopular = function(){
  let highest = {guestsAttractedPerDay: 0}

  for (let pop of this.dino_collection){
    if(pop.guestsAttractedPerDay > highest.guestsAttractedPerDay)
    highest = pop};

    return highest;
  };


  Park.prototype.findBySpecies = function (speciesm) {
    let dinoSpecies = []
    for (let dude of this.dino_collection){
      if(dude.species == speciesm){
        dinoSpecies.push(dude)
      };
    };
    return dinoSpecies;
  };

  Park.prototype.totalVisitors = function () {
    let totalVisits = 0
    for (let dude of this.dino_collection){
      totalVisits += dude.guestsAttractedPerDay;
    };
    return totalVisits;

  };

  Park.prototype.visitsPerYear = function () {
    bob = this.totalVisitors();
    let annualVisits = bob * 360;

    return annualVisits;
  };

  Park.prototype.annualRevenue = function () {
    let visitors = this.visitsPerYear();
    let revenue = visitors *this.ticket_price;
    return revenue;
  };


  module.exports = Park;
