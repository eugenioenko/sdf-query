describe("s().create", function() {

    it("Should create a div element", function(){
        var element1 = document.createElement('div');
        var element2 = s().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

    it("Should create a div element with text 'test text'", function(){
        var element = s().create('div', 'test text');
        expect(
            s(element).html()
        ).toEqual('test text');
    });

    it("Should create nested elements", function(){
        var element = s().create('div', '<div id="created_nested_element_id"></div>');
        s('body').append(element);
        expect(
            s('#created_nested_element_id').length
        ).toEqual(1);
    });

});
