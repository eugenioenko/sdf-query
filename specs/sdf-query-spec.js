describe("sdf.$", function() {

    it("Should be defined sdf.$", function(){
        expect(sdf.$).toBeDefined();
    });

    it("Should get elements", function(){
        expect(
            sdf.$('*').length
        ).toBeGreaterThan(0);
    });

    it("Should get maximum of 3 elements", function(){
        expect(
            sdf.$('*', 3).length
        ).toBeLessThanOrEqual(3);
    });

    it("Should use the querySelector method", function(){
        expect(
            sdf.$('body',1 ).method
        ).toEqual('querySelector');
    });

    it("Should use the querySelectorAll method", function(){
        expect(
            sdf.$('body').method
        ).toEqual('querySelectorAll');
    });

    it("Should use getElementById method", function(){
        expect(
            sdf.$('#element_id').method
        ).toEqual('getElementById');
    });

    it("Should use element selector method", function(){
        expect(
            sdf.$(document.body).method
        ).toEqual('element');
    });

    it("Should not find any element with id #not_id_in_this_doc", function(){
        expect(
            sdf.$('#not_id_in_this_doc').length
        ).toEqual(0);
    });


});

describe("sdf.utils.validateArgTypes", function() {

    it("true == ['string']:[string]", function(){
        expect(
            sdf.utils.validateArgTypes(['string'], ["string"])
        ).toBe(true);
    });

    it("true == ['string']:[any]", function(){
        expect(
            sdf.utils.validateArgTypes(["string"], ["any"])
        ).toBe(true);
    });

    it("true == [{},{}]:[object, any]", function(){
        expect(
            sdf.utils.validateArgTypes([{}, {}], ["object", "any"])
        ).toBe(true);
    });

    it("true == [1,2,3]:[three numbers]", function(){
        expect(
            sdf.utils.validateArgTypes([1,2,3], ["number", "number", "number"])
        ).toBe(true);
    });

    it("true == [1,2,3]:[number, number, any]", function(){
        expect(
            sdf.utils.validateArgTypes([1,2,3], ["number", "number", "any"])
        ).toBe(true);
    });

    it("true == [function(){}]:[any]", function(){
        expect(
            sdf.utils.validateArgTypes([function(){}], ["any"])
        ).toBe(true);
    });

    it("true == [function(){}]:[function]", function(){
        expect(
            sdf.utils.validateArgTypes([function(){}], ["function"])
        ).toBe(true);
    });

    it("false == ['not_number',2,3]:[number, number, any]", function(){
        expect(
            sdf.utils.validateArgTypes(["string",2,3], ["number", "number", "any"])
        ).toBe(false);
    });

    it("false == [2,3]:[number, number, any]", function(){
        expect(
            sdf.utils.validateArgTypes([2,3], ["number", "number", "any"])
        ).toBe(false);
    });

    it("false == [{},{}]:[object]", function(){
        expect(
            sdf.utils.validateArgTypes([{}, {}], ["object"])
        ).toBe(false);
    });

    it("false == [(function(){})()]:[function]", function(){
        expect(
            sdf.utils.validateArgTypes([(function(){})()], ["function"])
        ).toBe(false);
    });

    it("false == [(function(){return 0;})()]:[function]", function(){
        expect(
            sdf.utils.validateArgTypes([(function(){return 0;})()], ["string"])
        ).toBe(false);
    });

});

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
describe("sdf.$().append", function() {

    it("Should create an element", function(){
        var element1 = document.createElement('div');
        var element2 = sdf.$().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

});

describe("sdf.$().attr", function() {

    it("Should not find [data-body-attr] in body", function(){
        expect(
            sdf.$('body', 1).attr('data-body-attr')
        ).toBeNull();
    });

    it("Should set  [data-body-attr='value'] in body", function(){
        sdf.$('body', 1).attr('data-body-attr', 'value');
        expect(
            sdf.$('body', 1).attr('data-body-attr')
        ).toEqual('value');
    });

    it("Should remove [data-body-attr] from body", function(){
        sdf.$('body', 1).removeAttr('data-body-attr');
        expect(
            sdf.$('body', 1).attr('data-body-attr')
        ).toBeNull();
    });

});

describe("sdf.$().create", function() {

    it("Should create a div element", function(){
        var element1 = document.createElement('div');
        var element2 = sdf.$().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

    it("Should create a div element with text 'test text'", function(){
        var element = sdf.$().create('div', 'test text');
        expect(
            sdf.$(element).html()
        ).toEqual('test text');
    });

    it("Should create nested elements", function(){
        var element = sdf.$().create('div', '<div id="created_nested_element_id"></div>');
        sdf.$('body', 1).append(element);
        expect(
            sdf.$('#created_nested_element_id').length
        ).toEqual(1);
    });

});

describe("sdf.$().css", function() {


    it("Should set  body background color to rgb(238, 238, 238)", function(){
       sdf.$('body', 1).css('backgroundColor', 'rgb(238, 238, 238)');
        expect(
            sdf.$('body', 1).css('backgroundColor')
        ).toEqual('rgb(238, 238, 238)');
    });

    it("Should set  body background-color and line-height", function(){
       sdf.$('body', 1).css({backgroundColor: 'rgb(238, 238, 238)', lineHeight: '1.2'});
        expect(
            sdf.$('body', 1).css('lineHeight')
        ).toEqual('1.2');
    });

    it("Should throw invalid argument for function", function(){
       expect(function(){
            sdf.$('body', 1).css(function(){});
        }).toThrow();
    });

    it("Should throw invalid argument for number as getter", function(){
       expect(function(){
            sdf.$('body', 1).css(1);
        }).toThrow();
    });

});
describe("sdf.$().each", function() {

    it("Should throw invalid argument for no callback", function(){
       expect(function(){
            sdf.$('div').each();
        }).toThrow();
    });

    it("Should throw invalid argument for invalid callback", function(){
       expect(function(){
            sdf.$('div').each('not_a_call_back');
        }).toThrow();
    });

    it("Should pass", function(){
       expect(function(){
            sdf.$('ul').each(function(){});
        }).not.toThrow();
    });

    it("Should execute once per each li on page", function(){
       var counter = 0;
       var length = 0; 
       expect((function(){
            length = sdf.$('li').each(function(){
                counter++;
            }).length;
            return counter;
        })()).toEqual(length);
    });

});
describe("sdf.$().element", function() {

    it("Should return the body element", function(){
       expect(sdf.$('body').element()).toEqual(document.body);
    });

});
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
describe("sdf.$().on", function() {

    it("Should throw invalid argument for no callback", function(){
       expect(function(){
            sdf.$('div', 1).on();
        }).toThrow();
    });

    it("Should throw invalid argument for invalid callback", function(){
       expect(function(){
            sdf.$('div', 1).on(1, 'not_a_call_back');
        }).toThrow();
    });

    it("Should throw invalid argument for invalid event", function(){
       expect(function(){
            sdf.$('div', 1).on({}, function(){});
        }).toThrow();
    });

     it("Should throw invalid argument for invalid arguments", function(){
       expect(function(){
            sdf.$('div', 1).on();
        }).toThrow();
    });
    
    it("Should pass", function(){
       expect(function(){
            sdf.$('div', 1).on('click', function(){});
        }).not.toThrow();
    });

});