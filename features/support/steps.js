const { Given, When, Then } = require("@cucumber/cucumber");

  Given('Bob opens Manabie website',
     { timeout: 60 * 2000 }, async function () {
        await this.openUrl('https://kyosk.app/');
         });

   When('Bob goes to Careers section', async function () {
      await this.page.click('text=Careers');
                 });

   Then('Bob sees all job openings at Manabie',{timeout: 60* 2000}, async function () {
      await this.page.click('text=Explore job openings');
      await this.page.waitForSelector('text=Open Positions');
           });


