$(document).ready(function() {
  $("meterform").submit(function(event){
    var q1 = parseInt($("input:radio[name=environment]:checked").val());
    var q2 = parseInt($("input:radio[name=taxes]:checked").val());
    var q3 = parseInt($("input:radio[name=guns]:checked").val());

    var result = q1 + q2 + q3;

    if(result <=5 && result ===0){
    alert("You are a right winger!");
  } else if(result >5 && result <25 && result ===0) {
    alert("You are a middle of the road")
  } else if(result >=25 && result ===30) {
    alert("You are a liberal!!")
    }

    event.preventDefault();
  });
});
