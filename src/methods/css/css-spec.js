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