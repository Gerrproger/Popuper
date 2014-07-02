(function(){
window.popuper = {
init: function(id, shift){
	    var self = this;
	    $('.popuper').off().click(function(e){
		   e.preventDefault();
		   self.open($(this).data('target'));
	    });
	    $('.popup-closer').off().click(function(e){
		   e.preventDefault();
		   self.close();
	    });
	    if(id) self.open(id, shift);
},
close: function(){
		$('.popup-layout').fadeOut(100, function(){ $(this).remove(); });
		$('.popup').fadeOut(100);
},
open: function(id, shift){
	    var self = this;
	    self.close();
	    $('<div class="popup-layout"></div>').click(function(){
			self.close();
		}).appendTo('body').fadeIn(100);
		var el = $('#' + id);
        if(shift == undefined) shift = el.data('shift');
        if(shift != false) el.css('margin-top', Math.ceil(el.height()/2)*-1);
        el.fadeIn(100);
},
version: 3
}
})();
