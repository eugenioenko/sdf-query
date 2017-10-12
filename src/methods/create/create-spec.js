describe("sdf.$().create", function() {

    it("Should create a div element", function(){
        var element1 = document.createElement('div');
        var element2 = sdf.$().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

    it("Should create a div element with text 'test text'", function(){
        var element = sdf.$().create('div', 'test text');
        expect(
            sdf.$(element).html()
        ).toEqual('test text');
    });

    it("Should create nested elements", function(){
        var element = sdf.$().create('div', '<div id="created_nested_element_id"></div>');
        sdf.$('body').append(element);
        expect(
            sdf.$('#created_nested_element_id').length
        ).toEqual(1);
    });

});
