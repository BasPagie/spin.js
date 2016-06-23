function $(select){
	var self = {}; //Maakt variabele aan om te gebruiken
	self.select = select; 
	self.element = document.querySelector(self.select); 

	self.spin = function(argument) {
		var rotated = false; 

		self.element.onclick = function() { //na een klik van de gebruiker
		    var div = self.element,
		        deg = rotated ? 0 : 360; //definieerd de graden die gedraaid moeten worden

		    div.style.webkitTransform = 'rotate('+deg+'deg)'; //JS gegevens worden verwerkt in CSS3 code
		    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
		    div.style.msTransform     = 'rotate('+deg+'deg)'; 
		    div.style.oTransform      = 'rotate('+deg+'deg)'; 
		    div.style.transform       = 'rotate('+deg+'deg)'; 
		    div.style.webkitTransition = 'all 1s ease-in-out'; 
			div.style.mozTransition = 'all 1s ease-in-out';
			div.style.oTransition = 'all 1s ease-in-out';
			div.style.transition = 'all 1s ease-in-out';

		    rotated = !rotated; //reset de rotatie (volgende klik is de rotatie andersom)
		}	
	}
	return self;
}
