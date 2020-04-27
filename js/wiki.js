$(document).ready(function(){
  $("#search").click(function(){
    const searchInput = $("#search-input").val();
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchInput +"&format=json&callback=?";

    $.getJSON(url, function(data) {
      $("#output").html("");
      for (var i = 0;i < data[1].length;i++){
         $("#output").append("<li><a target=blank href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
      $("#search-input").val("");
    });

  });

  $("#search-input").keypress(function(e){
    if (e.which==13) {
      $("#search").click();
    }
  });
});

