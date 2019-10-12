const createProperties = {
  id:"JPEN",
  title: "Translate '%s' to English",
  contexts: ['selection']
}

chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create(createProperties)
})

chrome.contextMenus.onClicked.addListener(function(info){
  const selectionText = info.selectionText.toLowerCase()
  const url = `https://translate.google.com/#view=home&op=translate&sl=ja&tl=en&text=${selectionText}`
  chrome.windows.create({ 
    url,
    type: 'popup',
    height: 500
  })
})