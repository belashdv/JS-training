describe("Test suite", () => {
   
    it("First test", async () => {
        await browser.url("https://pastebin.com");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Pastebin.com - #1 paste tool since 2002!");
    });

    it ("Second test", async () => {
        await $("div>textarea").click();
        await $("div>textarea").setValue("Hello from WebDriver"); 
        //await $("#select2-postform-expiration-container").click();
        //await $(`div[class="col-sm-9 field-wrapper"]>#postform-expiration`).selectByVisibleText('10 Minutes');
        //await $("#select2-postform-expiration-container").getValue();
        await $("#postform-name").click();
        await $("#postform-name").setValue("helloweb"); 
        const postformNameValue = await $(`//input[@id='postform-name']`).getValue();
        expect(postformNameValue).toEqual('helloweb');
        await $("//button[text()='Create New Paste']").click();
        
        const url = await browser.getUrl();
        console.log(url);
    });

})