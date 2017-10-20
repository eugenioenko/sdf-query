describe("s().hasClass", function() {

    it("Should not find a class '.class-no-present' in the body", function(){
        expect(s('body').hasClass('.class-no-present')).toBe(false);
    });

    it("Should find a class '.body-class' in the body", function(){
        s('body').addClass('body-class');
        s('body').addClass('other-class');
        expect(s('body').hasClass('body-class')).toBe(true);
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return s('div').hasClass(1);
            }
        ).toThrow();
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return s('div').hasClass(1);
            }
        ).toThrow();
    });

});