export default defineBackground(() => {
  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && !tab.url.startsWith('browser://') && !tab.url.startsWith('about:')) {
      browser.runtime.sendMessage({ type: 'PAGE_VISIT', url: tab.url });
    }
  });

  browser.tabs.onActivated.addListener(({ tabId }) => {
    browser.tabs.get(tabId, (tab) => {
      if (tab.url && !tab.url.startsWith('browser://') && !tab.url.startsWith('about:')) {
        browser.runtime.sendMessage({ type: 'PAGE_VISIT', url: tab.url });
      }
    });
  });
});
