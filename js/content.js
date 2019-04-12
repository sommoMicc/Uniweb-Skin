$(document).ready(()=>{
  //Apro il menu
  $("#main-navigation").addClass("is-open");
  //Rimuovo l'inutile popup dell'informativa cookies
  $("div#cookies").remove();
  /*
  $("ul.notOpened").each((ul)=>{
    $(ul).removeClass("notOpened");
    $(ul).addClass("is-open");
  });*/
});