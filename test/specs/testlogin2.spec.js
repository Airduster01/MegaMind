
describe('MM Console Facility Survey "No', () => {
    it("will navigate the MM Console Facility Survey with No Answers", async () => {
        await browser.url('https://app.nsamm.com/');

        });
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

    //Facility Survey
    const allElements = await $$('aria/Start');
    const secondElement = allElements[1];
    await secondElement.click();

    //Survey Start All "No" Answers HVAC
    await $('#q_hvac_office_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_hvac_office_explanation').setValue('Testing Required explanation...');
    await $('#q_hvac_facility_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_hvac_facility_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Elevators "No"
    await $('#q_elevators_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_elevators_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Lighting "No"
    await $('#q_lighting_functional_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_lighting_functional_explanation').setValue('Testing Required explanation...');
    await $('#q_lighting_signage_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_lighting_signage_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Unrentable Units "NO"
    await $('#q_unrentable_units_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_unrentable_units_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Capex/R&M "No"
    await $('#q_capex_projects_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_capex_projects_explanation').setValue('Testing Required explanation...');
    await $('#q_rm_projects_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_rm_projects_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Landscaping/Pest Control/Snow "No"
    await $('#q_landscaping_contract_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_landscaping_contract_explanation').setValue('Testing Required explanation...');
    await $('#q_landscaping_need_contract_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_landscaping_need_contract_explanation').setValue('Testing Required explanation...');
    await $('#q_pest_vendor_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_pest_vendor_explanation').setValue('Testing Required explanation...');
    await $('#q_snow_vendor_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_snow_vendor_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Living Quarters "No"
    await $('#q_living_quarter_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_living_quarter_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Gate / Fence / Access Control "No"
    await $('#q_has_gate_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_has_gate_explanation').setValue('Testing Required explanation...');
    await $('#q_has_fence_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_has_fence_explanation').setValue('Testing Required explanation...');
    await $('#q_has_access_control_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_has_access_control_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Claims "No"
    await $('#q_open_claims_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_open_claims_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Finish').click();
   

});
});