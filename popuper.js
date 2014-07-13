(function(){
window.popuper = {
init: function(id, shift, scroll, noclose){
	    var self = this;
	    $('.popuper').off().click(function(e){
		   e.preventDefault();
		   self.open($(this).data('target'));
	    });
	    $('.popup-closer').off().click(function(e){
		   e.preventDefault();
		   self.close();
	    });
	    if(id) self.open(id, shift, scroll, noclose);
},
close: function(){
		$('.popup-layout').fadeOut(100, function(){ $(this).remove(); });
		$('.popup').fadeOut(100);
        this.opened = false;
},
open: function(id, shift, scroll, noclose){
	    var self = this,
        el = $('#' + id);
        if(shift == undefined) shift = el.data('shift');
        if(noclose == undefined) noclose = el.data('noclose');
        if(scroll == undefined) scroll = el.data('scroll');
	    if(!(self.opened && noclose)){
            self.close();
	        $('<div class="popup-layout"></div>').click(function(){
			    self.close();
		    }).appendTo('body').fadeIn(100);
        } console.log(111, shift, scroll);
        if(shift != false) el.css('margin-top', Math.ceil(el.height()/2)*-1);
        if(!(self.opened && noclose)) el.fadeIn(100);
        if(scroll == true) $('html, body').animate({scrollTop: el.offset().top-100}, 300);
        self.opened = true;
},
opened: false,
version: 5
}
})();