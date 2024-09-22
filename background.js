chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "executeAction") {
      // Fechar todas as guias abertas
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          chrome.tabs.remove(tab.id);
        });
      });
  
      // Limpar o histórico dos últimos 15 minutos
      const fifteenMinutesAgo = (new Date()).getTime() - 15 * 60 * 1000;
      chrome.history.deleteRange({
        startTime: fifteenMinutesAgo,
        endTime: (new Date()).getTime()
      });
  
      // Abrir a URL configurada
      chrome.storage.sync.get("userUrl", function (data) {
        if (data.userUrl) {
          chrome.tabs.create({ url: data.userUrl });
        } else {
          alert("Nenhuma URL configurada.");
        }
      });
    }
  });
  