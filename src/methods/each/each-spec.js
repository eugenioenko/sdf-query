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