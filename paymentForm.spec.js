const { browser } = require('protractor');

describe('Payment Form', function () {
  describe('Credit Card Payment', function () {
    it('should submit a payment successfully', async function () {
    await browser.get('https://staging.autobooks.co/pay/autobooks--ephrata-national-bank');
    // await expect(element(by.cssContainingText("*", "Make a contributon to Northeast Bank")).isPresent()).toBeTruthy("Payment header incorrect or not found")
      // TODO: implement your test here
      const luhn = require("../index.js");

      describe("luhn", function() {
      describe("#validate()", function() {
      it("should accept valid Visa test number", function() {
        assert.ok(luhn.validate("4012-8888-8888-1881"));
        });
      it("should accept valid MasterCard test number", function() {
        assert.ok(luhn.validate("5105-1051-0510-5100"));
        });
       it("should accept valid Amex test number", function() {
          assert.ok(luhn.validate("3714-496353-98431"));
        });
        it("should reject invalid numbers", function() {
            assert.equal(luhn.validate("1234-5678-9101-2131"), false);
        });
  });
});
    });
  });
  
  describe('ACH Payment', function () { 
    it('should submit a payment successfully', async function () {
        await browser.get('https://staging.autobooks.co/pay/autobooks--ephrata-national-bank');
          // TODO: implement your test here
    });
  });
});
