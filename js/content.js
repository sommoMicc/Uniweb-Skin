$(document).ready(()=>{
  //Carico il css delle icone material design
  $("head").append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');

  //Rimuovo l'inutile popup dell'informativa cookies
  $("div#cookies").remove();
  $(window).resize(function() {
    editInterface($(window).width());
  });
  editInterface($(window).width());

  addMaterialIcons();
  checkIfLoginPossible();
});

function editInterface(windowSize) {
  if(windowSize >= 870) {
    //Apro il menu di navigazione
    $("#main-navigation").addClass("is-open");
  }
  else {
    $("#main-navigation").removeClass("is-open")
  }
}

function addMaterialIcons() {
  $("div.alert-info").each(function() {
    $(this).prepend('<i class="material-icons">info</i>');
  })
}

function checkIfLoginPossible() {
  let menuElements = $(".masthead_usermenu_menu").find("a");
  let loginButtonFound = false;

  for(let i=0;i<menuElements.length && !loginButtonFound;i++) {
    let currentElement = $(menuElements[i]);
    if(currentElement.text().trim().toLowerCase() === "login") {
      loginButtonFound = true;
      location.href = currentElement.attr("href");
    }
  }
}