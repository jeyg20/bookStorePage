$(document).ready(function(){

    $(".source li").draggable({
        helper:"clone"
    });
    $("#cart").droppable({
        accept: ".source > li",

        drop:function(event,ui){
            var droppedItem = $(ui.draggable).clone();
            $(this).append(droppedItem)
        }
    });

    $("#membershipSubmit").click(function(){
        $(".joinMembership").addClass("important joinMembershipActive");;
      });
    
});  