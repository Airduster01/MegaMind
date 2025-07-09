describe('MM Console Store Audit Facility Survey Yes and No Answers', () => {
    it("will navigate the MM Console Facility Survey Yes and No Answers", async () => {

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

    //Facility Survey
    const allElements = await $$('aria/Start');
    const secondElement = allElements[1];
    await secondElement.click();

    //Survey Start All "Yes then No" Answers HVAC
    await $('#q_hvac_office_answer > label:nth-child(1) > span:nth-child(2)').waitForClickable();
    await $('#q_hvac_office_answer > label:nth-child(1) > span:nth-child(2)').click();
    await $('#q_hvac_office_maintenance_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_hvac_office_maintenance_explanation').setValue('Testing Required explanation...');
    await $('#q_hvac_facility_answer > label:nth-child(1) > span:nth-child(2)').click();
    await $('#q_hvac_facility_maintenance_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_hvac_facility_maintenance_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Elevators "Yes then No"
    await $('#q_elevators_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_elevators_maintenance_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_elevators_maintenance_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Lighting "Yes then No"
    await $('#q_lighting_functional_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_lighting_signage_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_lighting_signage_working_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_lighting_signage_working_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Survey Unrentable Units "Yes then No"
    await $('#q_unrentable_units_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_unrentable_plan_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_unrentable_plan_text').setValue('Testing Enter details here...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Capex/R&M "Yes then No"
    await $('#q_capex_projects_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_capex_projects_details_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_capex_projects_details_text').setValue('Testing Enter details here...');
    await $('#q_rm_projects_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_rm_projects_details_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_rm_projects_details_text').setValue('Testing Enter details here...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Landscaping/Pest Control/Snow "Yes then No"
    await $('#q_landscaping_contract_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_landscaping_service_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_landscaping_service_explanation').setValue('Testing Required explanation...');

    await $('#q_landscaping_need_contract_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_pest_vendor_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_pest_vendor_service_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_pest_vendor_service_explanation').setValue('Testing Required explanation...');

    await $('#q_snow_vendor_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_snow_vendor_contract_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_snow_vendor_contract_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Living Quarters "Yes then No"
    await $('#q_living_quarter_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_living_quarter_issues_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_living_quarter_issues_text').setValue('Testing Enter details here...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Gate / Fence / Access Control "Yes then No"
    await $('#q_has_gate_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_gate_operational_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_gate_operational_explanation').setValue('Testing Required explanation...');

    await $('#q_has_fence_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_fence_condition_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_fence_condition_explanation').setValue('Testing Required explanation...');

    await $('#q_has_access_control_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_access_control_system_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_access_control_system_explanation').setValue('Testing Required explanation...');
    await browser.pause(500);
    await $('aria/Next').click();

    //Claims "Yes then No"
    await $('#q_open_claims_answer > label:nth-child(1) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_claim_paperwork_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    await $('#q_claim_paperwork_text').setValue('Testing Enter details here...');
    await browser.pause(500);
    await $('aria/Finish').click();
   

});
});