 $(document).ready(function(){
	 
	       $("h2").hide();  //hides h2 when the document loads
	 
	 
	 
	 
    $("#button1").click(function(){
        $("#test").hide();
    });
	
	$("#button2").click(function(){
        $("#test2").hide();
    });
	
	$("#button3").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
		$("h2").show();
		 $("#div3").text("Hello world!");//typing text to div3
    });

	
	$("#button4").click(function(){
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").slideUp();
		 
    });
	
	$("#button5").click(function(){
        $("#div1").hide();
    });
  	  
	
	$("#button6").click(function(){
    $("div1, div2, div3, h2").addClass("blue");///adding blue class to h1
    $("#test,tes2").addClass("important");///adding important css class to div 1
}); 
      
	  $("#formButton").click(function(){
      var bla = $('#firstname').val();
 

}); 


       $("#button8").click(function(){
        $("ResultsDiv2").hide();
    });

	 
	
});