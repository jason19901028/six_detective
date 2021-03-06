seajs.config({
		//设置路径
		base: '/ETL',
		//路径配置
		paths: {
				"js": "/assets/js",
				"css": "/assets/css",
				"plugins": "/assets/plugins",
				"pages": "/pages",
				"theme": "/applications",
				'assets': '/assets'
		},
		//设置别名，方便调用
		alias: {
				"": "js/kingdom",
				"kdata": "js/kingdom/kdata",

				"klogin": "js/kingdom/login",
				"kmain": "js/kingdom/main",

				"ajaxdata": "js/kingdom/ajaxdata",
				"api_name": "js/kingdom/api_name",
				"jquery-handlebars": "js/kingdom/jquery.handlebars",
				"handlebars-helper-common": "js/kingdom/handlebars.helper.common",
				"handlebars-helper": "js/kingodm/handlebars.helper",

				"jquery-plugin-list": "js/kingdom/jquery-plugin-list",

				"jquery": "plugins/jquery/jquery.min",
				"bootstrap": "plugins/bootstrap/js/bootstrap.min",
				"handlebars": "plugins/handlebars/handlebars",
				"echarts": "plugins/echarts/echarts",
				"base64": "plugins/base64/base64",
				"md5": "plugins/md5/md5",
				"json2": "plugins/json/json2",

				"app": "js/global/app",

				"cookie": "plugins/cookie/jquery.cookie",
				"blockui": "plugins/blockui/jquery.blockui.min",
				"toastr": "plugins/bootstrap-toastr/toastr.min",

				"hover": "plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min",
				"slimscroll": "plugins/jquery-slimscroll/jquery.slimscroll.min",

				"uniform": "plugins/uniform/jquery.uniform.min",
				"switch": "plugins/bootstrap-switch/js/bootstrap-switch.min",

				"bootbox": "plugins/bootbox/bootbox.min",
				"datatables": "plugins/datatables/datatables.min",

				"ckeditor": "plugins/ckeditor/ckeditor",
				"bootstrap-summernote": "plugins/bootstrap-summernote/summernote.min",
				"bootstrap-datepicker": "plugins/bootstrap-datepicker/js/bootstrap-datepicker.min",
				"bootstrap-datetimepicker": "plugins/bootstrap-datepicker/js/bootstrap-datetimepicker",
				"bootstrap-datepicker-zh-CN": "plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
				"bootstrap-timepicker": "plugins/bootstrap-timepicker/js/bootstrap-timepicker.min",
				"validate": "plugins/jquery-validation/js/jquery.validate",
				"validation-additional-methods": "plugins/jquery-validation/js/additional-methods",
				"backstretch": "plugins/backstretch/jquery.backstretch.min",
				"intro": "plugins/intro/intro.min",
				"calendar": "plugins/fullcalendar/fullcalendar",
				"moment": "plugins/fullcalendar/lib/moment.min"
		},
		preload: ["handlebars", 'bootstrap', 'bootstrap-datepicker', 'bootstrap-timepicker', 'bootstrap-datetimepicker', 'validate', 'calendar', "moment"]
});