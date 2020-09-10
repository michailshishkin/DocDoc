describe("Doctors > Doctors issuing page: Filter \"Schedule\" on issuing doctors", function() {
    this.timeout(5000);
    beforeEach(function (done) {
        browser.url('http://docdoc.ru');
        browser.call(done);
    });
it('проверяет заголовок', function () {
    assert(browser.getTitle(), 'Google');
});
  describe("Day Selection", function() {
    it("Given The site page \"/doctor\" is open", function() {

    });
    it("Then 10 doctor cards are displayed per page", function() {
    });
    it("Then The \"Schedule (filter)\" button is displayed", function() {
    });
    it("Then The title of the \"Schedule (filter)\" button contains the text \"Schedule for all days\"", function() {
      it("When Click on the button \"Schedule (filter)\"", function() {
      });
      it("Then The List of Values for Date Picker is displayed", function() {
      });
      it("Then The \"All days\" item is checked in the \"List of values for date picker\"", function() {
      });
      it("When Click on the \"Tomorrow\" item in the \"List of values for date picker\"", function() {
      });
      it("Then The title of the \"Schedule (filter)\" button contains the text \"Schedule for tomorrow\"", function() {
        it("Then 10 doctor cards are displayed per page", function() {
        });
        it("Then The doctors working on the selected day are displayed", function() {
        });
      });
    });
  });
});