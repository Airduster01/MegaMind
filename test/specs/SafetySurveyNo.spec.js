describe('MM Console Store Audit Safety Survey Yes Answers', () => {
    it("will navigate the MM Console Safety Survey Yes Answers", async () => {

        await browser.url('https://app.nsamm.com');
      
     //Log In
     await $('aria/someone@example.com').setValue("jpatten@nsareit.net");
     await $('#idSIButton9').click()
     await $('aria/Password').setValue("Jesus1ye$456");
     await $('#idSIButton9').click();
     await browser.pause(5000); //Time to Authenticate

     await $('aria/LOG IN WITH MICROSOFT ACCOUNT').waitForClickable();
     await $('aria/LOG IN WITH MICROSOFT ACCOUNT').click();

    //Select Facility
    await $('#root > div > header > ul > li:nth-child(3) > span > a').waitForClickable();
    await $('#root > div > header > ul > li:nth-child(3) > span > a').click();
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > input').waitForClickable();
    await $('#root > div > div > div > main > div > main > div > div > div:nth-child(1) > div > span > span > input').click();
    
    //Select test facility
    await $('aria/Test Setting Facility (Test)').click();

    //Select AM Audit
    await $('aria/AM Store Audit').waitForClickable();
    await $('aria/AM Store Audit').click();

    //Facility Survey
    await browser.pause(500);
    const allElements = await $$('aria/Start');
    const secondElement = allElements[2];
    await secondElement.click();

    //Does this site have security cameras?
    await $('#q_q1_security_cameras_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    //Explanation    
    await $('#q_q1_security_cameras_explanation').setValue('Testing Explanation Area...');

    //Camera view: Does the monitor show all working cameras?
    await $('#q_q2_camera_monitor_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
    //Explanation
    await $('#q_q2_camera_monitor_explanation').setValue('Testing Explanation Area...');

    //If the site has NO cameras, has a JIRA ticket been submitted?
    await $('#q_q3_no_camera_jira_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        await browser.pause(500);
    await $('aria/Next').click();

    //Safety Tools & Equipment

    //Does this site have their PPE bucket?
    await $('#q_q4_ppe_bucket_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        //Explain
        await $('#q_q4_ppe_bucket_explanation').setValue('Testing Explanation Area...');
    //Are there sufficient supplies per the PPE Checklist?
    await $('#q_q5_ppe_supplies_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        //Explain
        await $('#q_q5_ppe_supplies_explanation').setValue('Testing Explanation Area...');
    //Does this site have a stocked First Aid kit ready for use?
    await $('#q_q6_first_aid_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q6_first_aid_explanation').setValue('Testing Explanation Area...');
    //Is all safety training up to date? (Verify Employee Training Record
    await $('#q_q7_training_up_to_date_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q7_training_up_to_date_explanation').setValue('Testing Explanation Area...');
    //Does the store have wet‑floor signs?
    await $('#q_q8_wet_floor_signs_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q8_wet_floor_signs_explanation').setValue('Testing Explanation Area...');
    //Are hazard areas properly marked?
    await $('#q_q9_hazard_areas_marked_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q9_hazard_areas_marked_explanation').setValue('Testing Explanation Area...');
    //Do Grinders have proper guards on them?
    await $('#q_q10_grinder_guards_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q10_grinder_guards_explanation').setValue('Testing Explanation Area...');
    //Lock cuts: proper PPE + best practices followed?
    await $('#q_q11_lock_cuts_ppe_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q11_lock_cuts_ppe_explanation').setValue('Testing Explanation Area...');

    //Is the golf-cart customer-ready and maintained per company policy?
    await $('#q_q12_golf_cart_ready_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q12_golf_cart_ready_explanation').setValue('Testing Explanation Area...');

    await $('aria/Next').click();

    //Fire System

    //Are the fire extinguishers up to date with their service? (Verify monthly inspection and spot‑check 5 with PM)
    await $('#q_q13_extinguishers_service_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
         //Explain
         await $('#q_q13_extinguishers_service_explanation').setValue('Testing Explanation Area...');
    //Does the site have a fire-suppression system?
    await $('#q_q14_fire_suppression_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
             //Explain
             await $('#q_q14_fire_suppression_explanation').setValue('Testing Explanation Area...');
    await $('aria/Next').click();

    //Doors
   
    //Are all ingress/egress doors (office, restroom, hallways) ADA‑compliant?
    await $('#q_q15_ada_doors_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        //Explain
        await $('#q_q15_ada_doors_explanation').setValue('Testing Explanation Area...');
    //Do all doors close safely & slowly?
    await $('#q_q16_doors_close_safely_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        //Explain
         await $('#q_q16_doors_close_safely_explanation').setValue('Testing Explanation Area...');
    //Does the PM know and follow the proper technique for opening/closing storage‑unit roll‑up doors?
    await $('#q_q17_rollup_technique_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
        //Explain
        await $('#q_q17_rollup_technique_explanation').setValue('Testing Explanation Area...');
    await $('aria/Next').click();

    //Office Areas

    //Are all power cords in the office secured safely?
    await $('#q_q18_power_cords_safe_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
            //Explain
            await $('#q_q18_power_cords_safe_explanation').setValue('Testing Explanation Area...');
    //Are office electronics free from dust/obstructions and off the ground?
    await $('#q_q19_electronics_clear_answer > label:nth-child(2) > span.ant-radio.ant-wave-target > input').click();
            //Explain
            await $('#q_q19_electronics_clear_explanation').setValue('Testing Explanation Area...');
    await $('aria/Save').click();
    await $('aria/Finish').click();


});
});