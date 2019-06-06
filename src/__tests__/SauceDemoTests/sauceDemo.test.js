/**
 * @name: Sauce Demo Test
 * 
 * @description: Sauce Demo Test Suite
 * 
 * @author: ansoni (Anshul Soni)
 */

import inventoryLocators from '../../page_locators/inventory.locators';
import cartLocators from '../../page_locators/cart.locators';
import sauceDemoPage from '../../common_modules/sauceDemo.pageobject';
import constants from '../../common_modules/constants';
import util from '../../common_modules/util';
import validator from '../../common_modules/validator';


describe(
  '/ (Sauce Demo Test Suite)',
  () => {

    let page;

    // Setup method to open new browser tab
    beforeEach(async () => {
      page = await global.__BROWSER__.newPage();
    });

    // Tear-down method
    afterEach(async () => {
      try {
        page.close();
      } catch (e) {
        console.log(e);
      }
    });


    /**
     *  Validate Cart page items for SauceDemo. 
    */
    test('Validating sauceDemo Cart page', async () => {

      const navigationPromise = page.waitForNavigation();

      await sauceDemoPage.load(page, 'US');
      await navigationPromise;

      // SignIn with user/pwd
      await util.signIn(page, constants.TEST_USER, constants.TEST_USER_PWD);
      await navigationPromise;

      // Adding items to the cart.
      await page.waitForSelector(inventoryLocators.item_onesie_add_btn);
      await page.click(inventoryLocators.item_onesie_add_btn);

      await page.waitForSelector(inventoryLocators.item_bikeLight_add_btn);
      await page.click(inventoryLocators.item_bikeLight_add_btn);

      // Verify the cart badge icon count is two.
      await page.waitForSelector(inventoryLocators.shoppingCart_badgeCount_icon);
      await validator.validateTextContains(page, inventoryLocators.shoppingCart_badgeCount_icon, "2");

      // Navigating to cart page.
      await page.waitForSelector(inventoryLocators.shoppingcart_btn);
      await page.click(inventoryLocators.shoppingcart_btn);

      // Verify the two items has been added
      await page.waitForSelector(cartLocators.item_onesie_txt);
      await validator.validateTextContains(page, cartLocators.item_onesie_txt, "Sauce Labs Onesie");

      await page.waitForSelector(cartLocators.item_bikeLight_txt);
      await validator.validateTextContains(page, cartLocators.item_bikeLight_txt, "Sauce Labs Bike Light");

      await navigationPromise;

    }, 9000);

  }, 9000
);