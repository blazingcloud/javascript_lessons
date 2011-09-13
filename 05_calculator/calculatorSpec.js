describe("Calculator", function() {

  var calculator;

  describe("A simple register based calculator", function() {
    beforeEach(function() {
      calculator = new SimpleCalculator();
    });
    it("initially has 0", function() {
      expect(calculator.value()).toEqual(0);
    });

    it("can add a number", function() {
      calculator.add(2);
      expect(calculator.value()).toEqual(2);
    });

    it("can add two numbers", function() {
      calculator.add(2);
      calculator.add(3);
      expect(calculator.value()).toEqual(5);
    });

    it("can add many numbers", function() {
      calculator.add(2);
      calculator.add(3);
      calculator.add(4);
      expect(calculator.value()).toEqual(9);
    });

    it("can subtract a number", function() {
      calculator.subtract(2);
      expect(calculator.value()).toEqual(-2);
    });

    it("can add and subtract", function() {
      calculator.add(3);
      calculator.subtract(2);
      expect(calculator.value()).toEqual(1);
    });

  });


  // See http://en.wikipedia.org/wiki/Reverse_Polish_notation
  describe("using reverse polish notation", function() {
    beforeEach(function() {
      calculator = new RPNCalculator();
    });

    it("adds two numbers", function() {
      calculator.push(2);
      calculator.push(3);
      calculator.plus();
      expect(calculator.value()).toEqual(5);
    });

    it("adds three numbers", function() {
      calculator.push(2);
      calculator.push(3);
      calculator.push(4);
      calculator.plus();
      expect(calculator.value()).toEqual(7);
      calculator.plus();
      expect(calculator.value()).toEqual(9);
    });

    it("adds and subtracts", function() {
      calculator.push(2);
      calculator.push(3);
      calculator.push(4);
      calculator.minus();
      expect(calculator.value()).toEqual(-1);
      calculator.plus();
      expect(calculator.value()).toEqual(1);
    });

    it("multiplies and divides", function() {
      calculator.push(2);
      calculator.push(3);
      calculator.push(4);
      calculator.divide();
      expect(calculator.value()).toEqual(0.75);
      calculator.times();
      expect(calculator.value()).toEqual(1.5);
    });
    describe("with zero values",function() {
      it("fails informatively when there's not enough values stashed away", function() {
        expect(function() {
          calculator.plus();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.minus();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.times();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.divide();
        }).toThrow("calculator : expects 2 values");
      })
    })

    describe("with 1 value",function() {
      beforeEach(function() {
        calculator.push(1)
      })
      it("fails informatively when there's not enough values stashed away", function() {
        expect(function() {
          calculator.plus();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.minus();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.times();
        }).toThrow("calculator : expects 2 values");

        expect(function() {
          calculator.divide();
        }).toThrow("calculator : expects 2 values");
      })
    })
  });

});
