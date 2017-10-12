describe("sdf.$().hasClass", function() {

    it("Should not find a class '.class-no-present' in the body", function(){
        expect(sdf.$('body').hasClass('.class-no-present')).toBe(false);
    });

    it("Should find a class '.body-class' in the body", function(){
        sdf.$('body').addClass('body-class');
        sdf.$('body').addClass('other-class');
        expect(sdf.$('body').hasClass('body-class')).toBe(true);
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return sdf.$('div').hasClass(1);
            }
        ).toThrow();
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return sdf.$('div').hasClass(1);
            }
        ).toThrow();
    });

});