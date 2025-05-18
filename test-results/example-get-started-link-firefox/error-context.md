# Test info

- Name: get started link
- Location: D:\PP_2\KRB2\12345 — копия — копия\rater\e2e\example.spec.ts:10:1

# Error details

```
Error: browserContext._wrapApiCall: Test ended.
Browser logs:

<launching> C:\Users\Р\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe -no-remote -headless -profile C:\Users\99ED~1\AppData\Local\Temp\playwright_firefoxdev_profile-XXXXXXWcA23y -juggler-pipe -silent
<launched> pid=59788
[pid=59788][err] *** You are running in headless mode.
[pid=59788][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 116: unreachable code after return statement
[pid=59788][out] console.warn: services.settings: Ignoring preference override of remote settings server
[pid=59788][out] console.warn: services.settings: Allow by setting MOZ_REMOTE_SETTINGS_DEVTOOLS=1 in the environment
[pid=59788][out] 
[pid=59788][out] Juggler listening to the pipe
[pid=59788][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt (t=9.38767) [GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt
[pid=59788][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
[pid=59788][out] console.error: SearchEngineSelector: "Received empty search configuration!"
[pid=59788][out] console.error: "Received empty top sites configuration!"
[pid=59788][out] console.error: SearchEngineSelector: "Received empty search configuration!"
[pid=59788][out] console.error: SearchService: "#init: failure initializing search:" ({})
[pid=59788][out] console.error: "Received empty top sites configuration!"
[pid=59788][err] JavaScript error: resource://gre/modules/SearchEngineSelector.sys.mjs, line 100: NS_ERROR_UNEXPECTED: Failed to get engine data from Remote Settings
[pid=59788][err] JavaScript error: resource://gre/modules/SearchEngineSelector.sys.mjs, line 100: NS_ERROR_UNEXPECTED: Failed to get engine data from Remote Settings
[pid=59788][err] JavaScript error: resource://gre/modules/SearchEngineSelector.sys.mjs, line 100: NS_ERROR_UNEXPECTED: Failed to get engine data from Remote Settings
[pid=59788][err] JavaScript error: resource://gre/modules/SearchEngineSelector.sys.mjs, line 100: NS_ERROR_UNEXPECTED: Failed to get engine data from Remote Settings
[pid=59788][out] console.error: WebExtensions: 
[pid=59788][out]   Message: [Exception... "Failed to get engine data from Remote Settings"  nsresult: "0x8000ffff (NS_ERROR_UNEXPECTED)"  location: "JS frame :: resource://gre/modules/SearchEngineSelector.sys.mjs :: getEngineConfiguration :: line 100"  data: no]
[pid=59788][out]   Stack:
[pid=59788][out]     getEngineConfiguration@resource://gre/modules/SearchEngineSelector.sys.mjs:100:24
[pid=59788][out] 
[pid=59788][out] console.error: ({})
[pid=59788][out] console.error: SearchSettings: "_write: Could not write to settings file:" (new Error("cannot write without any engine.", "resource://gre/modules/SearchSettings.sys.mjs", 280))
[pid=59788][out] console.error: URLBar - Provider.UrlbarProviderSearchTips: ({})
[pid=59788][err] Exiting due to channel error.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('has title', async ({ page }) => {
   4 |   await page.goto('https://playwright.dev/');
   5 |
   6 |   // Expect a title "to contain" a substring.
   7 |   await expect(page).toHaveTitle(/Playwright/);
   8 | });
   9 |
> 10 | test('get started link', async ({ page }) => {
     | ^ Error: browserContext._wrapApiCall: Test ended.
  11 |   await page.goto('https://playwright.dev/');
  12 |
  13 |   // Click the get started link.
  14 |   await page.getByRole('link', { name: 'Get started' }).click();
  15 |
  16 |   // Expects page to have a heading with the name of Installation.
  17 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  18 | });
  19 |
```