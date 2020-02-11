const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park1;
  let dinosaur;

  beforeEach(function () {
    park1 = new Park('best park', 7)
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Mike', 'omnivore', 5);
    dinosaur3 = new Dinosaur('Mike', 'omnivore', 7);
  })

  it('should have a name',function(){
    actual = park1.name;
    assert.strictEqual(actual, 'best park');
  });


  it('should have a ticket price', function(){
    actual = park1.ticket_price;
    assert.strictEqual(actual, 7);
  });


  it('should have a collection of dinosaurs', function(){
    actual = park1.dino_collection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDinosaur(dinosaur);
    actual = park1.dino_collection;
    assert.deepStrictEqual(actual, [dinosaur]);

  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);

    park1.removeDinosaur(dinosaur2);
    actual = park1.dino_collection;
    assert.deepStrictEqual(actual, [dinosaur]);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);

    actual = park1.mostPopular()
    assert.equal(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur3);

    actual = park1.findBySpecies('Mike');
    assert.deepEqual(actual,[dinosaur2,dinosaur3])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);

    actual = park1.totalVisitors()
    assert.strictEqual(actual, 55);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);

    actual = park1.visitsPerYear();
    mathsIsHard = 55 * 360;
    assert.strictEqual(actual, mathsIsHard)

  });

  it('should be able to calculate total revenue for one year', function(){
    park1.addDinosaur(dinosaur);
    park1.addDinosaur(dinosaur2);

    actual = park1.annualRevenue()
    mathsIsReallyHard = 55 * 360 * 7
    assert.strictEqual(actual, mathsIsReallyHard);
  });

});
