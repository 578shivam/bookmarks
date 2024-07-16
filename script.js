
/* tabs create */
const all_tab_id = ["brt0-tab", "brt1-tab", "brt2-tab"];
const all_tab_content_id = ["brt0", "brt1", "brt2"];
function switchTab(tabId, contentId) {
    all_tab_id.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    all_tab_content_id.forEach(id => {
        document.getElementById(id).classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.getElementById(contentId).classList.add('active');
}
all_tab_id.forEach((tabId, index) => {
    document.getElementById(tabId).addEventListener('click', () => {
        switchTab(tabId, all_tab_content_id[index]);
    });
});
switchTab(all_tab_id[0], all_tab_content_id[0]);  

const questionElements = document.querySelectorAll(".question");

questionElements.forEach((questionElement) => {
  questionElement.addEventListener("click", function() {
    questionElement.classList.toggle("actives");
    const paragraph = questionElement.querySelector("p");
    if (paragraph) {
      paragraph.classList.toggle("actives");
    }
  });
});

/* this id s menu and close and css active item menu and close icon */

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('closeicon');
  const menu = document.querySelector('.item1 ul');

  menuIcon.addEventListener('click', function() {
    menu.classList.add('activese');
  });

  closeIcon.addEventListener('click', function() {
    menu.classList.remove('activese');
  });
});


