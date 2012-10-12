jQuery.fn.jKtabs = function(options){

	var defaults = {
		//Defaults
		speed: 'fast',
		activeCssClass: 'active',
		commonCssClass: 'productContent'
	};
	
	//Options Constant
	var o = jQuery.extend(defaults, options);

	return this.each(function(){
		
		//Constants
		var e = jQuery(this);
		function cleanup(selector){
			var a = jQuery($(selector)).find('a');
			var b = a.text().replace(/\s{2,}/g, ' ').replace(/\s/g , "-");
			var c = a.attr('href', '#'+b).attr('href');
			return c;
		}
		
		e.find('li').each(function(i){
			var x = cleanup($(this));
			jQuery(jQuery('.'+o.commonCssClass)[i]).attr('id', x.slice(1));
			jQuery('.'+o.commonCssClass).hide();
			jQuery('.'+o.commonCssClass+':first').show();	
		});
		
		e.find('li').click(function(i){
				jQuery(this).siblings().removeClass(o.activeCssClass);
				jQuery(this).addClass(o.activeCssClass);
				$('.'+o.commonCssClass).hide(); //Hide all tab content
				var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
				$(activeTab).fadeIn(o.speed); //Fade in the active content
				return false;
		});
		
	});
	
	
};