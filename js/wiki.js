//Run some jQuery
$(document).ready(function(){
  //When search is clicked run code
  $("#search").click(function(){
    //Get search input
    var searchTerm = $("#searchTerm").val();
    //URL with search input
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

    $.getJSON(url, function(data) {
      //Get heading console.log(data[1][0]);
      //Get description console.log(data[2][0]);
      //Get link console.log(data[3][0]);

      //Clears the output list
      $("#output").html("");
      for (var i = 0;i < data[1].length;i++){
         $("#output").append("<li><a target=blank href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
      //Clears the search bar
      $("#searchTerm").val("");
    });

  });
  //When enter is pressed it will run the code inside the search button
  $("#searchTerm").keypress(function(e){
    if (e.which==13) {
      $("#search").click();
    }
  });
});
 
