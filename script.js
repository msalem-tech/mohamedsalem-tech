function openTab(tabId) {

  let tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

}

// زرار مش شغال
function comingSoon() {
  alert("🚧 قريب هيكون جاهز 😅🔥");
}
