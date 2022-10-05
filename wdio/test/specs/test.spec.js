describe("Test suite", () => {

    it("First test", async () => {
        await browser.url("https://pastebin.com");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    });

    it ("Second test", async () => {
        await $("div.form-group").click();
        await $("div.form-group").setValue("Hello from WebDriver"); 
    });

})