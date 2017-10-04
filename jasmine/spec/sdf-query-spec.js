describe("Sdf Query", function() {

	it("sdf function should be defined and registered globaly", function() {
		expect(sdf).toBeDefined();
		expect(window.sdf).toBeDefined();
		expect(window["sdf"]).toBeDefined();

	});

	it("Query an attribute from body element. Getter and Setter", function(){
		expect(sdf.$('body', 1).attr('data-body-attr')).toBeNull();
		expect(sdf.$('body', 1).attr('data-body-attr', 'value'));
		expect(sdf.$('body', 1).attr('data-body-attr')).toEqual('value');
	});

	it("Should create an element", function(){
		var element1 = document.createElement('div');
		var element2 = sdf.$().create('div', '');
		expect(typeof element1).toEqual(typeof element2);
	});

	it("No event handlers should be added and should throw error", function(){
		expect(function(){
			sdf.$('body').on('click', 'not a function')
		}).toThrow();
		expect(function(){
			sdf.$('body').on('click', 123)
		}).toThrow();
		expect(function(){
			sdf.$('body').on('click', [1,2,3])
		}).toThrow();
	});

	it("should return only 3 element", function(){
		expect(sdf.$('div', 3).length).toEqual(3);
	});

	it("should return 0 elements with id #id_doesnt_exist", function(){
		expect(sdf.$('#id_doesnt_exist').length).toEqual(0);
	});

	it("body of the page should be #eee and only 1 element returned", function(){
		expect((sdf.$('body').css({backgroundColor: '#eee'})).length).toEqual(1);
	});

	it("should return the innerHTML of the body of the page", function(){
		expect(sdf.$('body',1).html()).toEqual(document.body.innerHTML);
	});

	it("should return the textContent of the body of the page", function(){
		expect(sdf.$('body',1).text()).toEqual(document.body.textContent);
	});
});
