/*global describe */
/*global expect */
/*global _ */
(function() {
  'use strict';

  describe('Part I', function() {

    describe('_.identity()', function() {
      var uniqueObject = {};

      it('Should return whatever value is passed into it', function() {
        expect(_.identity(1)).to.equal(1);
        expect(_.identity('string')).to.equal('string');
        expect(_.identity(false)).to.be.false;
        expect(_.identity(uniqueObject)).to.equal(uniqueObject);
      });
    });

    describe('_.first()', function() {
      it('Should be able to return the first element of an array', function() {
        expect(_.first([1,2,3])).to.equal(1);
      });

      it('Should accept a length argument', function() {
        expect(_.first([1,2,3], (2))).to.eql([1, 2]);
      });

      it('Should return empty array if the length argument is zero', function() {
        expect(_.first([1,2,3], 0)).to.eql([]);
      });

      it('Should return just the array\'s elements if the length argument is greater than the array\'s length', function() {
        expect(_.first([1,2,3], 5)).to.eql([1, 2, 3]);
      });
      it('Should accept a negative length argument and return empty array', function(){
        expect(_.first([1,2,3], -2)).to.eql([]);
      });
    });

    describe('_.last()', function() {
      it('Should return the last element of an array', function() {
        expect(_.last([1,2,3])).to.equal(3);
      });

      it('Should accept a length argument', function() {
        expect(_.last([1,2,3], 2)).to.eql([2, 3]);
      });

      it('Should return empty array if the length argument is zero', function() {
        expect(_.last([1,2,3], 0)).to.eql([]);
      });

      it('Should return just the array\'s elements if the length argument is larger than array\'s length', function() {
        expect(_.last([1,2,3], 5)).to.eql([1, 2, 3]);
      });
       it('Should accept a negative length argument and return empty array', function(){
        expect(_.first([1,2,3], -2)).to.eql([]);
      });
    });

    describe('_.each()', function() {
      it('Should iterate over arrays, providing access to the element, index, and array itself', function() {
        var animals = ['ant', 'bat', 'cat'];
        var iterationInputs = [];

        _.each(animals, function(element, index, array) {
          iterationInputs.push([element, index, array]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals]
        ]);
      });

      it('Should only iterate over the array elements, not properties of the array', function() {
        var animals = ['ant', 'bat', 'cat'];
        var iterationInputs = [];

        animals.shouldBeIgnored = 'Ignore me!';

        _.each(animals, function(element, index, array) {
          iterationInputs.push([element, index, array]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals]
        ]);
      });

      it('Should iterate over objects, providing access to the value, key, and object itself', function() {
        var animals = { a: 'ant', b: 'bat', c: 'cat' };
        var iterationInputs = [];

        _.each(animals, function(value, key, object) {
          iterationInputs.push([value, key, object]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 'a', animals],
          ['bat', 'b', animals],
          ['cat', 'c', animals]
        ]);
      });
    });

    describe('_.indexOf()', function() {
      it('Should return the correct index of a value', function() {
        var numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 40)).to.equal(3);
      });

      it('Should not rely on built in [].indexOf()', function() {
        var numbers = [10, 20, 30];
        var stashed = Array.prototype.indexOf;
        delete Array.prototype.indexOf;
        expect(_.indexOf(numbers, 20)).to.equal(1);
        Array.prototype.indexOf = stashed;
      });

      it('Should return -1 when the value is not in the array', function() {
        var numbers = [10, 20, 30, 40, 50];

        expect(_.indexOf(numbers, 35)).to.equal(-1);
      });

      it('Should return the 1st index of a value even if there are multiples', function() {
        var numbers = [1, 40, 40, 40, 40, 50, 40, 40, 40, 50, 60, 70];

        expect(_.indexOf(numbers, 40)).to.equal(1);
      });
    });

    describe('_.filter()', function() {
      it('should be able to filter an array', function() {
        var isEven = function(num) { return num % 2 === 0; };
        var evens = _.filter([1, 2, 3, 4, 5, 6], isEven);

        expect(evens).to.eql([2, 4, 6]);
      });

      it('should still be able to filter an array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);

        expect(odds).to.eql([1, 3, 5]);
      });

      it('should not modify the input array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.filter(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe('_.reject()', function() {
      it('should be able to reject values from an array', function() {
        var isEven = function(num) { return num % 2 === 0; };
        var odds = _.reject([1, 2, 3, 4, 5, 6], isEven);

        expect(odds).to.eql([1, 3, 5]);
      });

      it('should still be able to reject values from an array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);

        expect(evens).to.eql([2, 4, 6]);
      });

      it('should not modify the input array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = _.reject(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe('_.uniq()', function() {
      it('should return all unique values in an unsorted array', function() {
        var numbers = [1, 2, 1, 3, 1, 4];

        expect(_.uniq(numbers)).to.eql([1, 2, 3, 4]);
      });

      it('should return all unique values in a sorted array', function() {
        var iterator = function(value) { return value + 1; };
        var numbers = [1, 2, 2, 3, 4, 4];

        expect(_.uniq(numbers, true, iterator)).to.eql([1, 2, 3, 4]);
      });

      it('should not modify the input array', function() {
        var numbers = [1, 2, 1, 3, 1, 4];
        var uniqueNumbers = _.uniq(numbers);

        expect(uniqueNumbers).to.not.equal(numbers);
      });
    });

    describe('map', function() {
      it('should apply a function to every value in an array', function() {
        var doubledNumbers = _.map([1, 2, 3], function(num) {
          return num * 2;
        });

        expect(doubledNumbers).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var numbers = [1, 2, 3];
        var mappedNumbers = _.map(numbers, function(num) {
          return num;
        });

        expect(mappedNumbers).to.not.equal(numbers);
      });
    });

    describe('pluck', function() {
      it('should return values contained at a user-defined property', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];

        expect(_.pluck(people, 'name')).to.eql(['moe', 'curly']);
      });

      it('should not modify the original array', function() {
        var people = [
          { name: 'moe', age: 30 },
          { name: 'curly', age: 50 }
        ];

        _.pluck(people, 'name');

        expect(people).to.eql([{ name: 'moe', age: 30 }, { name: 'curly', age: 50 }]);
      });
    });

    describe('reduce', function() {
      it('should be able to sum up an array', function() {
        var add = function(tally, item) {return tally + item; };
        var total = _.reduce([1, 2, 3], add, 0); 

        expect(total).to.equal(6);
      }); 
      
      it('should use the first element as an accumulator when none is given', function() {
        var add = function(tally, item) {return tally + item; };
        var total = _.reduce([1, 2, 3], add);

        expect(total).to.equal(6);
      }); 

      it('should invoke the iterator on the first element when given an accumulator', function() {
        var sumSquares = function(tally, item) {return tally + item * item; };
        var total = _.reduce([2, 3], sumSquares, 0); 

        expect(total).to.equal(13);
      }); 

      it('should not invoke the iterator on the first element when using it as an accumulator', function() {
        var sumSquares = function(tally, item) {return tally + item * item; };
        var total = _.reduce([2, 3], sumSquares);

        expect(total).to.equal(11);
      });

    });
    
    describe('contains', function() {
      it('should return false if a collection does not contain a user-specified value', function() {
        expect(_.contains([4, 5, 6], 2)).to.be.false;
      });

      it('should return true if a collection contains a user-specified value', function() {
        expect(_.contains([4, 5, 6], 5)).to.be.true;
      });
    });

    describe('every', function() {
      var isEven = function(num) {
        return num % 2 === 0;
      };

      it('passes by default for an empty collection', function() {
        expect(_.every([], _.identity)).to.be.true;
      });

      it('passes for a collection of all-truthy results', function() {
        expect(_.every([true, {}, 1], _.identity)).to.be.true;
      });

      it('fails for a collection of all-falsy results', function() {
        expect(_.every([null, 0, undefined], _.identity)).to.be.false;
      });

      it('fails for a collection containing mixed falsy and truthy results', function() {
        expect(_.every([true, false, 1], _.identity)).to.be.false;
        expect(_.every([1, undefined, true], _.identity)).to.be.false;
      });

      it('should work when provided a collection containing undefined values', function() {
        expect(_.every([undefined, undefined, undefined], _.identity)).to.be.false;
      });

      it('should cast the result to a boolean', function() {
        expect(_.every([1], _.identity)).to.be.true;
        expect(_.every([0], _.identity)).to.be.false;
      });

      it('should handle callbacks that manipulate the input', function() {
        expect(_.every([0, 10, 28], isEven)).to.be.true;
        expect(_.every([0, 11, 28], isEven)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.every([true, true, true])).to.be.true;
        expect(_.every([true, true, false])).to.be.false;
        expect(_.every([false, false, false])).to.be.false;
      });
    });

    describe('some', function() {
      var isEven = function(number){
        return number % 2 === 0;
      };

      it('should fail by default for an empty collection', function() {
        expect(_.some([])).to.be.false;
      });

      it('should pass for a collection of all-truthy results', function() {
        expect(_.some([true, {}, 1], _.identity)).to.be.true;
      });

      it('should fail for a collection of all-falsy results', function() {
        expect(_.some([null, 0, undefined], _.identity)).to.be.false;
      });

      it('should pass for a collection containing mixed falsy and truthy results', function() {
        expect(_.some([true, false, 1], _.identity)).to.be.true;
      });

      it('should pass for a set containing one truthy value that is a string', function() {
        expect(_.some([null, 0, 'yes', false], _.identity)).to.be.true;
      });

      it('should fail for a set containing no matching values', function() {
        expect(_.some([1, 11, 29], isEven)).to.be.false;
      });

      it('should pass for a collection containing one matching value', function() {
        expect(_.some([1, 10, 29], isEven)).to.be.true;
      });

      it('should cast the result to a boolean', function() {
        expect(_.some([1], _.identity)).to.be.true;
        expect(_.some([0], _.identity)).to.be.false;
      });

      it('should work when no callback is provided', function() {
        expect(_.some([true, true, true])).to.be.true;
        expect(_.some([true, true, false])).to.be.true;
        expect(_.some([false, false, false])).to.be.false;
      });
    });
  });
}());
