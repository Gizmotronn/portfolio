(function() {
	tinymce.create('tinymce.plugins.gbFrameworkShortcodes', {
		init : function(ed, url) {
			ed.addButton('gb_framework_shortcodes', {
				title : 'Insert Shortcode',
				image : url + '/img/add.png',
				onclick : function() {
					tb_show('Shortcodes Manager', url + '/tinymce.php?&width=670&height=600');
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "Alexio Shortcodes",
				author : 'gbthemes',
				authorurl : 'http://themeforest.net/user/gbthemes',
				infourl : 'http://wiki.moxiecode.com/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('gb_framework_shortcodes', tinymce.plugins.gbFrameworkShortcodes);
})();