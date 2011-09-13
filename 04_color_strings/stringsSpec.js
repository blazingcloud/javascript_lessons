describe("rgb", function() {

  describe("hex_to_num conversion helper", function() {
    it("converts A to 10", function() {
        expect(hex_to_num("A")).toEqual(10)
    })
    it("converts B to 11", function() {
        expect(hex_to_num("B")).toEqual(11)
    })
    it("converts C to 12", function() {
        expect(hex_to_num("C")).toEqual(12)
    })
    it("converts D to 13", function() {
        expect(hex_to_num("D")).toEqual(13)
    })
    it("converts E to 14", function() {
        expect(hex_to_num("E")).toEqual(14)
    })
    it("converts F to 15", function() {
        expect(hex_to_num("F")).toEqual(15)
    })

    it("converts f to 15", function() {
        expect(hex_to_num("f")).toEqual(15)
    })

    var generator = function(amount) {
            return function() {
                expect(hex_to_num(""+amount)).toEqual(amount)
            }
    }
    for(var i = 0, length = 10; i < length; i++) {
      it("converts '"+i+"' to " + i,generator(i))
    }
    
  })
	it("converts the black hex code", function() {
		expect(rgb("#000000")).toEqual([0, 0, 0]);		
	});
	it("converts the white hex code", function() {
		expect(rgb("#FFFFFF")).toEqual([255, 255, 255]);
	});
	it("ignores case", function() {
		expect(rgb("#ffffff")).toEqual([255, 255, 255]);
	});
	it("converts a trivial hex code", function() {
		expect(rgb("#010203")).toEqual([1, 2, 3]);
	});
	it("converts some arbitrary hex codes", function() {		
		expect(rgb("#123456")).toEqual([18, 52, 86]);
		expect(rgb("#CAFE18")).toEqual([202, 254, 24]);
		expect(rgb("#22BEEF")).toEqual([34, 190, 239]);
	});
});

describe("hex", function() {
	it("converts the black rgb code", function() {
		expect(hex([0,0,0])).toEqual("#000000");
	});
	it("converts the white rgb code", function() {
		expect(hex([255,255,255])).toEqual("#FFFFFF");
	});
	it("converts a trivial rgb code", function() {
		expect(hex([1,2,3])).toEqual("#010203");
	});
	it("converts an arbitrary rgb code", function() {
		expect(hex([202, 254, 24])).toEqual("#CAFE18");
	});
});

