describe("s().text", function() {

    it("Should get textContent from body", function(){
        expect(
            s('body').text()
        ).toEqual(document.body.textContent);
    });

    it("should set the textContent of and element", function(){
        var element = s().create('div', '<b>bold</b>');
        s(element).text('not bold');
        expect(
            s(element).text()
        ).toEqual("not bold");
    });

    it("Should get textContent and not innerHTML", function(){
        var element = s().create('div', '<b>bold</b>');
        expect(
            s(element).text()
        ).toEqual("bold");
    });

    it("Should throw exception, too many arguments", function(){
        var element = s().create('div', '<b>bold</b>');
        expect(function(){
            s(element).text('arg', 'arg', 'arg');
        }).toThrow();
    });

});
