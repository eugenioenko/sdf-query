describe("sdf.$().hasClass", function() {

    it("Should not find a class '.class-no-present' in the body", function(){
        expect(sdf.$('body',1).hasClass('.class-no-present')).toBe(false);
    });

    it("Should find a class '.body-class' in the body", function(){
        sdf.$('body',1 ).addClass('body-class');
        sdf.$('body', 1).addClass('other-class');
        expect(sdf.$('body',1).hasClass('body-class')).toBe(true);
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return sdf.$('div', 1).hasClass(1);
            }
        ).toThrow();
    });

    it("Should throw an error, classname should be string", function(){
    	expect(
            function(){
                return sdf.$('div', 1).hasClass(1);
            }
        ).toThrow();
    });

});