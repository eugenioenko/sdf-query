describe("sdf.$().text", function() {

    it("Should get textContent from body", function(){
        expect(
            sdf.$('body').text()
        ).toEqual(document.body.textContent);
    });

    it("should set the textContent of and element", function(){
        var element = sdf.$().create('div', '<b>bold</b>');
        sdf.$(element).text('not bold');
        expect(
            sdf.$(element).text()
        ).toEqual("not bold");
    });

    it("Should get textContent and not innerHTML", function(){
        var element = sdf.$().create('div', '<b>bold</b>');
        expect(
            sdf.$(element).text()
        ).toEqual("bold");
    });

    it("Should throw exception, too many arguments", function(){
        var element = sdf.$().create('div', '<b>bold</b>');
        expect(function(){
            sdf.$(element).text('arg', 'arg', 'arg');
        }).toThrow();
    });

});
