/**
 * @name util.js
 *
 * @desc Util for all common reusable module methods
 *
 * @author ansoni (Anshul Soni)
 */
import commonLocators from '../page_locators/signIn.locators';

module.exports = {
    /**
        This method helps to sign-in on mweb for a given user-id and password
        @param : page instance
        @param : userId
        @param : password
      */
    signIn: async (page, userId, password) => {

        await page.waitForSelector(commonLocators.signIn_userId_txt);
        await page.type(commonLocators.signIn_userId_txt, userId);

        await page.waitForSelector(commonLocators.signIn_password_txt);
        await page.type(commonLocators.signIn_password_txt, password);

        await page.waitForSelector(commonLocators.signIn_btn);
        await page.click(commonLocators.signIn_btn);

        return this;
    },

};
