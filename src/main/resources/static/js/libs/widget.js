$.loadingComp = function(option){
		var _init=function(){
			$("body").prepend('<div class="dialog_loading"><div class="loadingcon"></div></div>')
		};
		if(typeof(option)=='string'){
				if(option=="open"){
					_init();
					$(".dialog_loading").show();
				};
				if(option=="close"){
					$(".dialog_loading").remove();
				}
		};
}

$.fn.dialogtip = function(option){
    var defaultOption={
        className: 'tip-error',
        showOn: 'none',
        alignTo: 'target',
        hideTimeout:0,
        showTimeout:0,
        alignX: 'center',
        alignY: 'bottom',
        offsetX: 0,
        offsetY: 5
    }
    $.extend(defaultOption,option);
    $(this).poshytip(defaultOption);
}

$.extend({
    messageBox : function(options) {
        var dfop={
            message: false,
            level: "success",
            speed: 500,
            life:3000
        };
        $.extend(dfop, options);
        if(options=='close'){
            $("#jGrowl").removeAttr("style").empty();
            return false;
        }
        if(!$("#jGrowl")[0]){
            $("body").append("<div id='jGrowl'></div>")
        }else{
            $("#jGrowl").removeAttr("style").empty();
        }
        if(typeof(dfop.message) == 'object') {
            dfop.level = dfop.message.expLevel ? dfop.message.expLevel : dfop.level;
            dfop.message = dfop.message.message ? dfop.message.message : dfop.message;
        } else if (typeof(dfop.message) == 'string' && dfop.message.indexOf('"message"')>0 && dfop.message.indexOf('"expLevel"')>0) {
            var jsondata = eval('('+dfop.message+')');
            dfop.level = jsondata.expLevel ? jsondata.expLevel : dfop.level;
            dfop.message = jsondata.message ? jsondata.message : dfop.message;
        } else {
            dfop.level = dfop.expLevel ? dfop.expLevel : dfop.level;
            dfop.message = dfop.message ? dfop.message : dfop.message;
        }
        dfop.message='<div class="'+dfop.level+'"><span></span>'+dfop.message+'</div>';
        $("#jGrowl").addClass("jGrowl").append(dfop.message).animate({top:0},dfop.speed);
        function hideMessageBox(){
            clearTimeout(window._messageBox);
            window._messageBox=setTimeout(function(){
                $("#jGrowl").remove();
            },dfop.life);
        }
        hideMessageBox();
        $("#jGrowl").hover(function(){
            clearTimeout(window._messageBox);
        },function(){
            hideMessageBox();
        })
    },
    layout:function(option){
        function layoutFun(){
            var documentHeight =document.documentElement.clientHeight -$(".header").outerHeight(true)-$(".footer").outerHeight(true);
            var rightWidth     =document.documentElement.clientWidth-$(".aside:visible").outerWidth(true)-20;
            $("#sidebar,#appArea").height(documentHeight);
            //$(".manage-area-main").height( documentHeight-$('.manage-area-title').height() );
            if(window._currentGrid!=undefined && window._currentGrid.closest(".main")[0]) {
                window._currentGrid.setGridWidth(rightWidth-20)
                    .setGridHeight(documentHeight - $('.manage-area-title').outerHeight(true) - $('#operArea').outerHeight(true) - $('#setListPager').outerHeight(true) - $('.ui-jqgrid-view .ui-jqgrid-hdiv').outerHeight(true) - 4);
            }
        }
        layoutFun();
        $(window).resize(function(){
            clearTimeout(window._layoutTimer);
            window._layoutTimer=setTimeout(function(){
                layoutFun();
            },100);
        });
    }
});
//js????????????
$.cacheScript = function(obj) {
    var cache = (obj.cache === undefined) ? 'true' : obj.cache;
    $.ajax({type: 'GET', url: obj.url, success:obj.callback, dataType: 'script', ifModified: true, cache: cache});
};