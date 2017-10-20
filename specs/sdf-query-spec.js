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
describe("s().append", function() {

    it("Should create an element", function(){
        var element1 = document.createElement('div');
        var element2 = s().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

});

describe("s().attr", function() {

    it("Should not find [data-body-attr] in body", function(){
        expect(
            s('body').attr('data-body-attr')
        ).toBeNull();
    });

    it("Should set  [data-body-attr='value'] in body", function(){
        s('body').attr('data-body-attr', 'value');
        expect(
            s('body').attr('data-body-attr')
        ).toEqual('value');
    });

    it("Should remove [data-body-attr] from body", function(){
        s('body').removeAttr('data-body-attr');
        expect(
            s('body').attr('data-body-attr')
        ).toBeNull();
    });

});

describe("s().create", function() {

    it("Should create a div element", function(){
        var element1 = document.createElement('div');
        var element2 = s().create('div', '');
        expect(typeof element1).toEqual(typeof element2);
    });

    it("Should create a div element with text 'test text'", function(){
        var element = s().create('div', 'test text');
        expect(
            s(element).html()
        ).toEqual('test text');
    });

    it("Should create nested elements", function(){
        var element = s().create('div', '<div id="created_nested_element_id"></div>');
        s('body').append(element);
        expect(
            s('#created_nested_element_id').length
        ).toEqual(1);
    });

});

describe("s().css", function() {


    it("Should set  body background color to rgb(238, 238, 238)", function(){
       s('body', 1).css('backgroundColor', 'rgb(238, 238, 238)');
        expect(
            s('body', 1).css('backgroundColor')
        ).toEqual('rgb(238, 238, 238)');
    });

    it("Should set  body background-color and line-height", function(){
       s('body', 1).css({backgroundColor: 'rgb(238, 238, 238)', lineHeight: '1.2'});
        expect(
            s('body', 1).css('lineHeight')
        ).toEqual('1.2');
    });

    it("Should throw invalid argument for function", function(){
       expect(function(){
            s('body', 1).css(function(){});
        }).toThrow();
    });

    it("Should throw invalid argument for number as getter", function(){
       expect(function(){
            s('body', 1).css(1);
        }).toThrow();
    });

});
describe("s().each", function() {

    it("Should throw invalid argument for no callback", function(){
       expect(function(){
            s('div').each();
        }).toThrow();
    });

    it("Should throw invalid argument for invalid callback", function(){
       expect(function(){
            s('div').each('not_a_call_back');
        }).toThrow();
    });

    it("Should pass", function(){
       expect(function(){
            s('ul').each(function(){});
        }).not.toThrow();
    });

    it("Should execute once per each li on page", function(){
       var counter = 0;
       var length = 0;
       expect((function(){
            length = s('li').each(function(){
                counter++;
            }).length;
            return counter;
        })()).toEqual(length);
    });

});
describe("s().element", function() {

    it("Should return the body element", function(){
       expect(s('body').element()).toEqual(document.body);
    });

});
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
describe("s().html", function() {

    it("Should get innerHTML from body", function(){
        expect(
            s('body').html()
        ).toEqual(document.body.innerHTML);
    });

    it("should set the innerHTML of and element", function(){
        var element = s().create('div', '<b>bold</b>');
        s(element).html('not bold');
        expect(
            s(element).html()
        ).toEqual("not bold");
    });

});

describe("s().on", function() {

    it("Should throw invalid argument for no callback", function(){
       expect(function(){
            s('div', 1).on();
        }).toThrow();
    });

    it("Should throw invalid argument for invalid callback", function(){
       expect(function(){
            s('div', 1).on(1, 'not_a_call_back');
        }).toThrow();
    });

    it("Should throw invalid argument for invalid event", function(){
       expect(function(){
            s('div', 1).on({}, function(){});
        }).toThrow();
    });

     it("Should throw invalid argument for invalid arguments", function(){
       expect(function(){
            s('div', 1).on();
        }).toThrow();
    });

    it("Should pass", function(){
       expect(function(){
            s('div', 1).on('click', function(){});
        }).not.toThrow();
    });

});
describe("s().text", function() {

    it("Should get textContent from body", function(){
        expect(
            s('body').text()
        ).toEqual(document.body.textContent);
    });

    it("should set the textContent of and element", function(){
        var element = s().create('div', '<b>bold</b>');
        s(element).text('not bold');
        expect(
            s(element).text()
        ).toEqual("not bold");
    });

    it("Should get textContent and not innerHTML", function(){
        var element = s().create('div', '<b>bold</b>');
        expect(
            s(element).text()
        ).toEqual("bold");
    });

    it("Should throw exception, too many arguments", function(){
        var element = s().create('div', '<b>bold</b>');
        expect(function(){
            s(element).text('arg', 'arg', 'arg');
        }).toThrow();
    });

});
