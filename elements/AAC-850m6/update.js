function(instance, properties, context) {
    
    instance.canvas.css("padding", (properties.bubble.width*0.04) + "px");
    
	const icon = $('<i class="' + properties.icon + ' ' + properties.size + '" style="color: ' + properties.color + '; font-size: ' + ((properties.bubble.width-(properties.bubble.width*0.04*2))-((properties.bubble.width-(properties.bubble.width*0.04*2))*0.2)) + 'px"></i>');
    instance.canvas.append(icon);

}