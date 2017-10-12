describe("sdf.$().attr", function() {

    it("Should not find [data-body-attr] in body", function(){
        expect(
            sdf.$('body').attr('data-body-attr')
        ).toBeNull();
    });

    it("Should set  [data-body-attr='value'] in body", function(){
        sdf.$('body').attr('data-body-attr', 'value');
        expect(
            sdf.$('body').attr('data-body-attr')
        ).toEqual('value');
    });

    it("Should remove [data-body-attr] from body", function(){
        sdf.$('body').removeAttr('data-body-attr');
        expect(
            sdf.$('body').attr('data-body-attr')
        ).toBeNull();
    });

});
