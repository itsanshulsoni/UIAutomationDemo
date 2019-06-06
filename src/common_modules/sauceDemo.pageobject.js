/**
 * @name sauceDemo_page_object
 *
 * @desc sauceDemo page object methods
 *
 * @author ansoni (Anshul Soni)
 */

// Read environment details from config 
const envPool = global.envContext.pool;

module.exports = {

    /**
        Load sauceDemo Page
        @param : page instance
        @param : site
      */
    load: async (page, site) => {

        await page.setViewport({
            width: 1440,
            height: 900
        });

        // Read host
        const urlHost = `https://${envPool[site]}`;
        console.log({ urlHost });

        // Load Page url
        await page.goto(urlHost);

        return this;
    }
};
