describe("sdf.$().addClass", function() {

    it("Should add class .body-test to the body", function(){
        sdf.$('body', 1).addClass('body-test');
        expect(sdf.$('body', 1).hasClass('body-test')).toBe(true);
    });

    it("Should add multiple classes to the body", function(){
        sdf.$('body').addClass('body-one body-two body-three  ');
        expect(sdf.$('body', 1).hasClass('body-one')).toBe(true);
        expect(sdf.$('body', 1).hasClass('body-two  ')).toBe(true);
        expect(sdf.$('body', 1).hasClass(' body-three')).toBe(true);
    });
    
});