function(instance, context) {
   
	if($('#fontawesome5').size()==0) {
        if(!context.keys.kiturl){
            $('<script id="fontawesome5" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js"></script>').appendTo(document.body);}
        else {
            $('<script id="fontawesome5" src="' + context.keys.kiturl + '"></script>').appendTo(document.body);
        }
    }
}