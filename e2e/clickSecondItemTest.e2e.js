describe('Tab View', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should click on second tab and on second item', async () => {
        await element(by.text('SECOND')).tap();
        await expect(by.text('Item 2')).toBeVisible();
    });
});
