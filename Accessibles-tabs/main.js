const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabButtons.forEach((tab, index) => {
    if(index === 0){

    } else{
        tabPanels[index].setAttribute("hidden", "");
    }
})

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a");
    if(!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
})

function switchTab(newTab){
    const activePanelId = newTab.getAttribute("href");
    const activePanel = tabsContainer.querySelector(activePanelId);
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    });
    activePanel.removeAttribute("hidden");
}