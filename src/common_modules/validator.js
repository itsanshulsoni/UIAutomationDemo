/**
 * @name validator
 *
 * @desc Validator for all common reusable validator methods
 *
 * @author ansoni (Anshul Soni)
 */
import puppeteerExpect from 'expect-puppeteer';

module.exports = {

  /**
      This method validates: 
      1# Text  element is displayed and 
      2# Text is not empty and 
      3# Expected substring matches with actual string displayed
      @param : page instance
      @param : locator instance
      @param : Expected String
    */
  validateTextContains: async (page, locator, substring) => {
    // wait for element to be displayed
    await page.waitForSelector(locator);

    // get text from element
    const element = await page.$(locator);
    const titleText = await page.evaluate(el => el.textContent, element);

    // Validate Text is not empty [To make sure UI doesn't show blank module]
    console.log("Text is:" + titleText);
    expect(titleText.length).not.toBe(0);
    expect(titleText).toContain(substring);
    return this;
  },

};
