Feature('login');

Scenario('Website Login', async ({ I }) => {

    await I.amOnPage('https://www.healthcare.gov/');

    await I.seeElement('//button[contains(text(), "Close subscription dialog")]');
    await I.click('//button[contains(text(), "Close subscription dialog")]');

    await I.seeElement('//a[contains(text(), "Log in")]');
    await I.click('//a[contains(text(), "Log in")]');

    await I.wait(3);


    await I.fillField('Username', 'test@yopmail.com');
    await I.fillField('Password', 'Tista123#');

    await I.saveScreenshot("base_image.png");
});

// npx codeceptjs run tests/login_test.js