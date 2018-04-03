describe('The transportFee function', function(){

    it('should count transportFee in the morning', function(){

        assert.equal(transportFee("morning"), "R20");
    });
    it('transportFee in the afternoon', function(){

        assert.equal( transportFee("afternoon"), "R10" );
    });
});
