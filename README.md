Tabs
========

The tabs display a collection of panel. It shows only one tab panel at a time. 

How to use
----------

To get started, download the plugin, unzip it and copy files to your website/application directory.
Load files in the <head> section of your HTML document. Make sure you also add the jQuery library.

    <head>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery.jKtabs.js"></script>
        <link rel="stylesheet" href="js/jquery.jKtabs.css" type="text/css" media="screen" />
    </head>




Initialise the script like this:

    <script>
       $(function(){
			$('.tabWrap').jKtabs({
				activeCssClass: 'active',
				commonCssClass: 'productContent'
			});
		});
    </script>

May also be passed an optional options object which will extend the default values. Example:

    <script>
        $(function(){
			$('.tabWrap').jKtabs({
				activeCssClass: 'active',
				speed: 'slow',
				commonCssClass: 'productContent'
			});
		});
    </script>

You can pass these options as key/value object to jKtabs() method. It is also possible to modify defaults directly at jKtabs JS file or $.jKtabs.defaults


Available Options:
Speed: You can set fast, slow or any integer value. Default is 'fast'.
activeCssClass: Active tabs(li's) will have this classname. You can specify any classname such as 'current' or 'selected'. Default value is 'Active'.
commonCssClss: Specify the name of the Tabs Content. 


