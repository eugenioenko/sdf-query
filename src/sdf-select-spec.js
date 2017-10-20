describe("s", function() {

    it("Should be defined s", function(){
        expect(s).toBeDefined();
    });

    it("Should get elements", function(){
        expect(
            s('*').length
        ).toBeGreaterThan(0);
    });

    it("Should get maximum of 3 elements", function(){
        expect(
            s('*', 3).length
        ).toBeLessThanOrEqual(3);
    });

    it("Should use the querySelector method", function(){
        expect(
            s('body',1 ).method
        ).toEqual('querySelector');
    });

    it("Should use the querySelectorAll method", function(){
        expect(
            s('body').method
        ).toEqual('querySelectorAll');
    });

    it("Should use getElementById method", function(){
        expect(
            s('#element_id').method
        ).toEqual('getElementById');
    });

    it("Should use element selector method", function(){
        expect(
            s(document.body).method
        ).toEqual('element');
    });

    it("Should not find any element with id #not_id_in_this_doc", function(){
        expect(
            s('#not_id_in_this_doc').length
        ).toEqual(0);
    });


});
