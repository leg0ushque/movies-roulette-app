// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the main page$/, async () => {
  await browser.url('http://localhost:3000/');
});

When(/^I click increment button$/, async () => {
  await $('button.incButton').click();
});

When(/^I click decrement button$/, async () => {
  await $('button.decButton').click();
});

Then(/^I should see Counter with value equal (.*)$/, async (value) => {
  await expect($('span.counterValue')).toBeExisting();
  await expect($('span.counterValue')).toHaveTextContaining(value);
});
