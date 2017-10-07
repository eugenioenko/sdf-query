describe("sdf.$().append", function() {

    it("Should create an element", function(){
        var element1 = document.createElement('div');
        var element2 = sdf.$().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

});
