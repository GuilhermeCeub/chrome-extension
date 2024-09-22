document.getElementById("save-url").addEventListener("click", function () {
    const userUrl = document.getElementById("user-url").value;
    chrome.storage.sync.set({ userUrl }, function () {
      alert("URL salva com sucesso!");
    });
  });
  
  document.getElementById("execute").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "executeAction" });
  });
  