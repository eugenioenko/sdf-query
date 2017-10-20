describe("s().attr", function() {

    it("Should not find [data-body-attr] in body", function(){
        expect(
            s('body').attr('data-body-attr')
        ).toBeNull();
    });

    it("Should set  [data-body-attr='value'] in body", function(){
        s('body').attr('data-body-attr', 'value');
        expect(
            s('body').attr('data-body-attr')
        ).toEqual('value');
    });

    it("Should remove [data-body-attr] from body", function(){
        s('body').removeAttr('data-body-attr');
        expect(
            s('body').attr('data-body-attr')
        ).toBeNull();
    });

});
