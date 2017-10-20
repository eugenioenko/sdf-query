describe("s().append", function() {

    it("Should create an element", function(){
        var element1 = document.createElement('div');
        var element2 = s().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

});
