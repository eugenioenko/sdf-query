describe("sdf.$().hasClass", function() {

    it("Should not find a class '.class-no-present' in the body", function(){
        expect(sdf.$('body',1).hasClass('.class-no-present')).toBe(false);
    });

    it("Should find a class '.body-class' in the body", function(){
        sdf.$('body',1 ).addClass('body-class');
        expect(sdf.$('body',1).hasClass('body-class')).toBe(true);
    });

});