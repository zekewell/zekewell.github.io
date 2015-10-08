(function() {
  'use strict';

  describe('Part II', function() {
    

    describe('extend', function() {
      it('returns the first argument', function() {
        var to = {};
        var from = {};
        var extended = _.extend(to, from);

        expect(extended).to.equal(to);
      });

      it('should extend an object with the attributes of another', function() {
        var to = {};
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.a).to.equal('b');
      });

      it('should override properties found on the destination', function() {
        var to = { a: 'x' };
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.a).to.equal('b');
      });

      it('should not override properties not found in the source', function() {
        var to = { x: 'x' };
        var from = { a: 'b' };
        var extended = _.extend(to, from);

        expect(extended.x).to.equal('x');
      });

      it('should extend from multiple source objects', function() {
        var extended = _.extend({ x: 1 }, { a: 2 }, { b:3 });

        expect(extended).to.eql({ x: 1, a: 2, b: 3 });
      });

      it('in the case of a conflict, it should use the last property\'s values when extending from multiple source objects', function() {
        var extended = _.extend({ x: 'x' }, { a: 'a', x: 2 }, { a: 1 });

        expect(extended).to.eql({ x: 2, a: 1 });
      });
    });

  });
}());