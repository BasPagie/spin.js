function $(select){
	var self = {};
	self.select = select;
	self.element = document.querySelector(self.select);

	self.spin = function(argument) {
		var rotated = false;

		self.element.onclick = function() {
		    var div = self.element,
		        deg = rotated ? 0 : 360;

		    div.style.webkitTransform = 'rotate('+deg+'deg)'; 
		    div.style.mozTransform    = 'rotate('+deg+'deg)'; 
		    div.style.msTransform     = 'rotate('+deg+'deg)'; 
		    div.style.oTransform      = 'rotate('+deg+'deg)'; 
		    div.style.transform       = 'rotate('+deg+'deg)'; 
		    div.style.webkitTransition = 'all 1s ease-in-out';
			div.style.mozTransition = 'all 1s ease-in-out';
			div.style.oTransition = 'all 1s ease-in-out';
			div.style.transition = 'all 1s ease-in-out';

		    rotated = !rotated;
		}	
	}
	return self;
}