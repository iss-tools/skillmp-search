console.log('background is running')
chrome.action.onClicked.addListener((tab) => {
  console.log('tab--', tab)
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      toggleSkillMpSearch()
    },
  })
})
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  }
})
