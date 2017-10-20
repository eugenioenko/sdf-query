describe("s().addClass", function() {

    it("Should add class .body-test to the body", function(){
        s('body', 1).addClass('body-test');
        expect(s('body', 1).hasClass('body-test')).toBe(true);
    });

    it("Should add multiple classes to the body", function(){
        s('body').addClass('body-one body-two body-three  ');
        expect(s('body', 1).hasClass('body-one')).toBe(true);
        expect(s('body', 1).hasClass('body-two  ')).toBe(true);
        expect(s('body', 1).hasClass(' body-three')).toBe(true);
    });

});