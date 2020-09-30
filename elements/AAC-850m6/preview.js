function(instance, properties) {
    
    instance.canvas.css("padding", (properties.bubble.width*0.4) + "px");
    
    let box = $('<div>' + properties.icon + '</div>');
    box.css('background-color', properties.color);
    box.css('border-radius', '5px');
    box.css('padding', '2px');
    box.css('height', ((properties.bubble.width-(properties.bubble.width*0.04*2))-((properties.bubble.width-(properties.bubble.width*0.04*2))*0.2));
    box.css('width', ((properties.bubble.width-(properties.bubble.width*0.04*2))-((properties.bubble.width-(properties.bubble.width*0.04*2))*0.2));
    instance.canvas.append(box);
    
}