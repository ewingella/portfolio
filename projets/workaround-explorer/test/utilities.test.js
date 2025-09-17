// Premier test simple pour utilities.js
import { expect } from 'chai';
import { formatNumber } from '../modules/utilities.js';

describe('Utilities Module', function() {
  
  describe('formatNumber()', function() {
    
    // Premier test très simple
    it('should format 1000 as $1,000.00', function() {
      const result = formatNumber(1000);
      expect(result).to.equal('$1,000.00');
    });

    // un test qui echoue volontairement
    it("should format 600 as $600.00", function(){
        const result = formatNumber(600);
        expect(result).to.equal('$600.00');
    });
    
  });
  
});

