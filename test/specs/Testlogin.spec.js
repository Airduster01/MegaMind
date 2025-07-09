describe('MM Console Facility Survey "No', () => {
    it("will navigate the MM Console Facility Survey with No Answers", async () => {

        await browser.url('https://app.nsamm.com');
      
     //Log In


    //Select Facility
    await $('#root > div > header > ul > li:nth-child(3) > span > a').waitForClickable();
    await $('#root > div > header > ul > li:nth-child(3) > span > a').click();
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > input').waitForClickable();
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > input').click();
    
    //Search for test facility
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > input').setValue('Test');
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > span > button > span > span > svg').click();
    
    //Select test facility
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(2) > div > div > div > div > div > div > div > table > tbody > tr.ant-table-row.ant-table-row-level-0 > td:nth-child(2)').waitForClickable();
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(2) > div > div > div > div > div > div > div > table > tbody > tr.ant-table-row.ant-table-row-level-0 > td:nth-child(2)').click();

    //Select AM Audit
    await $('aria/AM Store Audit').waitForClickable();
    await $('aria/AM Store Audit').click();



   

});
});