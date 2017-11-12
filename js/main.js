$(document).ready(function(){
  // alert("Alert")
  // alert($("#parag").text());

  var btn = $("#btnone")
  btn.on('click', function(){
    console.log("Yes In the button")
    if($("#in").val() !== ''){
      $("#parag").text($("#in").val())
    }
    $("#in").val('')
  })
})
