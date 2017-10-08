describe("sdf.$", function() {

	it("Should be defined sdf.$", function(){
	    expect(sdf.$).toBeDefined();
	});

    it("Should get elements", function(){
        expect(sdf.$('*').length).toBeGreaterThan(0);
    });

    it("Should get maximum of 3 elements", function(){
        expect(sdf.$('*', 3).length).toBeLessThanOrEqual(3);
    });

    it("Should use the querySelector method", function(){
        expect(sdf.$('body',1 ).method).toEqual('querySelector');
    });

    it("Should use the querySelectorAll method", function(){
        expect(sdf.$('body').method).toEqual('querySelectorAll');
    });

    it("Should use getElementById method", function(){
        expect(sdf.$('#element_id').method).toEqual('getElementById');
    });

    it("Should use element selector method", function(){
        expect(sdf.$(document.body).method).toEqual('element');
    });

    it("Should not find any element with id #not_id_in_this_doc", function(){
        expect(sdf.$('#not_id_in_this_doc').length).toEqual(0);
    });


});
