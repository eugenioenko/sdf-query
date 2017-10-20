describe("s().element", function() {

    it("Should return the body element", function(){
       expect(s('body').element()).toEqual(document.body);
    });

});