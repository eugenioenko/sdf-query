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