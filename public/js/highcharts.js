
$(document).ready(function(){
  $.ajax({
    headers:
    {
        "Access-Control-Allow-origin":"http://localhost:3000",
        "Access-Control-Allow-Methods":"GET",
        "Access-Control-Allow-Credentials" : true
    },
    url:"https://pnhrkip395.execute-api.us-east-2.amazonaws.com/heart/heartrate",
    dataType: 'json',
    success: function(data) {
      console.log(data)
    },
    error: function() {
      alert("error");
    }
  });        
});
