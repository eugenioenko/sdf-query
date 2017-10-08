describe("sdf.$().element", function() {

    it("Should return the body element", function(){
       expect(sdf.$('body').element()).toEqual(document.body);
    });

});