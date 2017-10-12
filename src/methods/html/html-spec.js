describe("sdf.$().html", function() {

    it("Should get innerHTML from body", function(){
        expect(
            sdf.$('body').html()
        ).toEqual(document.body.innerHTML);
    });

    it("should set the innerHTML of and element", function(){
        var element = sdf.$().create('div', '<b>bold</b>');
        sdf.$(element).html('not bold');
        expect(
            sdf.$(element).html()
        ).toEqual("not bold");
    });

});
