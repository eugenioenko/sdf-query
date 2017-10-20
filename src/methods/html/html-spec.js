describe("s().html", function() {

    it("Should get innerHTML from body", function(){
        expect(
            s('body').html()
        ).toEqual(document.body.innerHTML);
    });

    it("should set the innerHTML of and element", function(){
        var element = s().create('div', '<b>bold</b>');
        s(element).html('not bold');
        expect(
            s(element).html()
        ).toEqual("not bold");
    });

});
