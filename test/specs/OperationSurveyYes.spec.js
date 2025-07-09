
describe('MM Console Store Audit Operations Survey Yes Answers', () => {
    const path = require('path');
    it("will navigate the MM Console Operations Survey Yes Answers", async () => {
        const filePath1 = path.join(__dirname, 'Storage1.jpeg');
        const filePath2 = path.join(__dirname, 'Storage2.jpeg');
        const filePath3 = path.join(__dirname, 'Storage3.png');
        const remotePath1 = await browser.uploadFile(filePath1);
        const remotePath2 = await browser.uploadFile(filePath2);
        const remotePath3 = await browser.uploadFile(filePath3);
        
        await browser.url('https://app.nsamm.com');



     //Log In
     await $('aria/someone@example.com').setValue("jpatten@nsareit.net");
     await $('#idSIButton9').click()
     await $('aria/Password').setValue("Jesus1ye$456");
     await $('#idSIButton9').click();
     await browser.pause(5000); //Time to Authenticate

     await $('#root > div > div > div > main > div > div > button > span:nth-child(2)').waitForClickable();
     await $('#root > div > div > div > main > div > div > button > span:nth-child(2)').click();

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

    //Operations Survey
    const allElements = await $$('aria/Start');
    const firstElement = allElements[0];
    await firstElement.click();

    //Name of the PM or APM
    await $('aria/Next').waitForClickable();
    await $('#question_op_visit_pm_name_text').setValue('Testing Enter your response...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Allow Photo uploads on page 2
    await browser.execute(() => {
        document.querySelectorAll('input[type="file"]').forEach(el => el.style.display = 'block');
      });

    //Page 2 Property curb appeal presentable?
    await $('#question_q1_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q1_text').setValue('Testing Optional Comment section');
    await browser.pause(500);
    await $('#question_q1_photos').setValue(remotePath1);
    await browser.pause(500);
   
    //Parking Availability?
    await $('#question_q2_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q2_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q2_photos').setValue(remotePath2);
    await browser.pause(500);

    //Office and Restroom Clean?
    await $('#question_q3_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q3_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q3_photos').setValue(remotePath3);
    await browser.pause(500);
    //Team Member in Porper Attire?
    await $('#question_q4_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q4_text').setValue('Testing Optional Comment section...');
    //Office Posters & Signage Compliancy
    await $('#question_q5_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q5_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q5_photos').setValue(remotePath1);
    await browser.pause(500);
    //Does the MSN QR code work?  
    await $('#question_q5a_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q5a_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    await $('#question_q5a_photos').setValue(remotePath1);
    await browser.pause(500);
    //Does the Google Review QR code work?
    await $('#question_q5b_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q5b_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    await $('#question_q5b_photos').setValue(remotePath1);
    await browser.pause(500);
    await $('aria/Next').click();
   
    //Allow Photo uploads on page 3
    await browser.execute(() => {
        document.querySelectorAll('input[type="file"]').forEach(el => el.style.display = 'block');
      });

    //Office decor compliance
    await $('#question_q6_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q6_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q6_photos').setValue(remotePath2);
    await browser.pause(500);
    //Inspect company units for cleanliness, safety, and account accuracy in SSM
    await $('#question_q7_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q7_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q7_photos').setValue(remotePath3);
    await browser.pause(500);
    //Drive Aisles, Hallways, Elevator & Dumpster clean, free of trash, debris
    await $('#question_q8_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q8_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q8_photos').setValue(remotePath1);
    await browser.pause(500);
    //Inspect 5 vacant units with PM for cleanliness
    await $('#question_q9_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q9_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q9_photos').setValue(`${remotePath1}\n${remotePath2}\n${remotePath3}`);
    await browser.pause(500);

    await $('aria/Next').click();

    //Allow Photo uploads on page 4
    await browser.execute(() => {
        document.querySelectorAll('input[type="file"]').forEach(el => el.style.display = 'block');
      });

    //Deposit Verification
    await $('#question_q10_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q10_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q10_photos').setValue(remotePath2);
    await browser.pause(500);
    //Verify Google directions to property & Business information is accurate
    await $('#question_q11_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q11_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q11_photos').setValue(remotePath3);
    await browser.pause(500);
    //Conduct a merchandise count and ensure display is fully stocked
    await $('#question_q12_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q12_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q12_photos').setValue(remotePath1);
    await browser.pause(500);
    //New Move-In verification
    await $('#question_q13_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q13_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q13_photos').setValue(remotePath2);
    await browser.pause(500);
    //Move Out Verification
    await $('#question_q14_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q14_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q14_photos').setValue(remotePath3);
    await browser.pause(500);
    //Store phone # active/E911 functional (933)
    await $('#question_q15_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q15_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q15_photos').setValue(remotePath1);
    await browser.pause(500);
    //Verify PM weekly walk thru in The Vault
    await $('#question_q16_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q16_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    await $('#question_q16_photos').setValue(remotePath2);
    await browser.pause(500);
    //Spot check 5 rental opportunity prospects
    await $('#question_q17_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q17_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q17_photos').setValue(remotePath3);
    await browser.pause(500);
    //PBI/KPI Performance
    await $('#question_q18_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q18_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q18_photos').setValue(remotePath1);
    await browser.pause(500);
    //Check email signature for company standardization
    await $('#question_q19_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q19_text').setValue('Testing Optional Comment section...');
    await browser.pause(500);
    await $('#question_q19_photos').setValue(remotePath2);
    await browser.pause(500);
    //Review open Jira tickets for additional follow up
    await $('#question_q20_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#question_q20_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    await $('#question_q20_photos').setValue(remotePath3);
    await browser.pause(500);
    //Does the Location Quality of the Facility match the Location Quality score in MegaMind
    await $('#question_q21_answer > label:nth-child(1) > span.ant-radio.ant-wave-target').waitForClickable();
    await $('#question_q21_answer > label:nth-child(1) > span.ant-radio.ant-wave-target').click();
    await $('#question_q21_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    //Does the Building Quality of this facility match the Building Quality in Megamind?
    await $('#question_q22_answer > label:nth-child(1) > span.ant-radio.ant-wave-target').waitForClickable();
    await $('#question_q22_answer > label:nth-child(1) > span.ant-radio.ant-wave-target').click();
    await $('#question_q22_text').setValue('Testing Required Comment section...');
    await browser.pause(500);
    
    await $('aria/Finish').click();
    await browser.pause(3000);


});
})