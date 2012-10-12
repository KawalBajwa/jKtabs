jQuery.fn.jKtabs = function(options){

	var defaults = {
		//Defaults
		speed: 'fast',
		activeCssClass: 'active',
		navigation: '#tabWrap',
		commonCssClass: 'productContent'
	};
	
	//Options Constant
	var o = jQuery.extend(defaults, options);

	return this.each(function(){
		//Constants
		var e = jQuery(this);
		
		
		//On Click Event
		if(e.is('li')){
			var x = jQuery(this).find('a');
			var y = x.text().replace(/\s{2,}/g, ' ').replace(/\s/g, "-");
			var z = x.attr('href', '#'+y).attr('href');
			
			e.click(function(i){
				jQuery(this).siblings().removeClass(o.activeCssClass);
				jQuery(this).addClass(o.activeCssClass);	
			});
		}else if(!(o.navigation == undefined)){
			$(o.navigation).find('li').each(function(i){
				var a = jQuery(this).find('a');
				var b = a.text().replace(/\s{2,}/g, ' ').replace(/\s/g, "-");
				var c = a.attr('href', '#'+b).attr('href');
				var d = jQuery(jQuery('.'+o.commonCssClass)[i]).attr('id', c.slice(1));
				jQuery('.'+o.commonCssClass).hide(); //Hide all content
				jQuery(jQuery(o.navigation).find('li:first')).addClass("active").show(); //Activate first tab
				jQuery('.'+o.commonCssClass+':first').show(); //Show first tab content
			
				$(o.navigation).find('li').click(function(i){
					jQuery(this).siblings().removeClass(o.activeCssClass);
					jQuery(this).addClass(o.activeCssClass);
					$('.'+o.commonCssClass).hide(); //Hide all tab content
					var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
					$(activeTab).fadeIn(); //Fade in the active content
					return false;
				});
			});
		}
	});
};