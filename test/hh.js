


(function(){
function Deleteitem(){
//$(this).parent().remove();
this.parentNode.remove();
}

$(document).ready(function(){
    $("button").click(Deleteitem);
})
}
)();