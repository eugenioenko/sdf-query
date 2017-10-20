describe("s().utils.validateArgTypes", function() {

    it("true == ['string']:[string]", function(){
        expect(
            s().utils.validateArgTypes(['string'], ["string"])
        ).toBe(true);
    });

    it("true == ['string']:[any]", function(){
        expect(
            s().utils.validateArgTypes(["string"], ["any"])
        ).toBe(true);
    });

    it("true == [{},{}]:[object, any]", function(){
        expect(
            s().utils.validateArgTypes([{}, {}], ["object", "any"])
        ).toBe(true);
    });

    it("true == [1,2,3]:[three numbers]", function(){
        expect(
            s().utils.validateArgTypes([1,2,3], ["number", "number", "number"])
        ).toBe(true);
    });

    it("true == [1,2,3]:[number, number, any]", function(){
        expect(
            s().utils.validateArgTypes([1,2,3], ["number", "number", "any"])
        ).toBe(true);
    });

    it("true == [function(){}]:[any]", function(){
        expect(
            s().utils.validateArgTypes([function(){}], ["any"])
        ).toBe(true);
    });

    it("true == [function(){}]:[function]", function(){
        expect(
            s().utils.validateArgTypes([function(){}], ["function"])
        ).toBe(true);
    });

    it("false == ['not_number',2,3]:[number, number, any]", function(){
        expect(
            s().utils.validateArgTypes(["string",2,3], ["number", "number", "any"])
        ).toBe(false);
    });

    it("false == [2,3]:[number, number, any]", function(){
        expect(
            s().utils.validateArgTypes([2,3], ["number", "number", "any"])
        ).toBe(false);
    });

    it("false == [{},{}]:[object]", function(){
        expect(
            s().utils.validateArgTypes([{}, {}], ["object"])
        ).toBe(false);
    });

    it("false == [(function(){})()]:[function]", function(){
        expect(
            s().utils.validateArgTypes([(function(){})()], ["function"])
        ).toBe(false);
    });

    it("false == [(function(){return 0;})()]:[function]", function(){
        expect(
            s().utils.validateArgTypes([(function(){return 0;})()], ["string"])
        ).toBe(false);
    });

});
