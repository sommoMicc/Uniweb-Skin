$(document).ready(()=>{
  //Rimuovo l'inutile popup dell'informativa cookies
  $("div#cookies").remove();
  $(window).resize(function() {
    editInterface($(window).width());
  });
  editInterface($(window).width());
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

