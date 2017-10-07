describe("sdf.utils.validateArgTypes", function() {

	it("true == ['string']:[string]", function(){
	    expect(sdf.utils.validateArgTypes(['string'], ["string"])).toBe(true);
	});

	it("true == ['string']:[any]", function(){
	    expect(sdf.utils.validateArgTypes(["string"], ["any"])).toBe(true);
	});

	it("true == [{},{}]:[object, any]", function(){
	    expect(sdf.utils.validateArgTypes([{}, {}], ["object", "any"])).toBe(true);
	});

    it("true == [1,2,3]:[three numbers]", function(){
        expect(sdf.utils.validateArgTypes([1,2,3], ["number", "number", "number"])).toBe(true);
    });

    it("true == [1,2,3]:[number, number, any]", function(){
        expect(sdf.utils.validateArgTypes([1,2,3], ["number", "number", "any"])).toBe(true);
    });

    it("true == [function(){}]:[any]", function(){
        expect(sdf.utils.validateArgTypes([function(){}], ["any"])).toBe(true);
    });

    it("true == [function(){}]:[function]", function(){
        expect(sdf.utils.validateArgTypes([function(){}], ["function"])).toBe(true);
    });

    it("false == ['not_number',2,3]:[number, number, any]", function(){
        expect(sdf.utils.validateArgTypes(["string",2,3], ["number", "number", "any"])).toBe(false);
    });

    it("false == [2,3]:[number, number, any]", function(){
        expect(sdf.utils.validateArgTypes([2,3], ["number", "number", "any"])).toBe(false);
    });

    it("false == [{},{}]:[object]", function(){
	    expect(sdf.utils.validateArgTypes([{}, {}], ["object"])).toBe(false);
	});

	it("false == [(function(){})()]:[function]", function(){
	    expect(sdf.utils.validateArgTypes([(function(){})()], ["function"])).toBe(false);
	});

	it("false == [(function(){return 0;})()]:[function]", function(){
	    expect(sdf.utils.validateArgTypes([(function(){return 0;})()], ["string"])).toBe(false);
	});
});
