/* jQuery UI - v1.9.2 - 2013-07-04
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(a,d){var e=0,c=/^ui-id-\d+$/;a.ui=a.ui||{};if(a.ui.version){return}a.extend(a.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});a.fn.extend({_focus:a.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;setTimeout(function(){a(i).focus();if(h){h.call(i)}},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;if((a.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.css(this,"position"))&&(/(auto|scroll)/).test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?a(document):g},zIndex:function(j){if(j!==d){return this.css("zIndex",j)}if(this.length){var g=a(this[0]),h,i;while(g.length&&g[0]!==document){h=g.css("position");if(h==="absolute"||h==="relative"||h==="fixed"){i=parseInt(g.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i}}g=g.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++e)}})},removeUniqueId:function(){return this.each(function(){if(c.test(this.id)){a(this).removeAttr("id")}})}});function b(g,i){var j,k,h,l=g.nodeName.toLowerCase();if("area"===l){j=g.parentNode;k=j.name;if(!g.href||!k||j.nodeName.toLowerCase()!=="map"){return false}h=a("img[usemap=#"+k+"]")[0];return !!h&&f(h)}return(/input|select|textarea|button|object/.test(l)?!g.disabled:"a"===l?g.href||i:i)&&f(g)}function f(g){return a.expr.filters.visible(g)&&!a(g).parents().andSelf().filter(function(){return a.css(this,"visibility")==="hidden"}).length}a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(g){return function(h){return !!a.data(h,g)}}):function(g,h,j){return !!a.data(g,j[3])},focusable:function(g){return b(g,!isNaN(a.attr(g,"tabindex")))},tabbable:function(g){var i=a.attr(g,"tabindex"),h=isNaN(i);return(h||i>=0)&&b(g,!h)}});a(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));h.offsetHeight;a.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=h.offsetHeight===100;a.support.selectstart="onselectstart" in h;g.removeChild(h).style.display="none"});if(!a("<a>").outerWidth(1).jquery){a.each(["Width","Height"],function(g,h){var l=h==="Width"?["Left","Right"]:["Top","Bottom"],m=h.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function k(n,p,i,o){a.each(l,function(){p-=parseFloat(a.css(n,"padding"+this))||0;if(i){p-=parseFloat(a.css(n,"border"+this+"Width"))||0}if(o){p-=parseFloat(a.css(n,"margin"+this))||0}});return p}a.fn["inner"+h]=function(i){if(i===d){return j["inner"+h].call(this)}return this.each(function(){a(this).css(m,k(this,i)+"px")})};a.fn["outer"+h]=function(n,i){if(typeof n!=="number"){return j["outer"+h].call(this,n)}return this.each(function(){a(this).css(m,k(this,n,true,i)+"px")})}})}if(a("<a>").data("a-b","a").removeData("a-b").data("a-b")){a.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,a.camelCase(h))}else{return g.call(this)}}})(a.fn.removeData)}(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];a.ui.ie=g.length?true:false;a.ui.ie6=parseFloat(g[1],10)===6})();a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.extend(a.ui,{plugin:{add:function(h,j,l){var g,k=a.ui[h].prototype;for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(j,k,g){var h,l=j.plugins[k];if(!l||!j.element[0].parentNode||j.element[0].parentNode.nodeType===11){return}for(h=0;h<l.length;h++){if(j.options[l[h][0]]){l[h][1].apply(j.element,g)}}}},contains:a.contains,hasScroll:function(h,g){if(a(h).css("overflow")==="hidden"){return false}var j=(g&&g==="left")?"scrollLeft":"scrollTop",i=false;if(h[j]>0){return true}h[j]=1;i=(h[j]>0);h[j]=0;return i},isOverAxis:function(i,g,h){return(i>g)&&(i<(g+h))},isOver:function(l,k,i,h,g,j){return a.ui.isOverAxis(l,i,g)&&a.ui.isOverAxis(k,h,j)}})})(jQuery);(function(a,d){var e=0,c=Array.prototype.slice,b=a.cleanData;a.cleanData=function(h){for(var j=0,g;(g=h[j])!=null;j++){try{a(g).triggerHandler("remove")}catch(f){}}b(h)};a.widget=function(k,f,m){var j,i,h,g,l=k.split(".")[0];k=k.split(".")[1];j=l+"-"+k;if(!m){m=f;f=a.Widget}a.expr[":"][j.toLowerCase()]=function(n){return !!a.data(n,j)};a[l]=a[l]||{};i=a[l][k];h=a[l][k]=function(o,n){if(!this._createWidget){return new h(o,n)}if(arguments.length){this._createWidget(o,n)}};a.extend(h,i,{version:m.version,_proto:a.extend({},m),_childConstructors:[]});g=new f();g.options=a.widget.extend({},g.options);a.each(m,function(n,o){if(a.isFunction(o)){m[n]=(function(){var p=function(){return f.prototype[n].apply(this,arguments)},q=function(r){return f.prototype[n].apply(this,r)};return function(){var r=this._super,s=this._superApply,t;this._super=p;this._superApply=q;t=o.apply(this,arguments);this._super=r;this._superApply=s;return t}})()}});h.prototype=a.widget.extend(g,{widgetEventPrefix:i?g.widgetEventPrefix:k},m,{constructor:h,namespace:l,widgetName:k,widgetBaseClass:j,widgetFullName:j});if(i){a.each(i._childConstructors,function(p,n){var o=n.prototype;a.widget(o.namespace+"."+o.widgetName,h,n._proto)});delete i._childConstructors}else{f._childConstructors.push(h)}a.widget.bridge(k,h)};a.widget.extend=function(j){var f=c.call(arguments,1),g=0,h=f.length,i,k;for(;g<h;g++){for(i in f[g]){k=f[g][i];if(f[g].hasOwnProperty(i)&&k!==d){if(a.isPlainObject(k)){j[i]=a.isPlainObject(j[i])?a.widget.extend({},j[i],k):a.widget.extend({},k)}else{j[i]=k}}}}return j};a.widget.bridge=function(g,h){var f=h.prototype.widgetFullName||g;a.fn[g]=function(k){var j=typeof k==="string",i=c.call(arguments,1),l=this;k=!j&&i.length?a.widget.extend.apply(null,[k].concat(i)):k;if(j){this.each(function(){var n,m=a.data(this,f);if(!m){return a.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!a.isFunction(m[k])||k.charAt(0)==="_"){return a.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,i);if(n!==m&&n!==d){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=a.data(this,f);if(m){m.option(k||{})._init()}else{a.data(this,f,new h(k,this))}})}return l}};a.Widget=function(){};a.Widget._childConstructors=[];a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(g,f){f=a(f||this.defaultElement||this)[0];this.element=a(f);this.uuid=e++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=a.widget.extend({},this.options,this._getCreateOptions(),g);this.bindings=a();this.hoverable=a();this.focusable=a();if(f!==this){a.data(f,this.widgetName,this);a.data(f,this.widgetFullName,this);this._on(true,this.element,{remove:function(h){if(h.target===f){this.destroy()}}});this.document=a(f.style?f.ownerDocument:f.document||f);this.window=a(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(h,l){var j=h,k,f,g;if(arguments.length===0){return a.widget.extend({},this.options)}if(typeof h==="string"){j={};k=h.split(".");h=k.shift();if(k.length){f=j[h]=a.widget.extend({},this.options[h]);for(g=0;g<k.length-1;g++){f[k[g]]=f[k[g]]||{};f=f[k[g]]}h=k.pop();if(l===d){return f[h]===d?null:f[h]}f[h]=l}else{if(l===d){return this.options[h]===d?null:this.options[h]}j[h]=l}}this._setOptions(j);return this},_setOptions:function(g){var f;for(f in g){this._setOption(f,g[f])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(j,g,h){var f,i=this;if(typeof j!=="boolean"){h=g;g=j;j=false}if(!h){h=g;g=this.element;f=this.widget()}else{g=f=a(g);this.bindings=this.bindings.add(g)}a.each(h,function(k,m){function n(){if(!j&&(i.options.disabled===true||a(this).hasClass("ui-state-disabled"))){return}return(typeof m==="string"?i[m]:m).apply(i,arguments)}if(typeof m!=="string"){n.guid=m.guid=m.guid||n.guid||a.guid++}var o=k.match(/^(\w+)\s*(.*)$/),l=o[1]+i.eventNamespace,p=o[2];if(p){f.delegate(p,l,n)}else{g.bind(l,n)}})},_off:function(f,g){g=(g||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;f.unbind(g).undelegate(g)},_delay:function(g,f){function h(){return(typeof g==="string"?i[g]:g).apply(i,arguments)}var i=this;return setTimeout(h,f||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){a(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){a(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){a(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){a(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(k,h,g){var j,i,f=this.options[k];g=g||{};h=a.Event(h);h.type=(k===this.widgetEventPrefix?k:this.widgetEventPrefix+k).toLowerCase();h.target=this.element[0];i=h.originalEvent;if(i){for(j in i){if(!(j in h)){h[j]=i[j]}}}this.element.trigger(h,g);return !(a.isFunction(f)&&f.apply(this.element[0],[h].concat(g))===false||h.isDefaultPrevented())}};a.each({show:"fadeIn",hide:"fadeOut"},function(g,f){a.Widget.prototype["_"+g]=function(j,l,h){if(typeof l==="string"){l={effect:l}}var k,i=!l?g:l===true||typeof l==="number"?f:l.effect||f;l=l||{};if(typeof l==="number"){l={duration:l}}k=!a.isEmptyObject(l);l.complete=h;if(l.delay){j.delay(l.delay)}if(k&&a.effects&&(a.effects.effect[i]||a.uiBackCompat!==false&&a.effects[i])){j[g](l)}else{if(i!==g&&j[i]){j[i](l.duration,l.easing,h)}else{j.queue(function(m){a(this)[g]();if(h){h.call(j[0])}m()})}}}});if(a.uiBackCompat!==false){a.Widget.prototype._getCreateOptions=function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]}}})(jQuery);(function(a,c){var b=false;a(document).mouseup(function(d){b=false});a.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===a.data(e.target,d.widgetName+".preventClickEvent")){a.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(f){if(b){return}(this._mouseStarted&&this._mouseUp(f));this._mouseDownEvent=f;var g=this,d=(f.which===1),e=(typeof this.options.cancel==="string"&&f.target.nodeName?a(f.target).closest(this.options.cancel).length:false);if(!d||e||!this._mouseCapture(f)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);if(!this._mouseStarted){f.preventDefault();return true}}if(true===a.data(f.target,this.widgetName+".preventClickEvent")){a.removeData(f.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(h){return g._mouseMove(h)};this._mouseUpDelegate=function(h){return g._mouseUp(h)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);f.preventDefault();b=true;return true},_mouseMove:function(d){if(a.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted},_mouseUp:function(d){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(d.target===this._mouseDownEvent.target){a.data(d.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)},_mouseDelayMet:function(d){return this.mouseDelayMet},_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true}})})(jQuery);(function(a,n){a.ui=a.ui||{};var d,f=Math.max,c=Math.abs,j=Math.round,h=/left|center|right/,m=/top|center|bottom/,i=/[\+\-]\d+%?/,l=/^\w+/,k=/%$/,b=a.fn.position;function e(p,q,o){return[parseInt(p[0],10)*(k.test(p[0])?q/100:1),parseInt(p[1],10)*(k.test(p[1])?o/100:1)]}function g(o,p){return parseInt(a.css(o,p),10)||0}a.position={scrollbarWidth:function(){if(d!==n){return d}var q,r,o=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),p=o.children()[0];a("body").append(o);q=p.offsetWidth;o.css("overflow","scroll");r=p.offsetWidth;if(q===r){r=o[0].clientWidth}o.remove();return(d=q-r)},getScrollInfo:function(s){var q=s.isWindow?"":s.element.css("overflow-x"),r=s.isWindow?"":s.element.css("overflow-y"),o=q==="scroll"||(q==="auto"&&s.width<s.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&s.height<s.element[0].scrollHeight);return{width:o?a.position.scrollbarWidth():0,height:p?a.position.scrollbarWidth():0}},getWithinInfo:function(o){var q=a(o||window),p=a.isWindow(q[0]);return{element:q,isWindow:p,offset:q.offset()||{left:0,top:0},scrollLeft:q.scrollLeft(),scrollTop:q.scrollTop(),width:p?q.width():q.outerWidth(),height:p?q.height():q.outerHeight()}}};a.fn.position=function(s){if(!s||!s.of){return b.apply(this,arguments)}s=a.extend({},s);var o,y,w,x,p,u=a(s.of),z=a.position.getWithinInfo(s.within),t=a.position.getScrollInfo(z),v=u[0],q=(s.collision||"flip").split(" "),r={};if(v.nodeType===9){y=u.width();w=u.height();x={top:0,left:0}}else{if(a.isWindow(v)){y=u.width();w=u.height();x={top:u.scrollTop(),left:u.scrollLeft()}}else{if(v.preventDefault){s.at="left top";y=w=0;x={top:v.pageY,left:v.pageX}}else{y=u.outerWidth();w=u.outerHeight();x=u.offset()}}}p=a.extend({},x);a.each(["my","at"],function(){var B=(s[this]||"").split(" "),A,C;if(B.length===1){B=h.test(B[0])?B.concat(["center"]):m.test(B[0])?["center"].concat(B):["center","center"]}B[0]=h.test(B[0])?B[0]:"center";B[1]=m.test(B[1])?B[1]:"center";A=i.exec(B[0]);C=i.exec(B[1]);r[this]=[A?A[0]:0,C?C[0]:0];s[this]=[l.exec(B[0])[0],l.exec(B[1])[0]]});if(q.length===1){q[1]=q[0]}if(s.at[0]==="right"){p.left+=y}else{if(s.at[0]==="center"){p.left+=y/2}}if(s.at[1]==="bottom"){p.top+=w}else{if(s.at[1]==="center"){p.top+=w/2}}o=e(r.at,y,w);p.left+=o[0];p.top+=o[1];return this.each(function(){var B,K,D=a(this),F=D.outerWidth(),E=D.outerHeight(),G=g(this,"marginLeft"),H=g(this,"marginTop"),C=F+G+g(this,"marginRight")+t.width,A=E+H+g(this,"marginBottom")+t.height,J=a.extend({},p),I=e(r.my,D.outerWidth(),D.outerHeight());if(s.my[0]==="right"){J.left-=F}else{if(s.my[0]==="center"){J.left-=F/2}}if(s.my[1]==="bottom"){J.top-=E}else{if(s.my[1]==="center"){J.top-=E/2}}J.left+=I[0];J.top+=I[1];if(!a.support.offsetFractions){J.left=j(J.left);J.top=j(J.top)}B={marginLeft:G,marginTop:H};a.each(["left","top"],function(M,L){if(a.ui.position[q[M]]){a.ui.position[q[M]][L](J,{targetWidth:y,targetHeight:w,elemWidth:F,elemHeight:E,collisionPosition:B,collisionWidth:C,collisionHeight:A,offset:[o[0]+I[0],o[1]+I[1]],my:s.my,at:s.at,within:z,elem:D})}});if(a.fn.bgiframe){D.bgiframe()}if(s.using){K=function(O){var N=x.left-J.left,P=N+y-F,Q=x.top-J.top,L=Q+w-E,M={target:{element:u,left:x.left,top:x.top,width:y,height:w},element:{element:D,left:J.left,top:J.top,width:F,height:E},horizontal:P<0?"left":N>0?"right":"center",vertical:L<0?"top":Q>0?"bottom":"middle"};if(y<F&&c(N+P)<y){M.horizontal="center"}if(w<E&&c(Q+L)<w){M.vertical="middle"}if(f(c(N),c(P))>f(c(Q),c(L))){M.important="horizontal"}else{M.important="vertical"}s.using.call(this,O,M)}}D.offset(a.extend(J,{using:K}))})};a.ui.position={fit:{left:function(u,p){var v=p.within,w=v.isWindow?v.scrollLeft:v.offset.left,r=v.width,o=u.left-p.collisionPosition.marginLeft,s=w-o,t=o+p.collisionWidth-r-w,q;if(p.collisionWidth>r){if(s>0&&t<=0){q=u.left+s+p.collisionWidth-r-w;u.left+=s-q}else{if(t>0&&s<=0){u.left=w}else{if(s>t){u.left=w+r-p.collisionWidth}else{u.left=w}}}}else{if(s>0){u.left+=s}else{if(t>0){u.left-=t}else{u.left=f(u.left-o,u.left)}}}},top:function(u,p){var v=p.within,w=v.isWindow?v.scrollTop:v.offset.top,r=p.within.height,o=u.top-p.collisionPosition.marginTop,t=w-o,s=o+p.collisionHeight-r-w,q;if(p.collisionHeight>r){if(t>0&&s<=0){q=u.top+t+p.collisionHeight-r-w;u.top+=t-q}else{if(s>0&&t<=0){u.top=w}else{if(t>s){u.top=w+r-p.collisionHeight}else{u.top=w}}}}else{if(t>0){u.top+=t}else{if(s>0){u.top-=s}else{u.top=f(u.top-o,u.top)}}}}},flip:{left:function(z,q){var A=q.within,B=A.offset.left+A.scrollLeft,w=A.width,v=A.isWindow?A.scrollLeft:A.offset.left,p=z.left-q.collisionPosition.marginLeft,x=p-v,y=p+q.collisionWidth-w-v,r=q.my[0]==="left"?-q.elemWidth:q.my[0]==="right"?q.elemWidth:0,o=q.at[0]==="left"?q.targetWidth:q.at[0]==="right"?-q.targetWidth:0,u=-2*q.offset[0],t,s;if(x<0){t=z.left+r+o+u+q.collisionWidth-w-B;if(t<0||t<c(x)){z.left+=r+o+u}}else{if(y>0){s=z.left-q.collisionPosition.marginLeft+r+o+u-v;if(s>0||c(s)<y){z.left+=r+o+u}}}},top:function(z,q){var B=q.within,C=B.offset.top+B.scrollTop,w=B.height,v=B.isWindow?B.scrollTop:B.offset.top,p=z.top-q.collisionPosition.marginTop,y=p-v,x=p+q.collisionHeight-w-v,A=q.my[1]==="top",r=A?-q.elemHeight:q.my[1]==="bottom"?q.elemHeight:0,o=q.at[1]==="top"?q.targetHeight:q.at[1]==="bottom"?-q.targetHeight:0,u=-2*q.offset[1],t,s;if(y<0){s=z.top+r+o+u+q.collisionHeight-w-C;if((z.top+r+o+u)>y&&(s<0||s<c(y))){z.top+=r+o+u}}else{if(x>0){t=z.top-q.collisionPosition.marginTop+r+o+u-v;if((z.top+r+o+u)>x&&(t>0||c(t)<x)){z.top+=r+o+u}}}}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments);a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments);a.ui.position.fit.top.apply(this,arguments)}}};(function(){var s,t,u,r,q,o=document.getElementsByTagName("body")[0],p=document.createElement("div");s=document.createElement(o?"div":"body");u={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(o){a.extend(u,{position:"absolute",left:"-1000px",top:"-1000px"})}for(q in u){s.style[q]=u[q]}s.appendChild(p);t=o||document.documentElement;t.insertBefore(s,t.firstChild);p.style.cssText="position: absolute; left: 10.7432222px;";r=a(p).offset().left;a.support.offsetFractions=r>10&&r<11;s.innerHTML="";t.removeChild(s)})();if(a.uiBackCompat!==false){(function(o){var p=o.fn.position;o.fn.position=function(s){if(!s||!s.offset){return p.call(this,s)}var r=s.offset.split(" "),q=s.at.split(" ");if(r.length===1){r[1]=r[0]}if(/^\d/.test(r[0])){r[0]="+"+r[0]}if(/^\d/.test(r[1])){r[1]="+"+r[1]}if(q.length===1){if(/left|center|right/.test(q[0])){q[1]="center"}else{q[1]=q[0];q[0]="center"}}return p.call(this,o.extend(s,{at:q[0]+r[0]+" "+q[1]+r[1],offset:n}))}}(jQuery))}}(jQuery));(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(c){var d=this.options;if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(c);if(!this.handle){return false}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(c){var d=this.options;this.helper=this._createHelper(c);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));if(d.containment){this._setContainment()}if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)}this._mouseDrag(c,true);if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)}return true},_mouseDrag:function(c,d){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!d){var e=this._uiHash();if(this._trigger("drag",c,e)===false){this._mouseUp({});return false}this.position=e.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)}return false},_mouseStop:function(f){var c=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){c=a.ui.ddmanager.drop(this,f)}if(this.dropped){c=this.dropped;this.dropped=false}var d=this.element[0],e=false;while(d&&(d=d.parentNode)){if(d==document){e=true}}if(!e&&this.options.helper==="original"){return false}if((this.options.revert=="invalid"&&!c)||(this.options.revert=="valid"&&c)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c))){var g=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(g._trigger("stop",f)!==false){g._clear()}})}else{if(this._trigger("stop",f)!==false){this._clear()}}return false},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)}return a.ui.mouse.prototype._mouseUp.call(this,c)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){d=true}});return d},_createHelper:function(c){var e=this.options;var d=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[c])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);if(!d.parents("body").length){d.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))}if(d[0]!=this.element[0]&&!(/(fixed|absolute)/).test(d.css("position"))){d.css("position","absolute")}return d},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var g=this.options;if(g.containment=="parent"){g.containment=this.helper[0].parentNode}if(g.containment=="document"||g.containment=="window"){this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){var d=a(g.containment);var e=d[0];if(!e){return}var f=d.offset();var h=(a(e).css("overflow")!="hidden");this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(h?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=d}else{if(g.containment.constructor==Array){this.containment=g.containment}}},_convertPositionTo:function(c,g){if(!g){g=this.position}var e=c=="absolute"?1:-1;var f=this.options,h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(h[0].tagName);return{top:(g.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:h.scrollTop()))*e)),left:(g.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())*e))}},_generatePosition:function(e){var g=this.options,j=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(j[0].tagName);var h=e.pageX;var i=e.pageY;if(this.originalPosition){var d;if(this.containment){if(this.relative_container){var c=this.relative_container.offset();d=[this.containment[0]+c.left,this.containment[1]+c.top,this.containment[2]+c.left,this.containment[3]+c.top]}else{d=this.containment}if(e.pageX-this.offset.click.left<d[0]){h=d[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<d[1]){i=d[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>d[2]){h=d[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>d[3]){i=d[3]+this.offset.click.top}}if(g.grid){var l=g.grid[1]?this.originalPageY+Math.round((i-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY;i=d?(!(l-this.offset.click.top<d[1]||l-this.offset.click.top>d[3])?l:(!(l-this.offset.click.top<d[1])?l-g.grid[1]:l+g.grid[1])):l;var f=g.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX;h=d?(!(f-this.offset.click.left<d[0]||f-this.offset.click.left>d[2])?f:(!(f-this.offset.click.left<d[0])?f-g.grid[0]:f+g.grid[0])):f}}return{top:(i-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(k?0:j.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():k?0:j.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(d,c,e){e=e||this._uiHash();a.ui.plugin.call(this,d,[c,e]);if(d=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,d,c,e)},plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,f){var d=a(this).data("draggable"),e=d.options,g=a.extend({},f,{item:d.element});d.sortables=[];a(e.connectToSortable).each(function(){var h=a.data(this,"sortable");if(h&&!h.options.disabled){d.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",c,g)}})},stop:function(c,e){var d=a(this).data("draggable"),f=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,f)}})},drag:function(d,g){var e=a(this).data("draggable"),f=this;var c=function(q){var i=this.offset.click.top,h=this.offset.click.left;var k=this.positionAbs.top,j=this.positionAbs.left;var l=q.height,p=q.width;var n=q.top,m=q.left;return a.ui.isOver(k+i,j+h,n,m,l,p)};a.each(e.sortables,function(h){var j=false;var k=this;this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){j=true;a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this!=k&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(k.instance.element[0],this.instance.element[0])){j=false}return j})}if(j){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return g.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",d);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(d)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",d);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,f){var e=a("body"),d=a(this).data("draggable").options;if(e.css("cursor")){d._cursor=e.css("cursor")}e.css("cursor",d.cursor)},stop:function(c,e){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","opacity",{start:function(c,f){var e=a(f.helper),d=a(this).data("draggable").options;if(e.css("opacity")){d._opacity=e.css("opacity")}e.css("opacity",d.opacity)},stop:function(c,e){var d=a(this).data("draggable").options;if(d._opacity){a(e.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,e){var d=a(this).data("draggable");if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){d.overflowOffset=d.scrollParent.offset()}},drag:function(c,g){var d=a(this).data("draggable"),e=d.options,f=false;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-c.pageY<e.scrollSensitivity){d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed}else{if(c.pageY-d.overflowOffset.top<e.scrollSensitivity){d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed}}}if(!e.axis||e.axis!="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-c.pageX<e.scrollSensitivity){d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed}else{if(c.pageX-d.overflowOffset.left<e.scrollSensitivity){d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed}}}}else{if(!e.axis||e.axis!="x"){if(c.pageY-a(document).scrollTop()<e.scrollSensitivity){f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed)}else{if(a(window).height()-(c.pageY-a(document).scrollTop())<e.scrollSensitivity){f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed)}}}if(!e.axis||e.axis!="y"){if(c.pageX-a(document).scrollLeft()<e.scrollSensitivity){f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed)}else{if(a(window).width()-(c.pageX-a(document).scrollLeft())<e.scrollSensitivity){f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed)}}}}if(f!==false&&a.ui.ddmanager&&!e.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,c)}}});a.ui.plugin.add("draggable","snap",{start:function(c,f){var d=a(this).data("draggable"),e=d.options;d.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var h=a(this);var g=h.offset();if(this!=d.element[0]){d.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})}})},drag:function(g,w){var k=a(this).data("draggable"),p=k.options;var f=p.snapTolerance;var x=w.offset.left,y=x+k.helperProportions.width,z=w.offset.top,A=z+k.helperProportions.height;for(var j=k.snapElements.length-1;j>=0;j--){var m=k.snapElements[j].left,q=m+k.snapElements[j].width,u=k.snapElements[j].top,c=u+k.snapElements[j].height;if(!((m-f<x&&x<q+f&&u-f<z&&z<c+f)||(m-f<x&&x<q+f&&u-f<A&&A<c+f)||(m-f<y&&y<q+f&&u-f<z&&z<c+f)||(m-f<y&&y<q+f&&u-f<A&&A<c+f))){if(k.snapElements[j].snapping){(k.options.snap.release&&k.options.snap.release.call(k.element,g,a.extend(k._uiHash(),{snapItem:k.snapElements[j].item})))}k.snapElements[j].snapping=false;continue}if(p.snapMode!="inner"){var v=Math.abs(u-A)<=f;var e=Math.abs(c-z)<=f;var n=Math.abs(m-y)<=f;var s=Math.abs(q-x)<=f;if(v){w.position.top=k._convertPositionTo("relative",{top:u-k.helperProportions.height,left:0}).top-k.margins.top}if(e){w.position.top=k._convertPositionTo("relative",{top:c,left:0}).top-k.margins.top}if(n){w.position.left=k._convertPositionTo("relative",{top:0,left:m-k.helperProportions.width}).left-k.margins.left}if(s){w.position.left=k._convertPositionTo("relative",{top:0,left:q}).left-k.margins.left}}var h=(v||e||n||s);if(p.snapMode!="outer"){var v=Math.abs(u-z)<=f;var e=Math.abs(c-A)<=f;var n=Math.abs(m-x)<=f;var s=Math.abs(q-y)<=f;if(v){w.position.top=k._convertPositionTo("relative",{top:u,left:0}).top-k.margins.top}if(e){w.position.top=k._convertPositionTo("relative",{top:c-k.helperProportions.height,left:0}).top-k.margins.top}if(n){w.position.left=k._convertPositionTo("relative",{top:0,left:m}).left-k.margins.left}if(s){w.position.left=k._convertPositionTo("relative",{top:0,left:q-k.helperProportions.width}).left-k.margins.left}}if(!k.snapElements[j].snapping&&(v||e||n||s||h)){(k.options.snap.snap&&k.options.snap.snap.call(k.element,g,a.extend(k._uiHash(),{snapItem:k.snapElements[j].item})))}k.snapElements[j].snapping=(v||e||n||s||h)}}});a.ui.plugin.add("draggable","stack",{start:function(c,g){var f=a(this).data("draggable").options;var d=a.makeArray(a(f.stack)).sort(function(h,i){return(parseInt(a(h).css("zIndex"),10)||0)-(parseInt(a(i).css("zIndex"),10)||0)});if(!d.length){return}var e=parseInt(d[0].style.zIndex)||0;a(d).each(function(h){this.style.zIndex=e+h});this[0].style.zIndex=e+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,f){var e=a(f.helper),d=a(this).data("draggable").options;if(e.css("zIndex")){d._zIndex=e.css("zIndex")}e.css("zIndex",d.zIndex)},stop:function(c,e){var d=a(this).data("draggable").options;if(d._zIndex){a(e.helper).css("zIndex",d._zIndex)}}})})(jQuery);(function(a,b){a.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;this.isover=0;this.isout=1;this.accept=a.isFunction(c)?c:function(e){return e.is(c)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];a.ui.ddmanager.droppables[d.scope].push(this);(d.addClasses&&this.element.addClass("ui-droppable"))},_destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];for(var d=0;d<c.length;d++){if(c[d]==this){c.splice(d,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(c,d){if(c=="accept"){this.accept=a.isFunction(d)?d:function(e){return e.is(d)}}a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(d){var c=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(c&&this._trigger("activate",d,this.ui(c)))},_deactivate:function(d){var c=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(c&&this._trigger("deactivate",d,this.ui(c)))},_over:function(d){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",d,this.ui(c))}},_out:function(d){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0]){return}if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",d,this.ui(c))}},_drop:function(f,d){var e=d||a.ui.ddmanager.current;if(!e||(e.currentItem||e.element)[0]==this.element[0]){return false}var c=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=a.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==e.options.scope&&g.accept.call(g.element[0],(e.currentItem||e.element))&&a.ui.intersect(e,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){c=true;return false}});if(c){return false}if(this.accept.call(this.element[0],(e.currentItem||e.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",f,this.ui(e));return this.element}return false},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}}});a.ui.intersect=function(d,g,m){if(!g.offset){return false}var n=(d.positionAbs||d.position.absolute).left,o=n+d.helperProportions.width,p=(d.positionAbs||d.position.absolute).top,q=p+d.helperProportions.height;var i=g.offset.left,j=i+g.proportions.width,k=g.offset.top,c=k+g.proportions.height;switch(m){case"fit":return(i<=n&&o<=j&&k<=p&&q<=c);break;case"intersect":return(i<n+(d.helperProportions.width/2)&&o-(d.helperProportions.width/2)<j&&k<p+(d.helperProportions.height/2)&&q-(d.helperProportions.height/2)<c);break;case"pointer":var e=((d.positionAbs||d.position.absolute).left+(d.clickOffset||d.offset.click).left),f=((d.positionAbs||d.position.absolute).top+(d.clickOffset||d.offset.click).top),h=a.ui.isOver(f,e,k,i,g.proportions.height,g.proportions.width);return h;break;case"touch":return((p>=k&&p<=c)||(q>=k&&q<=c)||(p<k&&q>c))&&((n>=i&&n<=j)||(o>=i&&o<=j)||(n<i&&o>j));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,c){var g=a.ui.ddmanager.droppables[h.options.scope]||[];var k=c?c.type:null;var f=(h.currentItem||h.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<g.length;d++){if(g[d].options.disabled||(h&&!g[d].accept.call(g[d].element[0],(h.currentItem||h.element)))){continue}for(var e=0;e<f.length;e++){if(f[e]==g[d].element[0]){g[d].proportions.height=0;continue droppablesLoop}}g[d].visible=g[d].element.css("display")!="none";if(!g[d].visible){continue}if(k=="mousedown"){g[d]._activate.call(g[d],c)}g[d].offset=g[d].element.offset();g[d].proportions={width:g[d].element[0].offsetWidth,height:g[d].element[0].offsetHeight}}},drop:function(c,e){var d=false;a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){d=this._drop.call(this,e)||d}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;this.isover=0;this._deactivate.call(this,e)}});return d},dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}})},drag:function(c,d){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var f=a.ui.intersect(c,this,this.options.tolerance);var e=!f&&this.isover==1?"isout":(f&&this.isover==0?"isover":null);if(!e){return}var h;if(this.options.greedy){var i=this.options.scope;var g=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===i});if(g.length){h=a.data(g[0],"droppable");h.greedyChild=(e=="isover"?1:0)}}if(h&&e=="isover"){h.isover=0;h.isout=1;h._out.call(h,d)}this[e]=1;this[e=="isout"?"isover":"isout"]=0;this[e=="isover"?"_over":"_out"].call(this,d);if(h&&e=="isout"){h.isout=0;h.isover=1;h._over.call(h,d)}})},dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)}}}})(jQuery);(function(a,d){a.widget("ui.resizable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var l=this,k=this.options;this.element.addClass("ui-resizable");a.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=k.handles||(!a(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var j=this.handles.split(",");this.handles={};for(var h=0;h<j.length;h++){var f=a.trim(j[h]),g="ui-resizable-"+f;var e=a('<div class="ui-resizable-handle '+g+'"></div>');e.css({zIndex:k.zIndex});if("se"==f){e.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[f]=".ui-resizable-"+f;this.element.append(e)}}this._renderAxis=function(q){q=q||this.element;for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=a(this.handles[n],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var m=a(this.handles[n],this.element),p=0;p=/sw|ne|nw|se|n|s/.test(n)?m.outerHeight():m.outerWidth();var o=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");q.css(o,p);this._proportionallyResize()}if(!a(this.handles[n]).length){continue}}};this._renderAxis(this.element);this._handles=a(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!l.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}l.axis=i&&i[1]?i[1]:"se"}});if(k.autoHide){this._handles.hide();a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return}a(this).removeClass("ui-resizable-autohide");l._handles.show()}).mouseleave(function(){if(k.disabled){return}if(!l.resizing){a(this).addClass("ui-resizable-autohide");l._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var e=function(g){a(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);var f=this.element;this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);f.remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(e){var f=false;for(var g in this.handles){if(a(this.handles[g])[0]==e.target){f=true}}return !this.options.disabled&&f},_mouseStart:function(i){var k=this.options,j=this.element.position(),h=this.element;this.resizing=true;this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()};if(h.is(".ui-draggable")||(/absolute/).test(h.css("position"))){h.css({position:"absolute",top:j.top,left:j.left})}this._renderProxy();var e=c(this.helper.css("left")),g=c(this.helper.css("top"));if(k.containment){e+=a(k.containment).scrollLeft()||0;g+=a(k.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:e,top:g};this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()};this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()};this.originalPosition={left:e,top:g};this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()};this.originalMousePosition={left:i.pageX,top:i.pageY};this.aspectRatio=(typeof k.aspectRatio=="number")?k.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var f=a(".ui-resizable-"+this.axis).css("cursor");a("body").css("cursor",f=="auto"?this.axis+"-resize":f);h.addClass("ui-resizable-resizing");this._propagate("start",i);return true},_mouseDrag:function(j){var i=this.helper,k=this.options,l={},n=this,m=this.originalMousePosition,e=this.axis;var g=(j.pageX-m.left)||0,h=(j.pageY-m.top)||0;var p=this._change[e];if(!p){return false}var f=p.apply(this,[j,g,h]);this._updateVirtualBoundaries(j.shiftKey);if(this._aspectRatio||j.shiftKey){f=this._updateRatio(f,j)}f=this._respectSize(f,j);this._propagate("resize",j);i.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(f);this._trigger("resize",j,this.ui());return false},_mouseStop:function(e){this.resizing=false;var h=this.options,m=this;if(this._helper){var i=this._proportionallyResizeElements,f=i.length&&(/textarea/i).test(i[0].nodeName),k=f&&a.ui.hasScroll(i[0],"left")?0:m.sizeDiff.height,l=f?0:m.sizeDiff.width;var j={width:(m.helper.width()-l),height:(m.helper.height()-k)},g=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;if(!h.animate){this.element.css(a.extend(j,{top:n,left:g}))}m.helper.height(m.size.height);m.helper.width(m.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}a("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",e);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(f){var g=this.options,k,i,j,h,e;e={minWidth:b(g.minWidth)?g.minWidth:0,maxWidth:b(g.maxWidth)?g.maxWidth:Infinity,minHeight:b(g.minHeight)?g.minHeight:0,maxHeight:b(g.maxHeight)?g.maxHeight:Infinity};if(this._aspectRatio||f){k=e.minHeight*this.aspectRatio;j=e.minWidth/this.aspectRatio;i=e.maxHeight*this.aspectRatio;h=e.maxWidth/this.aspectRatio;if(k>e.minWidth){e.minWidth=k}if(j>e.minHeight){e.minHeight=j}if(i<e.maxWidth){e.maxWidth=i}if(h<e.maxHeight){e.maxHeight=h}}this._vBoundaries=e},_updateCache:function(e){var f=this.options;this.offset=this.helper.offset();if(b(e.left)){this.position.left=e.left}if(b(e.top)){this.position.top=e.top}if(b(e.height)){this.size.height=e.height}if(b(e.width)){this.size.width=e.width}},_updateRatio:function(h,i){var j=this.options,f=this.position,g=this.size,e=this.axis;if(b(h.height)){h.width=(h.height*this.aspectRatio)}else{if(b(h.width)){h.height=(h.width/this.aspectRatio)}}if(e=="sw"){h.left=f.left+(g.width-h.width);h.top=null}if(e=="nw"){h.top=f.top+(g.height-h.height);h.left=f.left+(g.width-h.width)}return h},_respectSize:function(h,l){var k=this.helper,s=this._vBoundaries,t=this._aspectRatio||l.shiftKey,e=this.axis,n=b(h.width)&&s.maxWidth&&(s.maxWidth<h.width),m=b(h.height)&&s.maxHeight&&(s.maxHeight<h.height),q=b(h.width)&&s.minWidth&&(s.minWidth>h.width),p=b(h.height)&&s.minHeight&&(s.minHeight>h.height);if(q){h.width=s.minWidth}if(p){h.height=s.minHeight}if(n){h.width=s.maxWidth}if(m){h.height=s.maxHeight}var j=this.originalPosition.left+this.originalSize.width,i=this.position.top+this.size.height;var g=/sw|nw|w/.test(e),f=/nw|ne|n/.test(e);if(q&&g){h.left=j-s.minWidth}if(n&&g){h.left=j-s.maxWidth}if(p&&f){h.top=i-s.minHeight}if(m&&f){h.top=i-s.maxHeight}var r=!h.width&&!h.height;if(r&&!h.left&&h.top){h.top=null}else{if(r&&!h.top&&h.left){h.left=null}}return h},_proportionallyResize:function(){var h=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var g=0;g<this._proportionallyResizeElements.length;g++){var k=this._proportionallyResizeElements[g];if(!this.borderDif){var e=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")],j=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];this.borderDif=a.map(e,function(o,m){var l=parseInt(o,10)||0,n=parseInt(j[m],10)||0;return l+n})}k.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,g=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var f=(a.ui.ie6?1:0),h=(a.ui.ie6?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+h,height:this.element.outerHeight()+h,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++g.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(g,e,f){return{width:this.originalSize.width+e}},w:function(h,f,g){var i=this.options,e=this.originalSize,j=this.originalPosition;return{left:j.left+f,width:e.width-f}},n:function(h,f,g){var i=this.options,e=this.originalSize,j=this.originalPosition;return{top:j.top+g,height:e.height-g}},s:function(g,e,f){return{height:this.originalSize.height+f}},se:function(g,e,f){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,e,f]))},sw:function(g,e,f){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,e,f]))},ne:function(g,e,f){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,e,f]))},nw:function(g,e,f){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,e,f]))}},_propagate:function(f,e){a.ui.plugin.call(this,f,[e,this.ui()]);(f!="resize"&&this._trigger(f,e,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});a.ui.plugin.add("resizable","alsoResize",{start:function(f,i){var h=a(this).data("resizable"),g=h.options;var e=function(j){a(j).each(function(){var k=a(this);k.data("resizable-alsoresize",{width:parseInt(k.width(),10),height:parseInt(k.height(),10),left:parseInt(k.css("left"),10),top:parseInt(k.css("top"),10)})})};if(typeof(g.alsoResize)=="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];e(g.alsoResize)}else{a.each(g.alsoResize,function(j){e(j)})}}else{e(g.alsoResize)}},resize:function(g,l){var k=a(this).data("resizable"),h=k.options,j=k.originalSize,i=k.originalPosition;var f={height:(k.size.height-j.height)||0,width:(k.size.width-j.width)||0,top:(k.position.top-i.top)||0,left:(k.position.left-i.left)||0},e=function(n,m){a(n).each(function(){var p=a(this),q=a(this).data("resizable-alsoresize"),r={},o=m&&m.length?m:p.parents(l.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(o,function(s,t){var u=(q[t]||0)+(f[t]||0);if(u&&u>=0){r[t]=u||null}});p.css(r)})};if(typeof(h.alsoResize)=="object"&&!h.alsoResize.nodeType){a.each(h.alsoResize,function(n,m){e(n,m)})}else{e(h.alsoResize)}},stop:function(e,f){a(this).removeData("resizable-alsoresize")}});a.ui.plugin.add("resizable","animate",{stop:function(e,p){var m=a(this).data("resizable"),h=m.options;var i=m._proportionallyResizeElements,f=i.length&&(/textarea/i).test(i[0].nodeName),j=f&&a.ui.hasScroll(i[0],"left")?0:m.sizeDiff.height,k=f?0:m.sizeDiff.width;var l={width:(m.size.width-k),height:(m.size.height-j)},g=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;m.element.animate(a.extend(l,n&&g?{top:n,left:g}:{}),{duration:h.animateDuration,easing:h.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};if(i&&i.length){a(i[0]).css({width:o.width,height:o.height})}m._updateCache(o);m._propagate("resize",e)}})}});a.ui.plugin.add("resizable","containment",{start:function(k,s){var r=a(this).data("resizable"),m=r.options,i=r.element;var n=m.containment,e=(n instanceof a)?n.get(0):(/parent/.test(n))?i.parent().get(0):n;if(!e){return}r.containerElement=a(e);if(/document/.test(n)||n==document){r.containerOffset={left:0,top:0};r.containerPosition={left:0,top:0};r.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}}else{var j=a(e),q=[];a(["Top","Right","Left","Bottom"]).each(function(o,p){q[o]=c(j.css("padding"+p))});r.containerOffset=j.offset();r.containerPosition=j.position();r.containerSize={height:(j.innerHeight()-q[3]),width:(j.innerWidth()-q[1])};var g=r.containerOffset,f=r.containerSize.height,h=r.containerSize.width,t=(a.ui.hasScroll(e,"left")?e.scrollWidth:h),l=(a.ui.hasScroll(e)?e.scrollHeight:f);r.parentData={element:e,left:g.left,top:g.top,width:t,height:l}}},resize:function(j,s){var r=a(this).data("resizable"),n=r.options,q=r.containerSize,f=r.containerOffset,i=r.size,h=r.position,p=r._aspectRatio||j.shiftKey,g={top:0,left:0},e=r.containerElement;if(e[0]!=document&&(/static/).test(e.css("position"))){g=f}if(h.left<(r._helper?f.left:0)){r.size.width=r.size.width+(r._helper?(r.position.left-f.left):(r.position.left-g.left));if(p){r.size.height=r.size.width/r.aspectRatio}r.position.left=n.helper?f.left:0}if(h.top<(r._helper?f.top:0)){r.size.height=r.size.height+(r._helper?(r.position.top-f.top):r.position.top);if(p){r.size.width=r.size.height*r.aspectRatio}r.position.top=r._helper?f.top:0}r.offset.left=r.parentData.left+r.position.left;r.offset.top=r.parentData.top+r.position.top;var t=Math.abs((r._helper?r.offset.left-g.left:(r.offset.left-g.left))+r.sizeDiff.width),k=Math.abs((r._helper?r.offset.top-g.top:(r.offset.top-f.top))+r.sizeDiff.height);var m=r.containerElement.get(0)==r.element.parent().get(0),l=/relative|absolute/.test(r.containerElement.css("position"));if(m&&l){t-=r.parentData.left}if(t+r.size.width>=r.parentData.width){r.size.width=r.parentData.width-t;if(p){r.size.height=r.size.width/r.aspectRatio}}if(k+r.size.height>=r.parentData.height){r.size.height=r.parentData.height-k;if(p){r.size.width=r.size.height*r.aspectRatio}}},stop:function(j,q){var p=a(this).data("resizable"),n=p.options,i=p.position,f=p.containerOffset,g=p.containerPosition,e=p.containerElement;var l=a(p.helper),m=l.offset(),r=l.outerWidth()-p.sizeDiff.width,k=l.outerHeight()-p.sizeDiff.height;if(p._helper&&!n.animate&&(/relative/).test(e.css("position"))){a(this).css({left:m.left-g.left-f.left,width:r,height:k})}if(p._helper&&!n.animate&&(/static/).test(e.css("position"))){a(this).css({left:m.left-g.left-f.left,width:r,height:k})}}});a.ui.plugin.add("resizable","ghost",{start:function(f,i){var h=a(this).data("resizable"),g=h.options,e=h.size;h.ghost=h.originalElement.clone();h.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost=="string"?g.ghost:"");h.ghost.appendTo(h.helper)},resize:function(e,h){var g=a(this).data("resizable"),f=g.options;if(g.ghost){g.ghost.css({position:"relative",height:g.size.height,width:g.size.width})}},stop:function(e,h){var g=a(this).data("resizable"),f=g.options;if(g.ghost&&g.helper){g.helper.get(0).removeChild(g.ghost.get(0))}}});a.ui.plugin.add("resizable","grid",{resize:function(g,p){var n=a(this).data("resizable"),h=n.options,f=n.size,j=n.originalSize,i=n.originalPosition,e=n.axis,m=h._aspectRatio||g.shiftKey;h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;var k=Math.round((f.width-j.width)/(h.grid[0]||1))*(h.grid[0]||1),l=Math.round((f.height-j.height)/(h.grid[1]||1))*(h.grid[1]||1);if(/^(se|s|e)$/.test(e)){n.size.width=j.width+k;n.size.height=j.height+l}else{if(/^(ne)$/.test(e)){n.size.width=j.width+k;n.size.height=j.height+l;n.position.top=i.top-l}else{if(/^(sw)$/.test(e)){n.size.width=j.width+k;n.size.height=j.height+l;n.position.left=i.left-k}else{n.size.width=j.width+k;n.size.height=j.height+l;n.position.top=i.top-l;n.position.left=i.left-k}}}}});var c=function(e){return parseInt(e,10)||0};var b=function(e){return !isNaN(parseInt(e,10))}})(jQuery);(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(d.options.filter,d.element[0]);c.addClass("ui-selectee");c.each(function(){var e=a(this);var f=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(c){var e=this;this.opos=[c.pageX,c.pageY];if(this.options.disabled){return}var d=this.options;this.selectees=a(d.filter,this.element[0]);this._trigger("start",c);a(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});if(d.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");f.startselected=true;if(!c.metaKey&&!c.ctrlKey){f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;e._trigger("unselecting",c,{unselecting:f.element})}});a(c.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");if(g){var f=(!c.metaKey&&!c.ctrlKey)||!g.$element.hasClass("ui-selected");g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");g.unselecting=!f;g.selecting=f;g.selected=f;if(f){e._trigger("selecting",c,{selecting:g.element})}else{e._trigger("unselecting",c,{unselecting:g.element})}return false}})},_mouseDrag:function(c){var e=this;this.dragged=true;if(this.options.disabled){return}var d=this.options;var g=this.opos[0],i=this.opos[1],h=c.pageX,j=c.pageY;if(g>h){var f=h;h=g;g=f}if(i>j){var f=j;j=i;i=f}this.helper.css({left:g,top:i,width:h-g,height:j-i});this.selectees.each(function(){var l=a.data(this,"selectable-item");if(!l||l.element==e.element[0]){return}var k=false;if(d.tolerance=="touch"){k=(!(l.left>h||l.right<g||l.top>j||l.bottom<i))}else{if(d.tolerance=="fit"){k=(l.left>g&&l.right<h&&l.top>i&&l.bottom<j)}}if(k){if(l.selected){l.$element.removeClass("ui-selected");l.selected=false}if(l.unselecting){l.$element.removeClass("ui-unselecting");l.unselecting=false}if(!l.selecting){l.$element.addClass("ui-selecting");l.selecting=true;e._trigger("selecting",c,{selecting:l.element})}}else{if(l.selecting){if((c.metaKey||c.ctrlKey)&&l.startselected){l.$element.removeClass("ui-selecting");l.selecting=false;l.$element.addClass("ui-selected");l.selected=true}else{l.$element.removeClass("ui-selecting");l.selecting=false;if(l.startselected){l.$element.addClass("ui-unselecting");l.unselecting=true}e._trigger("unselecting",c,{unselecting:l.element})}}if(l.selected){if(!c.metaKey&&!c.ctrlKey&&!l.startselected){l.$element.removeClass("ui-selected");l.selected=false;l.$element.addClass("ui-unselecting");l.unselecting=true;e._trigger("unselecting",c,{unselecting:l.element})}}}});return false},_mouseStop:function(c){var e=this;this.dragged=false;var d=this.options;a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-unselecting");f.unselecting=false;f.startselected=false;e._trigger("unselected",c,{unselected:f.element})});a(".ui-selecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");f.$element.removeClass("ui-selecting").addClass("ui-selected");f.selecting=false;f.selected=true;f.startselected=true;e._trigger("selected",c,{selected:f.element})});this._trigger("stop",c);this.helper.remove();return false}})})(jQuery);(function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--){this.items[c].item.removeData(this.widgetName+"-item")}return this},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;this.widget().toggleClass("ui-sortable-disabled",!!d)}else{a.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(d,f){var g=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(d);var c=null,e=a(d.target).parents().each(function(){if(a.data(this,g.widgetName+"-item")==g){c=a(this);return false}});if(a.data(d.target,g.widgetName+"-item")==g){c=a(d.target)}if(!c){return false}if(this.options.handle&&!f){var h=false;a(this.options.handle,c).find("*").andSelf().each(function(){if(this==d.target){h=true}});if(!h){return false}}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(c,g,e){var f=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(c);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;(f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(f.containment){this._setContainment()}if(f.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",f.cursor)}if(f.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",f.opacity)}if(f.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",f.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",c,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!e){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",c,this._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(c);return true},_mouseDrag:function(c){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var h=this.options,j=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-c.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=j=this.scrollParent[0].scrollTop+h.scrollSpeed}else{if(c.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=j=this.scrollParent[0].scrollTop-h.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-c.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=j=this.scrollParent[0].scrollLeft+h.scrollSpeed}else{if(c.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=j=this.scrollParent[0].scrollLeft-h.scrollSpeed}}}else{if(c.pageY-a(document).scrollTop()<h.scrollSensitivity){j=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)}else{if(a(window).height()-(c.pageY-a(document).scrollTop())<h.scrollSensitivity){j=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)}}if(c.pageX-a(document).scrollLeft()<h.scrollSensitivity){j=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)}else{if(a(window).width()-(c.pageX-a(document).scrollLeft())<h.scrollSensitivity){j=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)}}}if(j!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var f=this.items[d],g=f.item[0],e=this._intersectsWithPointer(f);if(!e){continue}if(f.instance!==this.currentContainer){continue}if(g!=this.currentItem[0]&&this.placeholder[e==1?"next":"prev"]()[0]!=g&&!a.contains(this.placeholder[0],g)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],g):true)){this.direction=e==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(c,f)}else{break}this._trigger("change",c,this._uiHash());break}}this._contactContainers(c);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)}this._trigger("sort",c,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,e){if(!d){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)}if(this.options.revert){var f=this;var c=this.placeholder.offset();this.reverting=true;a(this.helper).animate({left:c.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:c.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){f._clear(d)})}else{this._clear(d,e)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(d){var c=this._getItemsAsjQuery(d&&d.connected);var e=[];d=d||{};a(c).each(function(){var f=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(f){e.push((d.key||f[1]+"[]")+"="+(d.key&&d.expression?f[1]:f[2]))}});if(!e.length&&d.key){e.push(d.key+"=")}return e.join("&")},toArray:function(d){var c=this._getItemsAsjQuery(d&&d.connected);var e=[];d=d||{};c.each(function(){e.push(a(d.item||this).attr(d.attribute||"id")||"")});return e},_intersectsWith:function(g){var k=this.positionAbs.left,m=k+this.helperProportions.width,n=this.positionAbs.top,o=n+this.helperProportions.height;var h=g.left,i=h+g.width,j=g.top,c=j+g.height;var e=this.offset.click.top,d=this.offset.click.left;var f=(n+e)>j&&(n+e)<c&&(k+d)>h&&(k+d)<i;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>g[this.floating?"width":"height"])){return f}else{return(h<k+(this.helperProportions.width/2)&&m-(this.helperProportions.width/2)<i&&j<n+(this.helperProportions.height/2)&&o-(this.helperProportions.height/2)<c)}},_intersectsWithPointer:function(g){var e=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,g.left,g.width),d=e&&f,h=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection();if(!d){return false}return this.floating?(((c&&c=="right")||h=="down")?2:1):(h&&(h=="down"?2:1))},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),g=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection();if(this.floating&&c){return((c=="right"&&e)||(c=="left"&&!e))}else{return g&&((g=="down"&&d)||(g=="up"&&!d))}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(c){var h=[];var l=[];var d=this._connectWith();if(d&&c){for(var f=d.length-1;f>=0;f--){var e=a(d[f]);for(var k=e.length-1;k>=0;k--){var g=a.data(e[k],this.widgetName);if(g&&g!=this&&!g.options.disabled){l.push([a.isFunction(g.options.items)?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g])}}}}l.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var f=l.length-1;f>=0;f--){l[f][0].each(function(){h.push(this)})}return a(h)},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(d){for(var e=0;e<c.length;e++){if(c[e]==d.item[0]){return false}}return true})},_refreshItems:function(f){this.items=[];this.containers=[this];var l=this.items;var n=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],f,{item:this.currentItem}):a(this.options.items,this.element),this]];var d=this._connectWith();if(d&&this.ready){for(var g=d.length-1;g>=0;g--){var e=a(d[g]);for(var m=e.length-1;m>=0;m--){var h=a.data(e[m],this.widgetName);if(h&&h!=this&&!h.options.disabled){n.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],f,{item:this.currentItem}):a(h.options.items,h.element),h]);this.containers.push(h)}}}}for(var g=n.length-1;g>=0;g--){var p=n[g][1];var c=n[g][0];for(var m=0,o=c.length;m<o;m++){var k=a(c[m]);k.data(this.widgetName+"-item",p);l.push({item:k,instance:p,width:0,height:0,left:0,top:0})}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){continue}var g=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!c){e.width=g.outerWidth();e.height=g.outerHeight()}var f=g.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}return this},_createPlaceholder:function(e){e=e||this;var d=e.options;if(!d.placeholder||d.placeholder.constructor==String){var c=d.placeholder;d.placeholder={element:function(){var f=a(document.createElement(e.currentItem[0].nodeName)).addClass(c||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!d.forcePlaceholderSize){return}if(!g.height()){g.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}}e.placeholder=a(d.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);d.placeholder.update(e,e.placeholder)},_contactContainers:function(f){var h=null,k=null;for(var g=this.containers.length-1;g>=0;g--){if(a.contains(this.currentItem[0],this.containers[g].element[0])){continue}if(this._intersectsWith(this.containers[g].containerCache)){if(h&&a.contains(this.containers[g].element[0],h.element[0])){continue}h=this.containers[g];k=g}else{if(this.containers[g].containerCache.over){this.containers[g]._trigger("out",f,this._uiHash(this));this.containers[g].containerCache.over=0}}}if(!h){return}if(this.containers.length===1){this.containers[k]._trigger("over",f,this._uiHash(this));this.containers[k].containerCache.over=1}else{var e=10000;var l=null;var o=this.containers[k].floating?"left":"top";var p=this.containers[k].floating?"width":"height";var c=this.positionAbs[o]+this.offset.click[o];for(var m=this.items.length-1;m>=0;m--){if(!a.contains(this.containers[k].element[0],this.items[m].item[0])){continue}if(this.items[m].item[0]==this.currentItem[0]){continue}var d=this.items[m].item.offset()[o];var n=false;if(Math.abs(d-c)>Math.abs(d+this.items[m][p]-c)){n=true;d+=this.items[m][p]}if(Math.abs(d-c)<e){e=Math.abs(d-c);l=this.items[m];this.direction=n?"up":"down"}}if(!l&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[k];l?this._rearrange(f,l,null,true):this._rearrange(f,null,this.containers[k].element,true);this._trigger("change",f,this._uiHash());this.containers[k]._trigger("change",f,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[k]._trigger("over",f,this._uiHash(this));this.containers[k].containerCache.over=1}},_createHelper:function(c){var e=this.options;var d=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[c,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);if(!d.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0])}if(d[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(d[0].style.width==""||e.forceHelperSize){d.width(this.currentItem.width())}if(d[0].style.height==""||e.forceHelperSize){d.height(this.currentItem.height())}return d},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var f=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(f?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(f?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(c,g){if(!g){g=this.position}var e=c=="absolute"?1:-1;var f=this.options,h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(h[0].tagName);return{top:(g.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:h.scrollTop()))*e)),left:(g.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())*e))}},_generatePosition:function(c){var e=this.options,h=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(h[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var f=c.pageX;var g=c.pageY;if(this.originalPosition){if(this.containment){if(c.pageX-this.offset.click.left<this.containment[0]){f=this.containment[0]+this.offset.click.left}if(c.pageY-this.offset.click.top<this.containment[1]){g=this.containment[1]+this.offset.click.top}if(c.pageX-this.offset.click.left>this.containment[2]){f=this.containment[2]+this.offset.click.left}if(c.pageY-this.offset.click.top>this.containment[3]){g=this.containment[3]+this.offset.click.top}}if(e.grid){var j=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1];g=this.containment?(!(j-this.offset.click.top<this.containment[1]||j-this.offset.click.top>this.containment[3])?j:(!(j-this.offset.click.top<this.containment[1])?j-e.grid[1]:j+e.grid[1])):j;var d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0];f=this.containment?(!(d-this.offset.click.left<this.containment[0]||d-this.offset.click.left>this.containment[2])?d:(!(d-this.offset.click.left<this.containment[0])?d-e.grid[0]:d+e.grid[0])):d}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:h.scrollTop())))),left:(f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())))}},_rearrange:function(e,g,c,f){c?c[0].appendChild(this.placeholder[0]):g.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?g.item[0]:g.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this.counter;this._delay(function(){if(d==this.counter){this.refreshPositions(!f)}})},_clear:function(d,f){this.reverting=false;var c=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS){if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static"){this._storedCSS[e]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!f){c.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!f){c.push(function(g){this._trigger("update",g,this._uiHash())})}if(this!==this.currentContainer){if(!f){c.push(function(g){this._trigger("remove",g,this._uiHash())});c.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.currentContainer));c.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.currentContainer))}}for(var e=this.containers.length-1;e>=0;e--){if(!f){c.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[e]))}if(this.containers[e].containerCache.over){c.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[e]));this.containers[e].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!f){this._trigger("beforeStop",d,this._uiHash());for(var e=0;e<c.length;e++){c[e].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return false}if(!f){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!f){for(var e=0;e<c.length;e++){c[e].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var d=c||this;return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}}})})(jQuery);(function(a,e){var d=0,b={},c={};b.height=b.paddingTop=b.paddingBottom=b.borderTopWidth=b.borderBottomWidth="hide";c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="show";a.widget("ui.accordion",{version:"1.9.2",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var f=this.accordionId="ui-accordion-"+(this.element.attr("id")||++d),g=this.options;this.prevShow=this.prevHide=a();this.element.addClass("ui-accordion ui-widget ui-helper-reset");this.headers=this.element.find(g.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this._hoverable(this.headers);this._focusable(this.headers);this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();if(!g.collapsible&&(g.active===false||g.active==null)){g.active=0}if(g.active<0){g.active+=this.headers.length}this.active=this._findActive(g.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top");this.active.next().addClass("ui-accordion-content-active").show();this._createIcons();this.refresh();this.element.attr("role","tablist");this.headers.attr("role","tab").each(function(k){var h=a(this),j=h.attr("id"),l=h.next(),m=l.attr("id");if(!j){j=f+"-header-"+k;h.attr("id",j)}if(!m){m=f+"-panel-"+k;l.attr("id",m)}h.attr("aria-controls",m);l.attr("aria-labelledby",j)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._on(this.headers,{keydown:"_keydown"});this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._setupEvents(g.event)},_getCreateEventData:function(){return{header:this.active,content:!this.active.length?a():this.active.next()}},_createIcons:function(){var f=this.options.icons;if(f){a("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var f;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){f.css("height","")}},_setOption:function(f,g){if(f==="active"){this._activate(g);return}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(g)}this._super(f,g);if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)}if(f==="icons"){this._destroyIcons();if(g){this._createIcons()}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)}},_keydown:function(g){if(g.altKey||g.ctrlKey){return}var h=a.ui.keyCode,i=this.headers.length,f=this.headers.index(g.target),j=false;switch(g.keyCode){case h.RIGHT:case h.DOWN:j=this.headers[(f+1)%i];break;case h.LEFT:case h.UP:j=this.headers[(f-1+i)%i];break;case h.SPACE:case h.ENTER:this._eventHandler(g);break;case h.HOME:j=this.headers[0];break;case h.END:j=this.headers[i-1];break}if(j){a(g.target).attr("tabIndex",-1);a(j).attr("tabIndex",0);j.focus();g.preventDefault()}},_panelKeyDown:function(f){if(f.keyCode===a.ui.keyCode.UP&&f.ctrlKey){a(f.currentTarget).prev().focus()}},refresh:function(){var g,h,f=this.options.heightStyle,i=this.element.parent();if(f==="fill"){if(!a.support.minHeight){h=i.css("overflow");i.css("overflow","hidden")}g=i.height();this.element.siblings(":visible").each(function(){var j=a(this),k=j.css("position");if(k==="absolute"||k==="fixed"){return}g-=j.outerHeight(true)});if(h){i.css("overflow",h)}this.headers.each(function(){g-=a(this).outerHeight(true)});this.headers.next().each(function(){a(this).height(Math.max(0,g-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else{if(f==="auto"){g=0;this.headers.next().each(function(){g=Math.max(g,a(this).css("height","").height())}).height(g)}}},_activate:function(g){var f=this._findActive(g)[0];if(f===this.active[0]){return}f=f||this.active[0];this._eventHandler({target:f,currentTarget:f,preventDefault:a.noop})},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):a()},_setupEvents:function(f){var g={};if(!f){return}a.each(f.split(" "),function(i,h){g[h]="_eventHandler"});this._on(this.headers,g)},_eventHandler:function(j){var l=this.options,f=this.active,g=a(j.currentTarget),h=g[0]===f[0],i=h&&l.collapsible,n=i?a():g.next(),m=f.next(),k={oldHeader:f,oldPanel:m,newHeader:i?a():g,newPanel:n};j.preventDefault();if((h&&!l.collapsible)||(this._trigger("beforeActivate",j,k)===false)){return}l.active=i?false:this.headers.index(g);this.active=h?a():g;this._toggle(k);f.removeClass("ui-accordion-header-active ui-state-active");if(l.icons){f.children(".ui-accordion-header-icon").removeClass(l.icons.activeHeader).addClass(l.icons.header)}if(!h){g.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(l.icons){g.children(".ui-accordion-header-icon").removeClass(l.icons.header).addClass(l.icons.activeHeader)}g.next().addClass("ui-accordion-content-active")}},_toggle:function(f){var h=f.newPanel,g=this.prevShow.length?this.prevShow:f.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=h;this.prevHide=g;if(this.options.animate){this._animate(h,g,f)}else{g.hide();h.show();this._toggleComplete(f)}g.attr({"aria-expanded":"false","aria-hidden":"true"});g.prev().attr("aria-selected","false");if(h.length&&g.length){g.prev().attr("tabIndex",-1)}else{if(h.length){this.headers.filter(function(){return a(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}h.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(p,o,i){var q,l,k,n=this,f=0,j=p.length&&(!o.length||(p.index()<o.index())),g=this.options.animate||{},m=j&&g.down||g,h=function(){n._toggleComplete(i)};if(typeof m==="number"){k=m}if(typeof m==="string"){l=m}l=l||m.easing||g.easing;k=k||m.duration||g.duration;if(!o.length){return p.animate(c,k,l,h)}if(!p.length){return o.animate(b,k,l,h)}q=p.show().outerHeight();o.animate(b,{duration:k,easing:l,step:function(s,r){r.now=Math.round(s)}});p.hide().animate(c,{duration:k,easing:l,complete:h,step:function(s,r){r.now=Math.round(s);if(r.prop!=="height"){f+=r.now}else{if(n.options.heightStyle!=="content"){r.now=Math.round(q-o.outerHeight()-f);f=0}}}})},_toggleComplete:function(f){var g=f.oldPanel;g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(g.length){g.parent()[0].className=g.parent()[0].className}this._trigger("activate",null,f)}});if(a.uiBackCompat!==false){(function(f,h){f.extend(h.options,{navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}});var g=h._create;h._create=function(){if(this.options.navigation){var l=this,k=this.element.find(this.options.header),i=k.next(),j=k.add(i).find("a").filter(this.options.navigationFilter)[0];if(j){k.add(i).each(function(m){if(f.contains(this,j)){l.options.active=Math.floor(m/2);return false}})}}g.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(f,i){f.extend(i.options,{heightStyle:null,autoHeight:true,clearStyle:false,fillSpace:false});var g=i._create,h=i._setOption;f.extend(i,{_create:function(){this.options.heightStyle=this.options.heightStyle||this._mergeHeightStyle();g.call(this)},_setOption:function(j){if(j==="autoHeight"||j==="clearStyle"||j==="fillSpace"){this.options.heightStyle=this._mergeHeightStyle()}h.apply(this,arguments)},_mergeHeightStyle:function(){var j=this.options;if(j.fillSpace){return"fill"}if(j.clearStyle){return"content"}if(j.autoHeight){return"auto"}}})}(jQuery,jQuery.ui.accordion.prototype));(function(f,h){f.extend(h.options.icons,{activeHeader:null,headerSelected:"ui-icon-triangle-1-s"});var g=h._createIcons;h._createIcons=function(){if(this.options.icons){this.options.icons.activeHeader=this.options.icons.activeHeader||this.options.icons.headerSelected}g.call(this)}}(jQuery,jQuery.ui.accordion.prototype));(function(f,h){h.activate=h._activate;var g=h._findActive;h._findActive=function(i){if(i===-1){i=false}if(i&&typeof i!=="number"){i=this.headers.index(this.headers.filter(i));if(i===-1){i=false}}return g.call(this,i)}}(jQuery,jQuery.ui.accordion.prototype));jQuery.ui.accordion.prototype.resize=jQuery.ui.accordion.prototype.refresh;(function(f,h){f.extend(h.options,{change:null,changestart:null});var g=h._trigger;h._trigger=function(l,j,i){var k=g.apply(this,arguments);if(!k){return false}if(l==="beforeActivate"){k=g.call(this,"changestart",j,{oldHeader:i.oldHeader,oldContent:i.oldPanel,newHeader:i.newHeader,newContent:i.newPanel})}else{if(l==="activate"){k=g.call(this,"change",j,{oldHeader:i.oldHeader,oldContent:i.oldPanel,newHeader:i.newHeader,newContent:i.newPanel})}}return k}}(jQuery,jQuery.ui.accordion.prototype));(function(f,h){f.extend(h.options,{animate:null,animated:"slide"});var g=h._create;h._create=function(){var i=this.options;if(i.animate===null){if(!i.animated){i.animate=false}else{if(i.animated==="slide"){i.animate=300}else{if(i.animated==="bounceslide"){i.animate={duration:200,down:{easing:"easeOutBounce",duration:1000}}}else{i.animate=i.animated}}}}g.call(this)}}(jQuery,jQuery.ui.accordion.prototype))}})(jQuery);(function(a,c){var b=0;a.widget("ui.autocomplete",{version:"1.9.2",defaultElement:"<input>",options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,f,d;this.isMultiLine=this._isMultiLine();this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(g){if(this.element.prop("readOnly")){e=true;d=true;f=true;return}e=false;d=false;f=false;var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:e=true;this._move("previousPage",g);break;case h.PAGE_DOWN:e=true;this._move("nextPage",g);break;case h.UP:e=true;this._keyEvent("previous",g);break;case h.DOWN:e=true;this._keyEvent("next",g);break;case h.ENTER:case h.NUMPAD_ENTER:if(this.menu.active){e=true;g.preventDefault();this.menu.select(g)}break;case h.TAB:if(this.menu.active){this.menu.select(g)}break;case h.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(g);g.preventDefault()}break;default:f=true;this._searchTimeout(g);break}},keypress:function(g){if(e){e=false;g.preventDefault();return}if(f){return}var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:this._move("previousPage",g);break;case h.PAGE_DOWN:this._move("nextPage",g);break;case h.UP:this._keyEvent("previous",g);break;case h.DOWN:this._keyEvent("next",g);break}},input:function(g){if(d){d=false;g.preventDefault();return}this._searchTimeout(g)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(g){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(g);this._change(g)}});this._initSource();this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo||"body")[0]).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("menu");this._on(this.menu.element,{mousedown:function(g){g.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}var h=this.menu.element[0];if(!a(g.target).closest(".ui-menu-item").length){this._delay(function(){var i=this;this.document.one("mousedown",function(j){if(j.target!==i.element[0]&&j.target!==h&&!a.contains(h,j.target)){i.close()}})})}},menufocus:function(g,i){if(this.isNewMenu){this.isNewMenu=false;if(g.originalEvent&&/^mouse/.test(g.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){a(g.target).trigger(g.originalEvent)});return}}var h=i.item.data("ui-autocomplete-item")||i.item.data("item.autocomplete");if(false!==this._trigger("focus",g,{item:h})){if(g.originalEvent&&/^key/.test(g.originalEvent.type)){this._value(h.value)}}else{this.liveRegion.text(h.value)}},menuselect:function(g,j){var h=j.item.data("ui-autocomplete-item")||j.item.data("item.autocomplete"),i=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=i;this._delay(function(){this.previous=i;this.selectedItem=h})}if(false!==this._trigger("select",g,{item:h})){this._value(h.value)}this.term=this._value();this.close(g);this.selectedItem=h}});this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);if(a.fn.bgiframe){this.menu.element.bgiframe()}this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(d,e){this._super(d,e);if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(this.document.find(e||"body")[0])}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_isMultiLine:function(){if(this.element.is("textarea")){return true}if(this.element.is("input")){return false}return this.element.prop("isContentEditable")},_initSource:function(){var d,f,e=this;if(a.isArray(this.options.source)){d=this.options.source;this.source=function(g,h){h(a.ui.autocomplete.filter(d,g.term))}}else{if(typeof this.options.source==="string"){f=this.options.source;this.source=function(g,h){if(e.xhr){e.xhr.abort()}e.xhr=a.ajax({url:f,data:g,dataType:"json",success:function(i){h(i)},error:function(){h([])}})}}else{this.source=this.options.source}}},_searchTimeout:function(d){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,d)}},this.options.delay)},search:function(e,d){e=e!=null?e:this._value();this.term=this._value();if(e.length<this.options.minLength){return this.close(d)}if(this._trigger("search",d)===false){return}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:d},this._response())},_response:function(){var e=this,d=++b;return function(f){if(d===b){e.__response(f)}e.pending--;if(!e.pending){e.element.removeClass("ui-autocomplete-loading")}}},__response:function(d){if(d){d=this._normalize(d)}this._trigger("response",null,{content:d});if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);this._trigger("open")}else{this._close()}},close:function(d){this.cancelSearch=true;this._close(d)},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",d)}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}}return a.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(e,d);this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(f,d){var e=this;a.each(d,function(g,h){e._renderItemData(f,h)})},_renderItemData:function(e,d){return this._renderItem(e,d).data("ui-autocomplete-item",d)},_renderItem:function(e,d){return a("<li>").append(a("<a>").html(d.label)).appendTo(e)},_move:function(d,e){if(!this.menu.element.is(":visible")){this.search(null,e);return}if(this.menu.isFirstItem()&&/^previous/.test(d)||this.menu.isLastItem()&&/^next/.test(d)){this._value(this.term);this.menu.blur();return}this.menu[d](e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);d.preventDefault()}}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(d,f){var e=new RegExp(a.ui.autocomplete.escapeRegex(f),"i");return a.grep(d,function(g){return e.test(g.label||g.value||g)})}});a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(d){var e;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(d&&d.length){e=this.options.messages.results(d.length)}else{e=this.options.messages.noResults}this.liveRegion.text(e)}})}(jQuery));(function(a,k){var e,g,h,c,b="ui-button ui-widget ui-state-default ui-corner-all",i="ui-state-hover ui-state-active ",j="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",d=function(){var l=a(this).find(":ui-button");setTimeout(function(){l.button("refresh")},1)},f=function(n){var m=n.name,l=n.form,o=a([]);if(m){if(l){o=a(l).find("[name='"+m+"']")}else{o=a("[name='"+m+"']",n.ownerDocument).filter(function(){return !this.form})}}return o};a.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,d);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var o=this,n=this.options,p=this.type==="checkbox"||this.type==="radio",l=!p?"ui-state-active":"",m="ui-state-focus";if(n.label===null){n.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())}this._hoverable(this.buttonElement);this.buttonElement.addClass(b).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(n.disabled){return}if(this===e){a(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(n.disabled){return}a(this).removeClass(l)}).bind("click"+this.eventNamespace,function(q){if(n.disabled){q.preventDefault();q.stopImmediatePropagation()}});this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(m)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(m)});if(p){this.element.bind("change"+this.eventNamespace,function(){if(c){return}o.refresh()});this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(n.disabled){return}c=false;g=q.pageX;h=q.pageY}).bind("mouseup"+this.eventNamespace,function(q){if(n.disabled){return}if(g!==q.pageX||h!==q.pageY){c=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(n.disabled||c){return false}a(this).toggleClass("ui-state-active");o.buttonElement.attr("aria-pressed",o.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(n.disabled||c){return false}a(this).addClass("ui-state-active");o.buttonElement.attr("aria-pressed","true");var q=o.element[0];f(q).not(q).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(n.disabled){return false}a(this).addClass("ui-state-active");e=this;o.document.one("mouseup",function(){e=null})}).bind("mouseup"+this.eventNamespace,function(){if(n.disabled){return false}a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(q){if(n.disabled){return false}if(q.keyCode===a.ui.keyCode.SPACE||q.keyCode===a.ui.keyCode.ENTER){a(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===a.ui.keyCode.SPACE){a(this).click()}})}}}this._setOption("disabled",n.disabled);this._resetButton()},_determineButtonType:function(){var l,n,m;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else{if(this.element.is("[type=radio]")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();n="label[for='"+this.element.attr("id")+"']";this.buttonElement=l.find(n);if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();this.buttonElement=l.filter(n);if(!this.buttonElement.length){this.buttonElement=l.find(n)}}this.element.addClass("ui-helper-hidden-accessible");m=this.element.is(":checked");if(m){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",m)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(b+" "+i+" "+j).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(l,m){this._super(l,m);if(l==="disabled"){if(m){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(l!==this.options.disabled){this._setOption("disabled",l)}if(this.type==="radio"){f(this.element[0]).each(function(){if(a(this).is(":checked")){a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var m=this.buttonElement.removeClass(j),n=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(m.empty()).text(),o=this.options.icons,p=o.primary&&o.secondary,l=[];if(o.primary||o.secondary){if(this.options.text){l.push("ui-button-text-icon"+(p?"s":(o.primary?"-primary":"-secondary")))}if(o.primary){m.prepend("<span class='ui-button-icon-primary ui-icon "+o.primary+"'></span>")}if(o.secondary){m.append("<span class='ui-button-icon-secondary ui-icon "+o.secondary+"'></span>")}if(!this.options.text){l.push(p?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){m.attr("title",a.trim(n))}}}else{l.push("ui-button-text-only")}m.addClass(l.join(" "))}});a.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)}this._super(l,m)},refresh:function(){var l=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery));(function($,undefined){$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={clearText:"Clear",closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false,showClearButton:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_doblur:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input[0].value.length==0){return}var reg=/^(\d{4})(\/|-)(\d{1,2})\2(\d{1,2})$/;var arr=inst.input[0].value.match(reg);if(arr==null){alert("??????????????????????????????????????????????????????????\n ???? 2012-12-22");var today=new Date();inst.input[0].value=today.getYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();inst.input[0].focus();return}var tempDate=new Date(arr[1],arr[3]-1,arr[4]);if((tempDate.getFullYear()==arr[1]&&(tempDate.getMonth()+1)==arr[3]&&tempDate.getDate()==arr[4])==false){alert("??????????????????????????????????????????????????????????\n ???? 2012-12-22");var today=new Date();inst.input[0].value=today.getYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();inst.input[0].focus();return}},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return}extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){this.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){var extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return}var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var showClearButton=this._get(inst,"showClearButton");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var clearControl='<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._clearDate('#"+inst.id+"');\">"+this._get(inst,"clearText")+"</button>";var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+((showClearButton)?clearControl:"")+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.ui.ie6&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.delegate(selector,"mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).delegate(selector,"mouseover",function(){if(!$.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.9.2";window["DP_jQuery_"+dpuuid]=$})(jQuery);(function(a,e){var d="ui-dialog ui-widget ui-widget-content ui-corner-all ",c={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},b={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};a.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var g=a(this).css(f).offset().top;if(g<0){a(this).css("top",f.top-g)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.options.title=this.options.title||this.originalTitle;var g=this,f=this.options,h=f.title||"&#160;",i,l,m,k,j;i=(this.uiDialog=a("<div>")).addClass(d+f.dialogClass).css({display:"none",outline:0,zIndex:f.zIndex}).attr("tabIndex",-1).keydown(function(n){if(f.closeOnEscape&&!n.isDefaultPrevented()&&n.keyCode&&n.keyCode===a.ui.keyCode.ESCAPE){g.close(n);n.preventDefault()}}).mousedown(function(n){g.moveToTop(false,n)}).appendTo("body");this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(i);l=(this.uiDialogTitlebar=a("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){i.focus()}).prependTo(i);m=a("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(n){n.preventDefault();g.close(n)}).appendTo(l);(this.uiDialogTitlebarCloseText=a("<span>")).addClass("ui-icon ui-icon-closethick").text(f.closeText).appendTo(m);k=a("<span>").uniqueId().addClass("ui-dialog-title").html(h).prependTo(l);j=(this.uiDialogButtonPane=a("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");(this.uiButtonSet=a("<div>")).addClass("ui-dialog-buttonset").appendTo(j);i.attr({role:"dialog","aria-labelledby":k.attr("id")});l.find("*").add(l).disableSelection();this._hoverable(m);this._focusable(m);if(f.draggable&&a.fn.draggable){this._makeDraggable()}if(f.resizable&&a.fn.resizable){this._makeResizable()}this._createButtons(f.buttons);this._isOpen=false;if(a.fn.bgiframe){i.bgiframe()}this._on(i,{keydown:function(n){if(!f.modal||n.keyCode!==a.ui.keyCode.TAB){return}var q=a(":tabbable",i),o=q.filter(":first"),p=q.filter(":last");if(n.target===p[0]&&!n.shiftKey){o.focus(1);return false}else{if(n.target===o[0]&&n.shiftKey){p.focus(1);return false}}}})},_init:function(){if(this.options.autoOpen){this.open()}},_destroy:function(){var f,g=this.oldPosition;if(this.overlay){this.overlay.destroy()}this.uiDialog.hide();this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}f=g.parent.children().eq(g.index);if(f.length&&f[0]!==this.element[0]){f.before(this.element)}else{g.parent.append(this.element)}},widget:function(){return this.uiDialog},close:function(f){var h=this,g,i;if(!this._isOpen){return}if(false===this._trigger("beforeClose",f)){return}this._isOpen=false;if(this.overlay){this.overlay.destroy()}if(this.options.hide){this._hide(this.uiDialog,this.options.hide,function(){h._trigger("close",f)})}else{this.uiDialog.hide();this._trigger("close",f)}a.ui.dialog.overlay.resize();if(this.options.modal){g=0;a(".ui-dialog").each(function(){if(this!==h.uiDialog[0]){i=a(this).css("z-index");if(!isNaN(i)){g=Math.max(g,i)}}});a.ui.dialog.maxZ=g}return this},isOpen:function(){return this._isOpen},moveToTop:function(g,f){var h=this.options,i;if((h.modal&&!g)||(!h.stack&&!h.modal)){return this._trigger("focus",f)}if(h.zIndex>a.ui.dialog.maxZ){a.ui.dialog.maxZ=h.zIndex}if(this.overlay){a.ui.dialog.maxZ+=1;a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ;this.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ)}i={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()};a.ui.dialog.maxZ+=1;this.uiDialog.css("z-index",a.ui.dialog.maxZ);this.element.attr(i);this._trigger("focus",f);return this},open:function(){if(this._isOpen){return}var f,g=this.options,h=this.uiDialog;this._size();this._position(g.position);h.show(g.show);this.overlay=g.modal?new a.ui.dialog.overlay(this):null;this.moveToTop(true);f=this.element.find(":tabbable");if(!f.length){f=this.uiDialogButtonPane.find(":tabbable");if(!f.length){f=h}}f.eq(0).focus();this._isOpen=true;this._trigger("open");return this},_createButtons:function(f){var h=this,g=false;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(typeof f==="object"&&f!==null){a.each(f,function(){return !(g=true)})}if(g){a.each(f,function(k,l){var i,j;l=a.isFunction(l)?{click:l,text:k}:l;l=a.extend({type:"button"},l);j=l.click;l.click=function(){j.apply(h.element[0],arguments)};i=a("<button></button>",l).appendTo(h.uiButtonSet);if(a.fn.button){i.button()}});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)}else{this.uiDialog.removeClass("ui-dialog-buttons")}},_makeDraggable:function(){var h=this,g=this.options;function f(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,j){a(this).addClass("ui-dialog-dragging");h._trigger("dragStart",i,f(j))},drag:function(i,j){h._trigger("drag",i,f(j))},stop:function(i,j){g.position=[j.position.left-h.document.scrollLeft(),j.position.top-h.document.scrollTop()];a(this).removeClass("ui-dialog-dragging");h._trigger("dragStop",i,f(j));a.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===e?this.options.resizable:g);var k=this,h=this.options,i=this.uiDialog.css("position"),j=typeof g==="string"?g:"n,e,s,w,se,sw,ne,nw";function f(l){return{originalPosition:l.originalPosition,originalSize:l.originalSize,position:l.position,size:l.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:this._minHeight(),handles:j,start:function(l,m){a(this).addClass("ui-dialog-resizing");k._trigger("resizeStart",l,f(m))},resize:function(l,m){k._trigger("resize",l,f(m))},stop:function(l,m){a(this).removeClass("ui-dialog-resizing");h.height=a(this).height();h.width=a(this).width();k._trigger("resizeStop",l,f(m));a.ui.dialog.overlay.resize()}}).css("position",i).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var f=this.options;if(f.height==="auto"){return f.minHeight}else{return Math.min(f.minHeight,f.height)}},_position:function(i){var g=[],h=[0,0],f;if(i){if(typeof i==="string"||(typeof i==="object"&&"0" in i)){g=i.split?i.split(" "):[i[0],i[1]];if(g.length===1){g[1]=g[0]}a.each(["left","top"],function(j,k){if(+g[j]===g[j]){h[j]=g[j];g[j]=k}});i={my:g[0]+(h[0]<0?h[0]:"+"+h[0])+" "+g[1]+(h[1]<0?h[1]:"+"+h[1]),at:g.join(" ")}}i=a.extend({},a.ui.dialog.prototype.options.position,i)}else{i=a.ui.dialog.prototype.options.position}f=this.uiDialog.is(":visible");if(!f){this.uiDialog.show()}this.uiDialog.position(i);if(!f){this.uiDialog.hide()}},_setOptions:function(f){var i=this,g={},h=false;a.each(f,function(j,k){i._setOption(j,k);if(j in c){h=true}if(j in b){g[j]=k}});if(h){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",g)}},_setOption:function(h,j){var f,g,i=this.uiDialog;switch(h){case"buttons":this._createButtons(j);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+j);break;case"dialogClass":i.removeClass(this.options.dialogClass).addClass(d+j);break;case"disabled":if(j){i.addClass("ui-dialog-disabled")}else{i.removeClass("ui-dialog-disabled")}break;case"draggable":f=i.is(":data(draggable)");if(f&&!j){i.draggable("destroy")}if(!f&&j){this._makeDraggable()}break;case"position":this._position(j);break;case"resizable":g=i.is(":data(resizable)");if(g&&!j){i.resizable("destroy")}if(g&&typeof j==="string"){i.resizable("option","handles",j)}if(!g&&j!==false){this._makeResizable(j)}break;case"title":a(".ui-dialog-title",this.uiDialogTitlebar).html(""+(j||"&#160;"));break}this._super(h,j)},_size:function(){var i,h,f,j=this.options,g=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(j.minWidth>j.width){j.width=j.minWidth}i=this.uiDialog.css({height:"auto",width:j.width}).outerHeight();h=Math.max(0,j.minHeight-i);if(j.height==="auto"){if(a.support.minHeight){this.element.css({minHeight:h,height:"auto"})}else{this.uiDialog.show();f=this.element.css("height","auto").height();if(!g){this.uiDialog.hide()}this.element.height(Math.max(f,h))}}else{this.element.height(Math.max(j.height-i,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});a.extend(a.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(f){var g=f.attr("id");if(!g){this.uuid+=1;g=this.uuid}return"ui-dialog-title-"+g},overlay:function(f){this.$el=a.ui.dialog.overlay.create(f)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(f){return f+".dialog-overlay"}).join(" "),create:function(g){if(this.instances.length===0){setTimeout(function(){if(a.ui.dialog.overlay.instances.length){a(document).bind(a.ui.dialog.overlay.events,function(h){if(a(h.target).zIndex()<a.ui.dialog.overlay.maxZ){return false}})}},1);a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var f=(this.oldInstances.pop()||a("<div>").addClass("ui-widget-overlay"));a(document).bind("keydown.dialog-overlay",function(h){var i=a.ui.dialog.overlay.instances;if(i.length!==0&&i[i.length-1]===f&&g.options.closeOnEscape&&!h.isDefaultPrevented()&&h.keyCode&&h.keyCode===a.ui.keyCode.ESCAPE){g.close(h);h.preventDefault()}});f.appendTo(document.body).css({width:this.width(),height:this.height()});if(a.fn.bgiframe){f.bgiframe()}this.instances.push(f);return f},destroy:function(f){var g=a.inArray(f,this.instances),h=0;if(g!==-1){this.oldInstances.push(this.instances.splice(g,1)[0])}if(this.instances.length===0){a([document,window]).unbind(".dialog-overlay")}f.height(0).width(0).remove();a.each(this.instances,function(){h=Math.max(h,this.css("z-index"))});this.maxZ=h},height:function(){var g,f;if(a.ui.ie){g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);f=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(g<f){return a(window).height()+"px"}else{return g+"px"}}else{return a(document).height()+"px"}},width:function(){var g,f;if(a.ui.ie){g=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);f=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(g<f){return a(window).width()+"px"}else{return g+"px"}}else{return a(document).width()+"px"}},resize:function(){var f=a([]);a.each(a.ui.dialog.overlay.instances,function(){f=f.add(this)});f.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));(function(a,c){var b=false;a.widget("ui.menu",{version:"1.9.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(d){if(this.options.disabled){d.preventDefault()}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(d){d.preventDefault()},"click .ui-state-disabled > a":function(d){d.preventDefault()},"click .ui-menu-item:has(a)":function(d){var e=a(d.target).closest(".ui-menu-item");if(!b&&e.not(".ui-state-disabled").length){b=true;this.select(d);if(e.has(".ui-menu").length){this.expand(d)}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}}},"mouseenter .ui-menu-item":function(d){var e=a(d.currentTarget);e.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(d,e)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(d,f){var e=this.active||this.element.children(".ui-menu-item").eq(0);if(!f){this.focus(d,e)}},blur:function(d){this._delay(function(){if(!a.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(d)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(d){if(!a(d.target).closest(".ui-menu").length){this.collapseAll(d)}b=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var d=a(this);if(d.data("ui-menu-submenu-carat")){d.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(f){var g,h,d,k,j,i=true;function e(l){return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(f.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(f);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(f);break;case a.ui.keyCode.HOME:this._move("first","first",f);break;case a.ui.keyCode.END:this._move("last","last",f);break;case a.ui.keyCode.UP:this.previous(f);break;case a.ui.keyCode.DOWN:this.next(f);break;case a.ui.keyCode.LEFT:this.collapse(f);break;case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(f)}break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(f);break;case a.ui.keyCode.ESCAPE:this.collapse(f);break;default:i=false;h=this.previousFilter||"";d=String.fromCharCode(f.keyCode);k=false;clearTimeout(this.filterTimer);if(d===h){k=true}else{d=h+d}j=new RegExp("^"+e(d),"i");g=this.activeMenu.children(".ui-menu-item").filter(function(){return j.test(a(this).children("a").text())});g=k&&g.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):g;if(!g.length){d=String.fromCharCode(f.keyCode);j=new RegExp("^"+e(d),"i");g=this.activeMenu.children(".ui-menu-item").filter(function(){return j.test(a(this).children("a").text())})}if(g.length){this.focus(f,g);if(g.length>1){this.previousFilter=d;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(i){f.preventDefault()}},_activate:function(d){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(d)}else{this.select(d)}}},refresh:function(){var e,d=this.options.icons.submenu,f=this.element.find(this.options.menus);f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var h=a(this),g=h.prev("a"),i=a("<span>").addClass("ui-menu-icon ui-icon "+d).data("ui-menu-submenu-carat",true);g.attr("aria-haspopup","true").prepend(i);h.attr("aria-labelledby",g.attr("id"))});e=f.add(this.element);e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});e.children(":not(.ui-menu-item)").each(function(){var g=a(this);if(!/[^\-????????????s]/.test(g.text())){g.addClass("ui-widget-content ui-menu-divider")}});e.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(d,f){var g,e;this.blur(d,d&&d.type==="focus");this._scrollIntoView(f);this.active=f.first();e=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(d&&d.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}g=f.children(".ui-menu");if(g.length&&(/^mouse/.test(d.type))){this._startOpening(g)}this.activeMenu=f.parent();this._trigger("focus",d,{item:f})},_scrollIntoView:function(f){var d,i,h,j,e,g;if(this._hasScroll()){d=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;i=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;h=f.offset().top-this.activeMenu.offset().top-d-i;j=this.activeMenu.scrollTop();e=this.activeMenu.height();g=f.height();if(h<0){this.activeMenu.scrollTop(j+h)}else{if(h+g>e){this.activeMenu.scrollTop(j+h-e+g)}}}},blur:function(d,e){if(!e){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",d,{item:this.active})},_startOpening:function(d){clearTimeout(this.timer);if(d.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(d)},this.delay)},_open:function(e){var d=a.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true");e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(d)},collapseAll:function(e,d){clearTimeout(this.timer);this.timer=this._delay(function(){var f=d?this.element:a(e&&e.target).closest(this.element.find(".ui-menu"));if(!f.length){f=this.element}this._close(f);this.blur(e);this.activeMenu=f},this.delay)},_close:function(d){if(!d){d=this.active?this.active.parent():this.element}d.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(d){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(e&&e.length){this._close();this.focus(d,e)}},expand:function(d){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(e&&e.length){this._open(e.parent());this._delay(function(){this.focus(d,e)})}},next:function(d){this._move("next","first",d)},previous:function(d){this._move("prev","last",d)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(d,f,e){var g;if(this.active){if(d==="first"||d==="last"){g=this.active[d==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{g=this.active[d+"All"](".ui-menu-item").eq(0)}}if(!g||!g.length||!this.active){g=this.activeMenu.children(".ui-menu-item")[f]()}this.focus(e,g)},nextPage:function(e){var g,d,f;if(!this.active){this.next(e);return}if(this.isLastItem()){return}if(this._hasScroll()){d=this.active.offset().top;f=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){g=a(this);return g.offset().top-d-f<0});this.focus(e,g)}else{this.focus(e,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(e){var g,d,f;if(!this.active){this.next(e);return}if(this.isFirstItem()){return}if(this._hasScroll()){d=this.active.offset().top;f=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){g=a(this);return g.offset().top-d+f>0});this.focus(e,g)}else{this.focus(e,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(d){this.active=this.active||a(d.target).closest(".ui-menu-item");var e={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(d,true)}this._trigger("select",d,e)}})}(jQuery));(function(a,b){a.widget("ui.progressbar",{version:"1.9.2",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(c){if(c===b){return this._value()}this._setOption("value",c);return this},_setOption:function(c,d){if(c==="value"){this.options.value=d;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}this._super(c,d)},_value:function(){var c=this.options.value;if(typeof c!=="number"){c=0}return Math.min(this.options.max,Math.max(this.min,c))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var d=this.value(),c=this._percentage();if(this.oldValue!==d){this.oldValue=d;this._trigger("change")}this.valueDiv.toggle(d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",d)}})})(jQuery);(function(a,c){var b=5;a.widget("ui.slider",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var h,f,j=this.options,d=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),e="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(j.disabled?" ui-slider-disabled ui-disabled":""));this.range=a([]);if(j.range){if(j.range===true){if(!j.values){j.values=[this._valueMin(),this._valueMin()]}if(j.values.length&&j.values.length!==2){j.values=[j.values[0],j.values[0]]}}this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((j.range==="min"||j.range==="max")?" ui-slider-range-"+j.range:""))}f=(j.values&&j.values.length)||1;for(h=d.length;h<f;h++){g.push(e)}this.handles=d.add(a(g.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(i){i.preventDefault()}).mouseenter(function(){if(!j.disabled){a(this).addClass("ui-state-hover")}}).mouseleave(function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(!j.disabled){a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}else{a(this).blur()}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(k){a(this).data("ui-slider-handle-index",k)});this._on(this.handles,{keydown:function(l){var i,k,n,o,m=a(l.target).data("ui-slider-handle-index");switch(l.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:l.preventDefault();if(!this._keySliding){this._keySliding=true;a(l.target).addClass("ui-state-active");i=this._start(l,m);if(i===false){return}}break}o=this.options.step;if(this.options.values&&this.options.values.length){k=n=this.values(m)}else{k=n=this.value()}switch(l.keyCode){case a.ui.keyCode.HOME:n=this._valueMin();break;case a.ui.keyCode.END:n=this._valueMax();break;case a.ui.keyCode.PAGE_UP:n=this._trimAlignValue(k+((this._valueMax()-this._valueMin())/b));break;case a.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(k-((this._valueMax()-this._valueMin())/b));break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(k===this._valueMax()){return}n=this._trimAlignValue(k+o);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(k===this._valueMin()){return}n=this._trimAlignValue(k-o);break}this._slide(l,m,n)},keyup:function(i){var k=a(i.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(i,k);this._change(i,k);a(i.target).removeClass("ui-state-active")}}});this._refreshValue();this._animateOff=false},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(g){var m,j,f,e,h,d,l,i,n=this,k=this.options;if(k.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();m={x:g.pageX,y:g.pageY};j=this._normValueFromMouse(m);f=this._valueMax()-this._valueMin()+1;this.handles.each(function(o){var p=Math.abs(j-n.values(o));if(f>p){f=p;e=a(this);h=o}});if(k.range===true&&this.values(1)===k.min){h+=1;e=a(this.handles[h])}d=this._start(g,h);if(d===false){return false}this._mouseSliding=true;this._handleIndex=h;e.addClass("ui-state-active").focus();l=e.offset();i=!a(g.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=i?{left:0,top:0}:{left:g.pageX-l.left-(e.width()/2),top:g.pageY-l.top-(e.height()/2)-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(g,h,j)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(d){var f={x:d.pageX,y:d.pageY},e=this._normValueFromMouse(f);this._slide(d,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(g){var f,e,d,i,h;if(this.orientation==="horizontal"){f=this.elementSize.width;e=g.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{f=this.elementSize.height;e=g.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}d=(e/f);if(d>1){d=1}if(d<0){d=0}if(this.orientation==="vertical"){d=1-d}i=this._valueMax()-this._valueMin();h=this._valueMin()+d*i;return this._trimAlignValue(h)},_start:function(d,e){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(e);f.values=this.values()}return this._trigger("start",d,f)},_slide:function(e,f,g){var i,h,d;if(this.options.values&&this.options.values.length){i=this.values(f?0:1);if((this.options.values.length===2&&this.options.range===true)&&((f===0&&g>i)||(f===1&&g<i))){g=i}if(g!==this.values(f)){h=this.values();h[f]=g;d=this._trigger("slide",e,{handle:this.handles[f],value:g,values:h});i=this.values(f?0:1);if(d!==false){this.values(f,g,true)}}}else{if(g!==this.value()){d=this._trigger("slide",e,{handle:this.handles[f],value:g});if(d!==false){this.value(g)}}}},_stop:function(d,e){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(e);f.values=this.values()}this._trigger("stop",d,f)},_change:function(d,e){if(!this._keySliding&&!this._mouseSliding){var f={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){f.value=this.values(e);f.values=this.values()}this._trigger("change",d,f)}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);this._refreshValue();this._change(null,0);return}return this._value()},values:function(e,f){var h,g,d;if(arguments.length>1){this.options.values[e]=this._trimAlignValue(f);this._refreshValue();this._change(null,e);return}if(arguments.length){if(a.isArray(arguments[0])){h=this.options.values;g=arguments[0];for(d=0;d<h.length;d+=1){h[d]=this._trimAlignValue(g[d]);this._change(null,d)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(e,g){var d,f=0;if(a.isArray(this.options.values)){f=this.options.values.length}a.Widget.prototype._setOption.apply(this,arguments);switch(e){case"disabled":if(g){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.prop("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.prop("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(d=0;d<f;d+=1){this._change(null,d)}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break}},_value:function(){var d=this.options.value;d=this._trimAlignValue(d);return d},_values:function(e){var f,g,d;if(arguments.length){f=this.options.values[e];f=this._trimAlignValue(f);return f}else{g=this.options.values.slice();for(d=0;d<g.length;d+=1){g[d]=this._trimAlignValue(g[d])}return g}},_trimAlignValue:function(f){if(f<=this._valueMin()){return this._valueMin()}if(f>=this._valueMax()){return this._valueMax()}var e=(this.options.step>0)?this.options.step:1,g=(f-this._valueMin())%e,d=f-g;if(Math.abs(g)*2>=e){d+=(g>0)?e:(-e)}return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var f,j,k,m,l,h=this.options.range,g=this.options,i=this,e=(!this._animateOff)?g.animate:false,d={};if(this.options.values&&this.options.values.length){this.handles.each(function(n){j=(i.values(n)-i._valueMin())/(i._valueMax()-i._valueMin())*100;d[i.orientation==="horizontal"?"left":"bottom"]=j+"%";a(this).stop(1,1)[e?"animate":"css"](d,g.animate);if(i.options.range===true){if(i.orientation==="horizontal"){if(n===0){i.range.stop(1,1)[e?"animate":"css"]({left:j+"%"},g.animate)}if(n===1){i.range[e?"animate":"css"]({width:(j-f)+"%"},{queue:false,duration:g.animate})}}else{if(n===0){i.range.stop(1,1)[e?"animate":"css"]({bottom:(j)+"%"},g.animate)}if(n===1){i.range[e?"animate":"css"]({height:(j-f)+"%"},{queue:false,duration:g.animate})}}}f=j})}else{k=this.value();m=this._valueMin();l=this._valueMax();j=(l!==m)?(k-m)/(l-m)*100:0;d[this.orientation==="horizontal"?"left":"bottom"]=j+"%";this.handle.stop(1,1)[e?"animate":"css"](d,g.animate);if(h==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:j+"%"},g.animate)}if(h==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-j)+"%"},{queue:false,duration:g.animate})}if(h==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:j+"%"},g.animate)}if(h==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-j)+"%"},{queue:false,duration:g.animate})}}}})}(jQuery));(function(a){function b(c){return function(){var d=this.element.val();c.apply(this,arguments);this._refresh();if(d!==this.element.val()){this._trigger("change")}}}a.widget("ui.spinner",{version:"1.9.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var d={},c=this.element;a.each(["min","max","step"],function(e,f){var g=c.attr(f);if(g!==undefined&&g.length){d[f]=g}});return d},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh();if(this.previous!==this.element.val()){this._trigger("change",c)}},mousewheel:function(d,c){if(!c){return}if(!this.spinning&&!this._start(d)){return false}this._spin((c>0?1:-1)*this.options.step,d);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(d)}},100);d.preventDefault()},"mousedown .ui-spinner-button":function(d){var e;e=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function c(){var f=this.element[0]===this.document[0].activeElement;if(!f){this.element.focus();this.previous=e;this._delay(function(){this.previous=e})}}d.preventDefault();c.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;c.call(this)});if(this._start(d)===false){return}this._repeat(null,a(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!a(c.currentTarget).hasClass("ui-state-active")){return}if(this._start(c)===false){return false}this._repeat(null,a(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())}if(this.options.disabled){this.disable()}},_keydown:function(c){var e=this.options,d=a.ui.keyCode;switch(c.keyCode){case d.UP:this._repeat(null,1,c);return true;case d.DOWN:this._repeat(null,-1,c);return true;case d.PAGE_UP:this._repeat(null,e.page,c);return true;case d.PAGE_DOWN:this._repeat(null,-e.page,c);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(d,e,c){d=d||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,e,c)},d);this._spin(e*this.options.step,c)},_spin:function(d,c){var e=this.value()||0;if(!this.counter){this.counter=1}e=this._adjustValue(e+d*this._increment(this.counter));if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);this.counter++}},_increment:function(c){var d=this.options.incremental;if(d){return a.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)}return 1},_precision:function(){var c=this._precisionOf(this.options.step);if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))}return c},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");return c===-1?0:e.length-c-1},_adjustValue:function(f){var d,c,e=this.options;d=e.min!==null?e.min:0;c=f-d;c=Math.round(c/e.step)*e.step;f=d+c;f=parseFloat(f.toFixed(this._precision()));if(e.max!==null&&f>e.max){return e.max}if(e.min!==null&&f<e.min){return e.min}return f},_stop:function(c){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",c)},_setOption:function(c,e){if(c==="culture"||c==="numberFormat"){var d=this._parse(this.element.val());this.options[c]=e;this.element.val(this._format(d));return}if(c==="max"||c==="min"||c==="step"){if(typeof e==="string"){e=this._parse(e)}}this._super(c,e);if(c==="disabled"){if(e){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:b(function(c){this._super(c);this._value(this.element.val())}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c}return c===""||isNaN(c)?null:c},_format:function(c){if(c===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,c){var d;if(e!==""){d=this._parse(e);if(d!==null){if(!c){d=this._adjustValue(d)}e=this._format(d)}}this.element.val(e);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:b(function(c){this._stepUp(c)}),_stepUp:function(c){this._spin((c||1)*this.options.step)},stepDown:b(function(c){this._stepDown(c)}),_stepDown:function(c){this._spin((c||1)*-this.options.step)},pageUp:b(function(c){this._stepUp((c||1)*this.options.page)}),pageDown:b(function(c){this._stepDown((c||1)*this.options.page)}),value:function(c){if(!arguments.length){return this._parse(this.element.val())}b(this._value).call(this,c)},widget:function(){return this.uiSpinner}})}(jQuery));(function(a,f){var e=0,d=/#.*$/;function b(){return ++e}function c(g){return g.hash.length>1&&g.href.replace(d,"")===location.href.replace(d,"").replace(/\s/g,"%20")}a.widget("ui.tabs",{version:"1.9.2",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var j=this,i=this.options,g=i.active,h=location.hash.substring(1);this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(k){if(a(this).is(".ui-state-disabled")){k.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(a(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();if(g===null){if(h){this.tabs.each(function(k,l){if(a(l).attr("aria-controls")===h){g=k;return false}})}if(g===null){g=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(g===null||g===-1){g=this.tabs.length?0:false}}if(g!==false){g=this.tabs.index(this.tabs.eq(g));if(g===-1){g=i.collapsible?false:0}}i.active=g;if(!i.collapsible&&i.active===false&&this.anchors.length){i.active=0}if(a.isArray(i.disabled)){i.disabled=a.unique(i.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(k){return j.tabs.index(k)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(this.options.active)}else{this.active=a()}this._refresh();if(this.active.length){this.load(i.active)}},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?a():this._getPanelForTab(this.active)}},_tabKeydown:function(g){var h=a(this.document[0].activeElement).closest("li"),j=this.tabs.index(h),i=true;if(this._handlePageNav(g)){return}switch(g.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:j++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:i=false;j--;break;case a.ui.keyCode.END:j=this.anchors.length-1;break;case a.ui.keyCode.HOME:j=0;break;case a.ui.keyCode.SPACE:g.preventDefault();clearTimeout(this.activating);this._activate(j);return;case a.ui.keyCode.ENTER:g.preventDefault();clearTimeout(this.activating);this._activate(j===this.options.active?false:j);return;default:return}g.preventDefault();clearTimeout(this.activating);j=this._focusNextTab(j,i);if(!g.ctrlKey){h.attr("aria-selected","false");this.tabs.eq(j).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",j)},this.delay)}},_panelKeydown:function(g){if(this._handlePageNav(g)){return}if(g.ctrlKey&&g.keyCode===a.ui.keyCode.UP){g.preventDefault();this.active.focus()}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===a.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(g.altKey&&g.keyCode===a.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(i,h){var j=this.tabs.length-1;function g(){if(i>j){i=0}if(i<0){i=j}return i}while(a.inArray(g(),this.options.disabled)!==-1){i=h?i+1:i-1}return i},_focusNextTab:function(h,g){h=this._findNextTab(h,g);this.tabs.eq(h).focus();return h},_setOption:function(g,h){if(g==="active"){this._activate(h);return}if(g==="disabled"){this._setupDisabled(h);return}this._super(g,h);if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);if(!h&&this.options.active===false){this._activate(0)}}if(g==="event"){this._setupEvents(h)}if(g==="heightStyle"){this._setupHeightStyle(h)}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+b()},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");h.disabled=a.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)});this._processTabs();if(h.active===false||!this.anchors.length){h.active=false;this.active=a()}else{if(this.active.length&&!a.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;this.active=a()}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))}}else{h.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var g=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=a();this.anchors.each(function(k,h){var o,m,n,j=a(h).uniqueId().attr("id"),p=a(h).closest("li"),l=p.attr("aria-controls");if(c(h)){o=h.hash;m=g.element.find(g._sanitizeSelector(o))}else{n=g._tabId(p);o="#"+n;m=g.element.find(o);if(!m.length){m=g._createPanel(n);m.insertAfter(g.panels[k-1]||g.tablist)}m.attr("aria-live","polite")}if(m.length){g.panels=g.panels.add(m)}if(l){p.data("ui-tabs-aria-controls",l)}p.attr({"aria-controls":o.substring(1),"aria-labelledby":j});m.attr("aria-labelledby",j)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(g){return a("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(g){if(a.isArray(g)){if(!g.length){g=false}else{if(g.length===this.anchors.length){g=true}}}for(var h=0,j;(j=this.tabs[h]);h++){if(g===true||a.inArray(h,g)!==-1){a(j).addClass("ui-state-disabled").attr("aria-disabled","true")}else{a(j).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=g},_setupEvents:function(g){var h={click:function(i){i.preventDefault()}};if(g){a.each(g.split(" "),function(j,i){h[i]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,h);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(g){var h,i,j=this.element.parent();if(g==="fill"){if(!a.support.minHeight){i=j.css("overflow");j.css("overflow","hidden")}h=j.height();this.element.siblings(":visible").each(function(){var k=a(this),l=k.css("position");if(l==="absolute"||l==="fixed"){return}h-=k.outerHeight(true)});if(i){j.css("overflow",i)}this.element.children().not(this.panels).each(function(){h-=a(this).outerHeight(true)});this.panels.each(function(){a(this).height(Math.max(0,h-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")}else{if(g==="auto"){h=0;this.panels.each(function(){h=Math.max(h,a(this).height("").height())}).height(h)}}},_eventHandler:function(k){var m=this.options,g=this.active,h=a(k.currentTarget),n=h.closest("li"),i=n[0]===g[0],j=i&&m.collapsible,p=j?a():this._getPanelForTab(n),o=!g.length?a():this._getPanelForTab(g),l={oldTab:g,oldPanel:o,newTab:j?a():n,newPanel:p};k.preventDefault();if(n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||(i&&!m.collapsible)||(this._trigger("beforeActivate",k,l)===false)){return}m.active=j?false:this.tabs.index(n);this.active=i?a():n;if(this.xhr){this.xhr.abort()}if(!o.length&&!p.length){a.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(p.length){this.load(this.tabs.index(n),k)}this._toggle(k,l)},_toggle:function(h,i){var k=this,m=i.newPanel,l=i.oldPanel;this.running=true;function g(){k.running=false;k._trigger("activate",h,i)}function j(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(m.length&&k.options.show){k._show(m,k.options.show,g)}else{m.show();g()}}if(l.length&&this.options.hide){this._hide(l,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");j()})}else{i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");l.hide();j()}l.attr({"aria-expanded":"false","aria-hidden":"true"});i.oldTab.attr("aria-selected","false");if(m.length&&l.length){i.oldTab.attr("tabIndex",-1)}else{if(m.length){this.tabs.filter(function(){return a(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}m.attr({"aria-expanded":"true","aria-hidden":"false"});i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(i){var h,g=this._findActive(i);if(g[0]===this.active[0]){return}if(!g.length){g=this.active}h=g.find(".ui-tabs-anchor")[0];this._eventHandler({target:h,currentTarget:h,preventDefault:a.noop})},_findActive:function(g){return g===false?a():this.tabs.eq(g)},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))}return g},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId();this.tabs.add(this.panels).each(function(){if(a.data(this,"ui-tabs-destroy")){a(this).remove()}else{a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var g=a(this),h=g.data("ui-tabs-aria-controls");if(h){g.attr("aria-controls",h)}else{g.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(h){var g=this.options.disabled;if(g===false){return}if(h===f){g=false}else{h=this._getIndex(h);if(a.isArray(g)){g=a.map(g,function(i){return i!==h?i:null})}else{g=a.map(this.tabs,function(i,j){return j!==h?j:null})}}this._setupDisabled(g)},disable:function(h){var g=this.options.disabled;if(g===true){return}if(h===f){g=true}else{h=this._getIndex(h);if(a.inArray(h,g)!==-1){return}if(a.isArray(g)){g=a.merge([h],g).sort()}else{g=[h]}}this._setupDisabled(g)},load:function(j,h){j=this._getIndex(j);var m=this,l=this.tabs.eq(j),g=l.find(".ui-tabs-anchor"),k=this._getPanelForTab(l),i={tab:l,panel:k};if(c(g[0])){return}this.xhr=a.ajax(this._ajaxSettings(g,h,i));if(this.xhr&&this.xhr.statusText!=="canceled"){l.addClass("ui-tabs-loading");k.attr("aria-busy","true");this.xhr.success(function(n){setTimeout(function(){k.html(n);m._trigger("load",h,i)},1)}).complete(function(n,o){setTimeout(function(){if(o==="abort"){m.panels.stop(false,true)}l.removeClass("ui-tabs-loading");k.removeAttr("aria-busy");if(n===m.xhr){delete m.xhr}},1)})}},_ajaxSettings:function(g,h,i){var j=this;return{url:g.attr("href"),beforeSend:function(k,l){return j._trigger("beforeLoad",h,a.extend({jqXHR:k,ajaxSettings:l},i))}}},_getPanelForTab:function(h){var g=a(h).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+g))}});if(a.uiBackCompat!==false){a.ui.tabs.prototype._ui=function(h,g){return{tab:h,panel:g,index:this.anchors.index(h)}};a.widget("ui.tabs",a.ui.tabs,{url:function(g,h){this.anchors.eq(g).attr("href",h)}});a.widget("ui.tabs",a.ui.tabs,{options:{ajaxOptions:null,cache:false},_create:function(){this._super();var g=this;this._on({tabsbeforeload:function(h,i){if(a.data(i.tab[0],"cache.tabs")){h.preventDefault();return}i.jqXHR.success(function(){if(g.options.cache){a.data(i.tab[0],"cache.tabs",true)}})}})},_ajaxSettings:function(h,i,j){var g=this.options.ajaxOptions;return a.extend({},g,{error:function(m,l){try{g.error(m,l,j.tab.closest("li").index(),j.tab[0])}catch(k){}}},this._superApply(arguments))},_setOption:function(g,h){if(g==="cache"&&h===false){this.anchors.removeData("cache.tabs")}this._super(g,h)},_destroy:function(){this.anchors.removeData("cache.tabs");this._super()},url:function(g){this.anchors.eq(g).removeData("cache.tabs");this._superApply(arguments)}});a.widget("ui.tabs",a.ui.tabs,{abort:function(){if(this.xhr){this.xhr.abort()}}});a.widget("ui.tabs",a.ui.tabs,{options:{spinner:"<em>Loading&#8230;</em>"},_create:function(){this._super();this._on({tabsbeforeload:function(g,j){if(g.target!==this.element[0]||!this.options.spinner){return}var i=j.tab.find("span"),h=i.html();i.html(this.options.spinner);j.jqXHR.complete(function(){i.html(h)})}})}});a.widget("ui.tabs",a.ui.tabs,{options:{enable:null,disable:null},enable:function(g){var h=this.options,i;if(g&&h.disabled===true||(a.isArray(h.disabled)&&a.inArray(g,h.disabled)!==-1)){i=true}this._superApply(arguments);if(i){this._trigger("enable",null,this._ui(this.anchors[g],this.panels[g]))}},disable:function(g){var h=this.options,i;if(g&&h.disabled===false||(a.isArray(h.disabled)&&a.inArray(g,h.disabled)===-1)){i=true}this._superApply(arguments);if(i){this._trigger("disable",null,this._ui(this.anchors[g],this.panels[g]))}}});a.widget("ui.tabs",a.ui.tabs,{options:{add:null,remove:null,tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},add:function(n,j,i){if(i===f){i=this.anchors.length}var g,m,l=this.options,k=a(l.tabTemplate.replace(/#\{href\}/g,n).replace(/#\{label\}/g,j)),h=!n.indexOf("#")?n.replace("#",""):this._tabId(k);k.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy",true);k.attr("aria-controls",h);g=i>=this.tabs.length;m=this.element.find("#"+h);if(!m.length){m=this._createPanel(h);if(g){if(i>0){m.insertAfter(this.panels.eq(-1))}else{m.appendTo(this.element)}}else{m.insertBefore(this.panels[i])}}m.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide();if(g){k.appendTo(this.tablist)}else{k.insertBefore(this.tabs[i])}l.disabled=a.map(l.disabled,function(o){return o>=i?++o:o});this.refresh();if(this.tabs.length===1&&l.active===false){this.option("active",0)}this._trigger("add",null,this._ui(this.anchors[i],this.panels[i]));return this},remove:function(g){g=this._getIndex(g);var h=this.options,j=this.tabs.eq(g).remove(),i=this._getPanelForTab(j).remove();if(j.hasClass("ui-tabs-active")&&this.anchors.length>2){this._activate(g+(g+1<this.anchors.length?1:-1))}h.disabled=a.map(a.grep(h.disabled,function(k){return k!==g}),function(k){return k>=g?--k:k});this.refresh();this._trigger("remove",null,this._ui(j.find("a")[0],i[0]));return this}});a.widget("ui.tabs",a.ui.tabs,{length:function(){return this.anchors.length}});a.widget("ui.tabs",a.ui.tabs,{options:{idPrefix:"ui-tabs-"},_tabId:function(h){var g=h.is("li")?h.find("a[href]"):h;g=g[0];return a(g).closest("li").attr("aria-controls")||g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF\-]/g,"")||this.options.idPrefix+b()}});a.widget("ui.tabs",a.ui.tabs,{options:{panelTemplate:"<div></div>"},_createPanel:function(g){return a(this.options.panelTemplate).attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)}});a.widget("ui.tabs",a.ui.tabs,{_create:function(){var g=this.options;if(g.active===null&&g.selected!==f){g.active=g.selected===-1?false:g.selected}this._super();g.selected=g.active;if(g.selected===false){g.selected=-1}},_setOption:function(g,i){if(g!=="selected"){return this._super(g,i)}var h=this.options;this._super("active",i===-1?false:i);h.selected=h.active;if(h.selected===false){h.selected=-1}},_eventHandler:function(){this._superApply(arguments);this.options.selected=this.options.active;if(this.options.selected===false){this.options.selected=-1}}});a.widget("ui.tabs",a.ui.tabs,{options:{show:null,select:null},_create:function(){this._super();if(this.options.active!==false){this._trigger("show",null,this._ui(this.active.find(".ui-tabs-anchor")[0],this._getPanelForTab(this.active)[0]))}},_trigger:function(l,h,g){var k,i,j=this._superApply(arguments);if(!j){return false}if(l==="beforeActivate"){k=g.newTab.length?g.newTab:g.oldTab;i=g.newPanel.length?g.newPanel:g.oldPanel;j=this._super("select",h,{tab:k.find(".ui-tabs-anchor")[0],panel:i[0],index:k.closest("li").index()})}else{if(l==="activate"&&g.newTab.length){j=this._super("show",h,{tab:g.newTab.find(".ui-tabs-anchor")[0],panel:g.newPanel[0],index:g.newTab.closest("li").index()})}}return j}});a.widget("ui.tabs",a.ui.tabs,{select:function(g){g=this._getIndex(g);if(g===-1){if(this.options.collapsible&&this.options.selected!==-1){g=this.options.selected}else{return}}this.anchors.eq(g).trigger(this.options.event+this.eventNamespace)}});(function(){var g=0;a.widget("ui.tabs",a.ui.tabs,{options:{cookie:null},_create:function(){var i=this.options,h;if(i.active==null&&i.cookie){h=parseInt(this._cookie(),10);if(h===-1){h=false}i.active=h}this._super()},_cookie:function(h){var i=[this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++g))];if(arguments.length){i.push(h===false?-1:h);i.push(this.options.cookie)}return a.cookie.apply(null,i)},_refresh:function(){this._super();if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_eventHandler:function(){this._superApply(arguments);if(this.options.cookie){this._cookie(this.options.active,this.options.cookie)}},_destroy:function(){this._super();if(this.options.cookie){this._cookie(null,this.options.cookie)}}})})();a.widget("ui.tabs",a.ui.tabs,{_trigger:function(j,i,h){var g=a.extend({},h);if(j==="load"){g.panel=g.panel[0];g.tab=g.tab.find(".ui-tabs-anchor")[0]}return this._super(j,i,g)}});a.widget("ui.tabs",a.ui.tabs,{options:{fx:null},_getFx:function(){var h,i,g=this.options.fx;if(g){if(a.isArray(g)){h=g[0];i=g[1]}else{h=i=g}}return g?{show:i,hide:h}:null},_toggle:function(h,i){var l=this,n=i.newPanel,m=i.oldPanel,j=this._getFx();if(!j){return this._super(h,i)}l.running=true;function g(){l.running=false;l._trigger("activate",h,i)}function k(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(n.length&&j.show){n.animate(j.show,j.show.duration,function(){g()})}else{n.show();g()}}if(m.length&&j.hide){m.animate(j.hide,j.hide.duration,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");k()})}else{i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");m.hide();k()}}})}})(jQuery);(function(a){var c=0;function b(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);e.push(g);f.data("ui-tooltip-id",g).attr("aria-describedby",a.trim(e.join(" ")))}function d(f){var g=f.data("ui-tooltip-id"),e=(f.attr("aria-describedby")||"").split(/\s+/),h=a.inArray(g,e);if(h!==-1){e.splice(h,1)}f.removeData("ui-tooltip-id");e=a.trim(e.join(" "));if(e){f.attr("aria-describedby",e)}else{f.removeAttr("aria-describedby")}}a.widget("ui.tooltip",{version:"1.9.2",options:{content:function(){return a(this).attr("title")},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}},_setOption:function(e,g){var f=this;if(e==="disabled"){this[g?"_disable":"_enable"]();this.options[e]=g;return}this._super(e,g);if(e==="content"){a.each(this.tooltips,function(i,h){f._updateContent(h)})}},_disable:function(){var e=this;a.each(this.tooltips,function(h,f){var g=a.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true)});this.element.find(this.options.items).andSelf().each(function(){var f=a(this);if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).andSelf().each(function(){var e=a(this);if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))}})},open:function(e){var g=this,f=a(e?e.target:this.element).closest(this.options.items);if(!f.length||f.data("ui-tooltip-id")){return}if(f.attr("title")){f.data("ui-tooltip-title",f.attr("title"))}f.data("ui-tooltip-open",true);if(e&&e.type==="mouseover"){f.parents().each(function(){var i=a(this),h;if(i.data("ui-tooltip-open")){h=a.Event("blur");h.target=h.currentTarget=this;g.close(h,true)}if(i.attr("title")){i.uniqueId();g.parents[this.id]={element:this,title:i.attr("title")};i.attr("title","")}})}this._updateContent(f,e)},_updateContent:function(i,g){var e,f=this.options.content,j=this,h=g?g.type:null;if(typeof f==="string"){return this._open(g,i,f)}e=f.call(i[0],function(k){if(!i.data("ui-tooltip-open")){return}j._delay(function(){if(g){g.type=h}this._open(g,i,k)})});if(e){this._open(g,i,e)}},_open:function(g,k,e){var l,h,f,j=a.extend({},this.options.position);if(!e){return}l=this._find(k);if(l.length){l.find(".ui-tooltip-content").html(e);return}if(k.is("[title]")){if(g&&g.type==="mouseover"){k.attr("title","")}else{k.removeAttr("title")}}l=this._tooltip(k);b(k,l.attr("id"));l.find(".ui-tooltip-content").html(e);function i(m){j.of=m;if(l.is(":hidden")){return}l.position(j)}if(this.options.track&&g&&/^mouse/.test(g.type)){this._on(this.document,{mousemove:i});i(g)}else{l.position(a.extend({of:k},this.options.position))}l.hide();this._show(l,this.options.show);if(this.options.show&&this.options.show.delay){f=setInterval(function(){if(l.is(":visible")){i(j.of);clearInterval(f)}},a.fx.interval)}this._trigger("open",g,{tooltip:l});h={keyup:function(m){if(m.keyCode===a.ui.keyCode.ESCAPE){var n=a.Event(m);n.currentTarget=k[0];this.close(n,true)}},remove:function(){this._removeTooltip(l)}};if(!g||g.type==="mouseover"){h.mouseleave="close"}if(!g||g.type==="focusin"){h.focusout="close"}this._on(true,k,h)},close:function(e){var g=this,f=a(e?e.currentTarget:this.element),h=this._find(f);if(this.closing){return}if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"))}d(f);h.stop(true);this._hide(h,this.options.hide,function(){g._removeTooltip(a(this))});f.removeData("ui-tooltip-open");this._off(f,"mouseleave focusout keyup");if(f[0]!==this.element[0]){this._off(f,"remove")}this._off(this.document,"mousemove");if(e&&e.type==="mouseleave"){a.each(this.parents,function(i,j){a(j.element).attr("title",j.title);delete g.parents[i]})}this.closing=true;this._trigger("close",e,{tooltip:h});this.closing=false},_tooltip:function(e){var f="ui-tooltip-"+c++,g=a("<div>").attr({id:f,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));a("<div>").addClass("ui-tooltip-content").appendTo(g);g.appendTo(this.document[0].body);if(a.fn.bgiframe){g.bgiframe()}this.tooltips[f]=e;return g},_find:function(f){var e=f.data("ui-tooltip-id");return e?a("#"+e):a()},_removeTooltip:function(e){e.remove();delete this.tooltips[e.attr("id")]},_destroy:function(){var e=this;a.each(this.tooltips,function(h,f){var g=a.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true);a("#"+h).remove();if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));f.removeData("ui-tooltip-title")}})}})}(jQuery));(jQuery.effects||(function(a,d){var b=a.uiBackCompat!==false,c="ui-effects-";a.effects={effect:{}};
/*
 * jQuery Color Animations v2.0.0
 * http://jquery.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Mon Aug 13 13:41:02 2012 -0500
 */
(function(j,s){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,p=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],f=j.Color=function(v,w,u,t){return new j.Color.fn.parse(v,w,u,t)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},k={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},q=f.support={},r=j("<p>")[0],g,h=j.each;r.style.cssText="background-color:rgba(1,1,1,.5)";q.rgba=r.style.backgroundColor.indexOf("rgba")>-1;h(m,function(u,t){t.cache="_"+u;t.props.alpha={idx:3,type:"percent",def:1}});function e(w,u,t){var v=k[u.type]||{};if(w==null){return(t||!u.def)?null:u.def}w=v.floor?~~w:parseFloat(w);if(isNaN(w)){return u.def}if(v.mod){return(w+v.mod)%v.mod}return 0>w?0:v.max<w?v.max:w}function o(v){var t=f(),u=t._rgba=[];v=v.toLowerCase();h(p,function(w,z){var y,x=z.re.exec(v),B=x&&z.parse(x),A=z.space||"rgba";if(B){y=t[A](B);t[m[A].cache]=y[m[A].cache];u=t._rgba=y._rgba;return false}});if(u.length){if(u.join()==="0,0,0,0"){j.extend(u,g.transparent)}return t}return g[v]}f.fn=j.extend(f.prototype,{parse:function(x,v,u,t){if(x===s){this._rgba=[null,null,null,null];return this}if(x.jquery||x.nodeType){x=j(x).css(v);v=s}var w=this,z=j.type(x),y=this._rgba=[];if(v!==s){x=[x,v,u,t];z="array"}if(z==="string"){return this.parse(o(x)||g._default)}if(z==="array"){h(m.rgba.props,function(A,B){y[B.idx]=e(x[B.idx],B)});return this}if(z==="object"){if(x instanceof f){h(m,function(B,A){if(x[A.cache]){w[A.cache]=x[A.cache].slice()}})}else{h(m,function(C,B){var A=B.cache;h(B.props,function(D,E){if(!w[A]&&B.to){if(D==="alpha"||x[D]==null){return}w[A]=B.to(w._rgba)}w[A][E.idx]=e(x[D],E,true)});if(w[A]&&a.inArray(null,w[A].slice(0,3))<0){w[A][3]=1;if(B.from){w._rgba=B.from(w[A])}}})}return this}},is:function(t){var v=f(t),w=true,u=this;h(m,function(x,A){var z,y=v[A.cache];if(y){z=u[A.cache]||A.to&&A.to(u._rgba)||[];h(A.props,function(B,C){if(y[C.idx]!=null){w=(y[C.idx]===z[C.idx]);return w}})}return w});return w},_space:function(){var u=[],t=this;h(m,function(w,v){if(t[v.cache]){u.push(w)}});return u.pop()},transition:function(v,t){var u=f(v),y=u._space(),x=m[y],A=this.alpha()===0?f("transparent"):this,z=A[x.cache]||x.to(A._rgba),w=z.slice();u=u[x.cache];h(x.props,function(D,E){var C=E.idx,F=z[C],B=u[C],G=k[E.type]||{};if(B===null){return}if(F===null){w[C]=B}else{if(G.mod){if(B-F>G.mod/2){F+=G.mod}else{if(F-B>G.mod/2){F-=G.mod}}}w[C]=e((B-F)*t+F,E)}});return this[y](w)},blend:function(v){if(this._rgba[3]===1){return this}var w=this._rgba.slice(),t=w.pop(),u=f(v)._rgba;return f(j.map(w,function(y,x){return(1-t)*u[x]+t*y}))},toRgbaString:function(){var t="rgba(",u=j.map(this._rgba,function(x,w){return x==null?(w>2?1:0):x});if(u[3]===1){u.pop();t="rgb("}return t+u.join()+")"},toHslaString:function(){var u="hsla(",t=j.map(this.hsla(),function(x,w){if(x==null){x=w>2?1:0}if(w&&w<3){x=Math.round(x*100)+"%"}return x});if(t[3]===1){t.pop();u="hsl("}return u+t.join()+")"},toHexString:function(u){var v=this._rgba.slice(),t=v.pop();if(u){v.push(~~(t*255))}return"#"+j.map(v,function(w){w=(w||0).toString(16);return w.length===1?"0"+w:w}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});f.fn.parse.prototype=f.fn;function i(u,v,t){t=(t+1)%1;if(t*6<1){return u+(v-u)*t*6}if(t*2<1){return v}if(t*3<2){return u+(v-u)*((2/3)-t)*6}return u}m.hsla.to=function(D){if(D[0]==null||D[1]==null||D[2]==null){return[null,null,null,D[3]]}var C=D[0]/255,x=D[1]/255,v=D[2]/255,t=D[3],A=Math.max(C,x,v),B=Math.min(C,x,v),w=A-B,u=A+B,z=u*0.5,y,E;if(B===A){y=0}else{if(C===A){y=(60*(x-v)/w)+360}else{if(x===A){y=(60*(v-C)/w)+120}else{y=(60*(C-x)/w)+240}}}if(z===0||z===1){E=z}else{if(z<=0.5){E=w/u}else{E=w/(2-u)}}return[Math.round(y)%360,E,z,t==null?1:t]};m.hsla.from=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]}var u=v[0]/360,z=v[1],w=v[2],t=v[3],y=w<=0.5?w*(1+z):w+z-w*z,x=2*w-y;return[Math.round(i(x,y,u+(1/3))*255),Math.round(i(x,y,u)*255),Math.round(i(x,y,u-(1/3))*255),t]};h(m,function(x,w){var v=w.props,t=w.cache,y=w.to,u=w.from;f.fn[x]=function(D){if(y&&!this[t]){this[t]=y(this._rgba)}if(D===s){return this[t].slice()}var B,C=j.type(D),z=(C==="array"||C==="object")?D:arguments,A=this[t].slice();h(v,function(E,F){var G=z[C==="object"?E:F.idx];if(G==null){G=A[F.idx]}A[F.idx]=e(G,F)});if(u){B=f(u(A));B[t]=A;return B}else{return f(A)}};h(v,function(z,A){if(f.fn[z]){return}f.fn[z]=function(F){var G=j.type(F),C=(z==="alpha"?(this._hsla?"hsla":"rgba"):x),D=this[C](),B=D[A.idx],E;if(G==="undefined"){return B}if(G==="function"){F=F.call(this,B);G=j.type(F)}if(F==null&&A.empty){return this}if(G==="string"){E=l.exec(F);if(E){F=B+parseFloat(E[2])*(E[1]==="+"?1:-1)}}D[A.idx]=F;return this[C](D)}})});h(n,function(u,t){j.cssHooks[t]={set:function(y,B){var A,w,v="";if(j.type(B)!=="string"||(A=o(B))){B=f(A||B);if(!q.rgba&&B._rgba[3]!==1){w=t==="backgroundColor"?y.parentNode:y;while((v===""||v==="transparent")&&w&&w.style){try{v=j.css(w,"backgroundColor");w=w.parentNode}catch(x){}}B=B.blend(v&&v!=="transparent"?v:"_default")}B=B.toRgbaString()}try{y.style[t]=B}catch(z){}}};j.fx.step[t]=function(v){if(!v.colorInit){v.start=f(v.elem,t);v.end=f(v.end);v.colorInit=true}j.cssHooks[t].set(v.elem,v.start.transition(v.end,v.pos))}});j.cssHooks.borderColor={expand:function(u){var t={};h(["Top","Right","Bottom","Left"],function(v,w){t["border"+w+"Color"]=u});return t}};g=j.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var e=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(i,j){a.fx.step[j]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,j,k.end);k.setAttr=true}}});function f(){var l=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,k={},i,j;if(l&&l.length&&l[0]&&l[l[0]]){j=l.length;while(j--){i=l[j];if(typeof l[i]==="string"){k[a.camelCase(i)]=l[i]}}}else{for(i in l){if(typeof l[i]==="string"){k[i]=l[i]}}}return k}function h(l,k){var i={},j,m;for(j in k){m=k[j];if(l[j]!==m){if(!g[j]){if(a.fx.step[j]||!isNaN(parseFloat(m))){i[j]=m}}}}return i}a.effects.animateClass=function(m,j,k,i){var l=a.speed(j,k,i);return this.queue(function(){var o=a(this),q=o.attr("class")||"",p,n=l.children?o.find("*").andSelf():o;n=n.map(function(){var r=a(this);return{el:r,start:f.call(this)}});p=function(){a.each(e,function(s,r){if(m[r]){o[r+"Class"](m[r])}})};p();n=n.map(function(){this.end=f.call(this.el[0]);this.diff=h(this.start,this.end);return this});o.attr("class",q);n=n.map(function(){var t=this,r=a.Deferred(),s=jQuery.extend({},l,{queue:false,complete:function(){r.resolve(t)}});this.el.animate(this.diff,s);return r.promise()});a.when.apply(a,n.get()).done(function(){p();a.each(arguments,function(){var r=this.el;a.each(this.diff,function(s){r.css(s,"")})});l.complete.call(o[0])})})};a.fn.extend({_addClass:a.fn.addClass,addClass:function(j,l,k,i){return l?a.effects.animateClass.call(this,{add:j},l,k,i):this._addClass(j)},_removeClass:a.fn.removeClass,removeClass:function(j,l,k,i){return l?a.effects.animateClass.call(this,{remove:j},l,k,i):this._removeClass(j)},_toggleClass:a.fn.toggleClass,toggleClass:function(j,l,m,k,i){if(typeof l==="boolean"||l===d){if(!m){return this._toggleClass(j,l)}else{return a.effects.animateClass.call(this,(l?{add:j}:{remove:j}),m,k,i)}}else{return a.effects.animateClass.call(this,{toggle:j},l,m,k)}},switchClass:function(l,i,m,k,j){return a.effects.animateClass.call(this,{add:i,remove:l},m,k,j)}})})();(function(){a.extend(a.effects,{version:"1.9.2",save:function(g,j){for(var h=0;h<j.length;h++){if(j[h]!==null){g.data(c+j[h],g[0].style[j[h]])}}},restore:function(g,j){var k,h;for(h=0;h<j.length;h++){if(j[h]!==null){k=g.data(c+j[h]);if(k===d){k=""}g.css(j[h],k)}}},setMode:function(g,h){if(h==="toggle"){h=g.is(":hidden")?"show":"hide"}return h},getBaseline:function(g,h){var j,i;switch(g[0]){case"top":j=0;break;case"middle":j=0.5;break;case"bottom":j=1;break;default:j=g[0]/h.height}switch(g[1]){case"left":i=0;break;case"center":i=0.5;break;case"right":i=1;break;default:i=g[1]/h.width}return{x:i,y:j}},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper")){return i.parent()}var j={width:i.outerWidth(true),height:i.outerHeight(true),"float":i.css("float")},l=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),k={width:i.width(),height:i.height()},g=document.activeElement;try{g.id}catch(h){g=document.body}i.wrap(l);if(i[0]===g||a.contains(i[0],g)){a(g).focus()}l=i.parent();if(i.css("position")==="static"){l.css({position:"relative"});i.css({position:"relative"})}else{a.extend(j,{position:i.css("position"),zIndex:i.css("z-index")});a.each(["top","left","bottom","right"],function(m,n){j[n]=i.css(n);if(isNaN(parseInt(j[n],10))){j[n]="auto"}});i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}i.css(k);return l.css(j).show()},removeWrapper:function(h){var g=document.activeElement;if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);if(h[0]===g||a.contains(h[0],g)){a(g).focus()}}return h},setTransition:function(g,i,h,j){j=j||{};a.each(i,function(k,m){var l=g.cssUnit(m);if(l[0]>0){j[m]=l[0]*h+l[1]}});return j}});function e(h,i,j,g){if(a.isPlainObject(h)){i=h;h=h.effect}h={effect:h};if(i==null){i={}}if(a.isFunction(i)){g=i;j=null;i={}}if(typeof i==="number"||a.fx.speeds[i]){g=j;j=i;i={}}if(a.isFunction(j)){g=j;j=null}if(i){a.extend(h,i)}j=j||i.duration;h.duration=a.fx.off?0:typeof j==="number"?j:j in a.fx.speeds?a.fx.speeds[j]:a.fx.speeds._default;h.complete=g||i.complete;return h}function f(g){if(!g||typeof g==="number"||a.fx.speeds[g]){return true}if(typeof g==="string"&&!a.effects.effect[g]){if(b&&a.effects[g]){return false}return true}return false}a.fn.extend({effect:function(){var g=e.apply(this,arguments),i=g.mode,k=g.queue,h=a.effects.effect[g.effect],j=!h&&b&&a.effects[g.effect];if(a.fx.off||!(h||j)){if(i){return this[i](g.duration,g.complete)}else{return this.each(function(){if(g.complete){g.complete.call(this)}})}}function l(q){var o=a(this),m=g.complete,p=g.mode;function n(){if(a.isFunction(m)){m.call(o[0])}if(a.isFunction(q)){q()}}if(o.is(":hidden")?p==="hide":p==="show"){n()}else{h.call(o[0],g,n)}}if(h){return k===false?this.each(l):this.queue(k||"fx",l)}else{return j.call(this,{options:g,duration:g.duration,callback:g.complete,mode:g.mode})}},_show:a.fn.show,show:function(h){if(f(h)){return this._show.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="show";return this.effect.call(this,g)}},_hide:a.fn.hide,hide:function(h){if(f(h)){return this._hide.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="hide";return this.effect.call(this,g)}},__toggle:a.fn.toggle,toggle:function(h){if(f(h)||typeof h==="boolean"||a.isFunction(h)){return this.__toggle.apply(this,arguments)}else{var g=e.apply(this,arguments);g.mode="toggle";return this.effect.call(this,g)}},cssUnit:function(g){var h=this.css(g),i=[];a.each(["em","px","%","pt"],function(j,k){if(h.indexOf(k)>0){i=[parseFloat(h),k]}});return i}})})();(function(){var e={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,g){e[g]=function(h){return Math.pow(h,f+2)}});a.extend(e,{Sine:function(f){return 1-Math.cos(f*Math.PI/2)},Circ:function(f){return 1-Math.sqrt(1-f*f)},Elastic:function(f){return f===0||f===1?f:-Math.pow(2,8*(f-1))*Math.sin(((f-1)*80-7.5)*Math.PI/15)},Back:function(f){return f*f*(3*f-2)},Bounce:function(g){var h,f=4;while(g<((h=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((h*3-2)/22-g,2)}});a.each(e,function(g,f){a.easing["easeIn"+g]=f;a.easing["easeOut"+g]=function(h){return 1-f(1-h)};a.easing["easeInOut"+g]=function(h){return h<0.5?f(h*2)/2:1-f(h*-2+2)/2}})})()})(jQuery));(function(a,d){var c=/up|down|vertical/,b=/up|left|vertical|horizontal/;a.effects.effect.blind=function(m,h){var i=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(i,m.mode||"hide"),f=m.direction||"up",s=c.test(f),p=s?"height":"width",q=s?"top":"left",l=b.test(f),e={},r=k==="show",t,g,j;if(i.parent().is(".ui-effects-wrapper")){a.effects.save(i.parent(),n)}else{a.effects.save(i,n)}i.show();t=a.effects.createWrapper(i).css({overflow:"hidden"});g=t[p]();j=parseFloat(t.css(q))||0;e[p]=r?g:0;if(!l){i.css(s?"bottom":"right",0).css(s?"top":"left","auto").css({position:"absolute"});e[q]=r?j:g+j}if(r){t.css(p,0);if(!l){t.css(q,j+g)}}t.animate(e,{duration:m.duration,easing:m.easing,queue:false,complete:function(){if(k==="hide"){i.hide()}a.effects.restore(i,n);a.effects.removeWrapper(i);h()}})}})(jQuery);(function(a,b){a.effects.effect.bounce=function(p,f){var j=a(this),q=["position","top","bottom","left","right","height","width"],m=a.effects.setMode(j,p.mode||"effect"),k=m==="hide",u=m==="show",d=p.direction||"up",e=p.distance,w=p.times||5,c=w*2+(u||k?1:0),v=p.duration/c,h=p.easing,t=(d==="up"||d==="down")?"top":"left",n=(d==="up"||d==="left"),l,x,g,r=j.queue(),s=r.length;if(u||k){q.push("opacity")}a.effects.save(j,q);j.show();a.effects.createWrapper(j);if(!e){e=j[t==="top"?"outerHeight":"outerWidth"]()/3}if(u){g={opacity:1};g[t]=0;j.css("opacity",0).css(t,n?-e*2:e*2).animate(g,v,h)}if(k){e=e/Math.pow(2,w-1)}g={};g[t]=0;for(l=0;l<w;l++){x={};x[t]=(n?"-=":"+=")+e;j.animate(x,v,h).animate(g,v,h);e=k?e*2:e/2}if(k){x={opacity:0};x[t]=(n?"-=":"+=")+e;j.animate(x,v,h)}j.queue(function(){if(k){j.hide()}a.effects.restore(j,q);a.effects.removeWrapper(j);f()});if(s>1){r.splice.apply(r,[1,0].concat(r.splice(s,c+1)))}j.dequeue()}})(jQuery);(function(a,b){a.effects.effect.clip=function(j,g){var h=a(this),l=["position","top","bottom","left","right","height","width"],i=a.effects.setMode(h,j.mode||"hide"),m=i==="show",e=j.direction||"vertical",p=e==="vertical",n=p?"height":"width",k=p?"top":"left",d={},q,c,f;a.effects.save(h,l);h.show();q=a.effects.createWrapper(h).css({overflow:"hidden"});c=(h[0].tagName==="IMG")?q:h;f=c[n]();if(m){c.css(n,0);c.css(k,f/2)}d[n]=m?f:0;d[k]=m?0:f/2;c.animate(d,{queue:false,duration:j.duration,easing:j.easing,complete:function(){if(!m){h.hide()}a.effects.restore(h,l);a.effects.removeWrapper(h);g()}})}})(jQuery);(function(a,b){a.effects.effect.drop=function(j,f){var g=a(this),k=["position","top","bottom","left","right","opacity","height","width"],h=a.effects.setMode(g,j.mode||"hide"),m=h==="show",d=j.direction||"left",l=(d==="up"||d==="down")?"top":"left",i=(d==="up"||d==="left")?"pos":"neg",c={opacity:m?1:0},e;a.effects.save(g,k);g.show();a.effects.createWrapper(g);e=j.distance||g[l==="top"?"outerHeight":"outerWidth"](true)/2;if(m){g.css("opacity",0).css(l,i==="pos"?-e:e)}c[l]=(m?(i==="pos"?"+=":"-="):(i==="pos"?"-=":"+="))+e;g.animate(c,{queue:false,duration:j.duration,easing:j.easing,complete:function(){if(h==="hide"){g.hide()}a.effects.restore(g,k);a.effects.removeWrapper(g);f()}})}})(jQuery);(function(a,b){a.effects.effect.explode=function(r,f){var u=r.pieces?Math.round(Math.sqrt(r.pieces)):3,d=u,g=a(this),n=a.effects.setMode(g,r.mode||"hide"),v=n==="show",s=g.show().css("visibility","hidden").offset(),x=Math.ceil(g.outerWidth()/d),h=Math.ceil(g.outerHeight()/u),t=[],k,l,m,w,p,q;function e(){t.push(this);if(t.length===u*d){c()}}for(k=0;k<u;k++){w=s.top+k*h;q=k-(u-1)/2;for(l=0;l<d;l++){m=s.left+l*x;p=l-(d-1)/2;g.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-l*x,top:-k*h}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:x,height:h,left:m+(v?p*x:0),top:w+(v?q*h:0),opacity:v?0:1}).animate({left:m+(v?0:p*x),top:w+(v?0:q*h),opacity:v?1:0},r.duration||500,r.easing,e)}}function c(){g.css({visibility:"visible"});a(t).remove();if(!v){g.hide()}f()}}})(jQuery);(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})}})(jQuery);(function(a,b){a.effects.effect.fold=function(l,f){var h=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(h,l.mode||"hide"),q=k==="show",i=k==="hide",r=l.size||15,m=/([0-9]+)%/.exec(r),j=!!l.horizFirst,s=q!==j,p=s?["width","height"]:["height","width"],g=l.duration/2,t,e,c={},d={};a.effects.save(h,n);h.show();t=a.effects.createWrapper(h).css({overflow:"hidden"});e=s?[t.width(),t.height()]:[t.height(),t.width()];if(m){r=parseInt(m[1],10)/100*e[i?0:1]}if(q){t.css(j?{height:0,width:r}:{height:r,width:0})}c[p[0]]=q?e[0]:r;d[p[1]]=q?e[1]:0;t.animate(c,g,l.easing).animate(d,g,l.easing,function(){if(i){h.hide()}a.effects.restore(h,n);a.effects.removeWrapper(h);f()})}})(jQuery);(function(a,b){a.effects.effect.highlight=function(g,d){var e=a(this),h=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(e,g.mode||"show"),c={backgroundColor:e.css("backgroundColor")};if(f==="hide"){c.opacity=0}a.effects.save(e,h);e.show().css({backgroundImage:"none",backgroundColor:g.color||"#ffff99"}).animate(c,{queue:false,duration:g.duration,easing:g.easing,complete:function(){if(f==="hide"){e.hide()}a.effects.restore(e,h);d()}})}})(jQuery);(function(a,b){a.effects.effect.pulsate=function(l,e){var g=a(this),k=a.effects.setMode(g,l.mode||"show"),p=k==="show",h=k==="hide",q=(p||k==="hide"),d=((l.times||5)*2)+(q?1:0),f=l.duration/d,c=0,m=g.queue(),n=m.length,j;if(p||!g.is(":visible")){g.css("opacity",0).show();c=1}for(j=1;j<d;j++){g.animate({opacity:c},f,l.easing);c=1-c}g.animate({opacity:c},f,l.easing);g.queue(function(){if(h){g.hide()}e()});if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,d+1)))}g.dequeue()}})(jQuery);(function(a,b){a.effects.effect.puff=function(h,c){var d=a(this),g=a.effects.setMode(d,h.mode||"hide"),f=g==="hide",j=parseInt(h.percent,10)||150,e=j/100,i={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};a.extend(h,{effect:"scale",queue:false,fade:true,mode:g,complete:c,percent:f?j:100,from:f?i:{height:i.height*e,width:i.width*e,outerHeight:i.outerHeight*e,outerWidth:i.outerWidth*e}});d.effect(h)};a.effects.effect.scale=function(h,d){var e=a(this),i=a.extend(true,{},h),g=a.effects.setMode(e,h.mode||"effect"),l=parseInt(h.percent,10)||(parseInt(h.percent,10)===0?0:(g==="hide"?0:100)),c=h.direction||"both",j=h.origin,k={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()},f={y:c!=="horizontal"?(l/100):1,x:c!=="vertical"?(l/100):1};i.effect="size";i.queue=false;i.complete=d;if(g!=="effect"){i.origin=j||["middle","center"];i.restore=true}i.from=h.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:k);i.to={height:k.height*f.y,width:k.width*f.x,outerHeight:k.outerHeight*f.y,outerWidth:k.outerWidth*f.x};if(i.fade){if(g==="show"){i.from.opacity=0;i.to.opacity=1}if(g==="hide"){i.from.opacity=1;i.to.opacity=0}}e.effect(i)};a.effects.effect.size=function(j,e){var l,c,g,f=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],q=["position","top","bottom","left","right","overflow","opacity"],r=["width","height","overflow"],d=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],i=a.effects.setMode(f,j.mode||"effect"),s=j.restore||i!=="effect",t=j.scale||"both",k=j.origin||["middle","center"],m=f.css("position"),n=s?p:q,v={height:0,width:0,outerHeight:0,outerWidth:0};if(i==="show"){f.show()}l={height:f.height(),width:f.width(),outerHeight:f.outerHeight(),outerWidth:f.outerWidth()};if(j.mode==="toggle"&&i==="show"){f.from=j.to||v;f.to=j.from||l}else{f.from=j.from||(i==="show"?v:l);f.to=j.to||(i==="hide"?v:l)}g={from:{y:f.from.height/l.height,x:f.from.width/l.width},to:{y:f.to.height/l.height,x:f.to.width/l.width}};if(t==="box"||t==="both"){if(g.from.y!==g.to.y){n=n.concat(u);f.from=a.effects.setTransition(f,u,g.from.y,f.from);f.to=a.effects.setTransition(f,u,g.to.y,f.to)}if(g.from.x!==g.to.x){n=n.concat(h);f.from=a.effects.setTransition(f,h,g.from.x,f.from);f.to=a.effects.setTransition(f,h,g.to.x,f.to)}}if(t==="content"||t==="both"){if(g.from.y!==g.to.y){n=n.concat(d).concat(r);f.from=a.effects.setTransition(f,d,g.from.y,f.from);f.to=a.effects.setTransition(f,d,g.to.y,f.to)}}a.effects.save(f,n);f.show();a.effects.createWrapper(f);f.css("overflow","hidden").css(f.from);if(k){c=a.effects.getBaseline(k,l);f.from.top=(l.outerHeight-f.outerHeight())*c.y;f.from.left=(l.outerWidth-f.outerWidth())*c.x;f.to.top=(l.outerHeight-f.to.outerHeight)*c.y;f.to.left=(l.outerWidth-f.to.outerWidth)*c.x}f.css(f.from);if(t==="content"||t==="both"){u=u.concat(["marginTop","marginBottom"]).concat(d);h=h.concat(["marginLeft","marginRight"]);r=p.concat(u).concat(h);f.find("*[width]").each(function(){var w=a(this),o={height:w.height(),width:w.width(),outerHeight:w.outerHeight(),outerWidth:w.outerWidth()};if(s){a.effects.save(w,r)}w.from={height:o.height*g.from.y,width:o.width*g.from.x,outerHeight:o.outerHeight*g.from.y,outerWidth:o.outerWidth*g.from.x};w.to={height:o.height*g.to.y,width:o.width*g.to.x,outerHeight:o.height*g.to.y,outerWidth:o.width*g.to.x};if(g.from.y!==g.to.y){w.from=a.effects.setTransition(w,u,g.from.y,w.from);w.to=a.effects.setTransition(w,u,g.to.y,w.to)}if(g.from.x!==g.to.x){w.from=a.effects.setTransition(w,h,g.from.x,w.from);w.to=a.effects.setTransition(w,h,g.to.x,w.to)}w.css(w.from);w.animate(w.to,j.duration,j.easing,function(){if(s){a.effects.restore(w,r)}})})}f.animate(f.to,{queue:false,duration:j.duration,easing:j.easing,complete:function(){if(f.to.opacity===0){f.css("opacity",f.from.opacity)}if(i==="hide"){f.hide()}a.effects.restore(f,n);if(!s){if(m==="static"){f.css({position:"relative",top:f.to.top,left:f.to.left})}else{a.each(["top","left"],function(o,w){f.css(w,function(x,y){var A=parseInt(y,10),z=o?f.to.left:f.to.top;if(y==="auto"){return z+"px"}return A+z+"px"})})}}a.effects.removeWrapper(f);e()}})}})(jQuery);(function(a,b){a.effects.effect.shake=function(n,j){var k=a(this),q=["position","top","bottom","left","right","height","width"],m=a.effects.setMode(k,n.mode||"effect"),g=n.direction||"left",h=n.distance||20,v=n.times||3,f=v*2+1,u=Math.round(n.duration/f),t=(g==="up"||g==="down")?"top":"left",p=(g==="up"||g==="left"),c={},d={},e={},l,r=k.queue(),s=r.length;a.effects.save(k,q);k.show();a.effects.createWrapper(k);c[t]=(p?"-=":"+=")+h;d[t]=(p?"+=":"-=")+h*2;e[t]=(p?"-=":"+=")+h*2;k.animate(c,u,n.easing);for(l=1;l<v;l++){k.animate(d,u,n.easing).animate(e,u,n.easing)}k.animate(d,u,n.easing).animate(c,u/2,n.easing).queue(function(){if(m==="hide"){k.hide()}a.effects.restore(k,q);a.effects.removeWrapper(k);j()});if(s>1){r.splice.apply(r,[1,0].concat(r.splice(s,f+1)))}k.dequeue()}})(jQuery);(function(a,b){a.effects.effect.slide=function(i,f){var g=a(this),k=["position","top","bottom","left","right","width","height"],h=a.effects.setMode(g,i.mode||"show"),m=h==="show",d=i.direction||"left",l=(d==="up"||d==="down")?"top":"left",j=(d==="up"||d==="left"),e,c={};a.effects.save(g,k);g.show();e=i.distance||g[l==="top"?"outerHeight":"outerWidth"](true);a.effects.createWrapper(g).css({overflow:"hidden"});if(m){g.css(l,j?(isNaN(e)?"-"+e:-e):e)}c[l]=(m?(j?"+=":"-="):(j?"-=":"+="))+e;g.animate(c,{queue:false,duration:i.duration,easing:i.easing,complete:function(){if(h==="hide"){g.hide()}a.effects.restore(g,k);a.effects.removeWrapper(g);f()}})}})(jQuery);(function(a,b){a.effects.effect.transfer=function(j,e){var f=a(this),l=a(j.to),m=l.css("position")==="fixed",d=a("body"),i=m?d.scrollTop():0,h=m?d.scrollLeft():0,g=l.offset(),c={top:g.top-i,left:g.left-h,height:l.innerHeight(),width:l.innerWidth()},k=f.offset(),n=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(j.className).css({top:k.top-i,left:k.left-h,height:f.innerHeight(),width:f.innerWidth(),position:m?"fixed":"absolute"}).animate(c,j.duration,j.easing,function(){n.remove();e()})}})(jQuery);
/*
 * jQuery timepicker addon
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 1.3
 * Last Modified: 05/05/2013
 *
 * Copyright 2013 Trent Richardson
 * You may use this project under MIT or GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */

/*jslint evil: true, white: false, undef: false, nomen: false */

(function($) {

	/*
	* Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
	*/
	$.ui.timepicker = $.ui.timepicker || {};
	if ($.ui.timepicker.version) {
		return;
	}

	/*
	* Extend jQueryUI, get it started with our version number
	*/
	$.extend($.ui, {
		timepicker: {
			version: "1.3"
		}
	});

	/* 
	* Timepicker manager.
	* Use the singleton instance of this class, $.timepicker, to interact with the time picker.
	* Settings for (groups of) time pickers are maintained in an instance object,
	* allowing multiple different settings on the same page.
	*/
	var Timepicker = function() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			currentText: 'Now',
			closeText: 'Done',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			timeFormat: 'HH:mm',
			timeSuffix: '',
			timeOnlyTitle: 'Choose Time',
			timeText: 'Time',
			hourText: 'Hour',
			minuteText: 'Minute',
			secondText: 'Second',
			millisecText: 'Millisecond',
			microsecText: 'Microsecond',
			timezoneText: 'Time Zone',
			isRTL: false
		};
		this._defaults = { // Global defaults for all the datetime picker instances
			showButtonPanel: true,
			timeOnly: false,
			showHour: null,
			showMinute: null,
			showSecond: null,
			showMillisec: null,
			showMicrosec: null,
			showTimezone: null,
			showTime: true,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			stepMillisec: 1,
			stepMicrosec: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			microsec: 0,
			timezone: null,
			hourMin: 0,
			minuteMin: 0,
			secondMin: 0,
			millisecMin: 0,
			microsecMin: 0,
			hourMax: 23,
			minuteMax: 59,
			secondMax: 59,
			millisecMax: 999,
			microsecMax: 999,
			minDateTime: null,
			maxDateTime: null,
			onSelect: null,
			hourGrid: 0,
			minuteGrid: 0,
			secondGrid: 0,
			millisecGrid: 0,
			microsecGrid: 0,
			alwaysSetTime: true,
			separator: ' ',
			altFieldTimeOnly: true,
			altTimeFormat: null,
			altSeparator: null,
			altTimeSuffix: null,
			pickerTimeFormat: null,
			pickerTimeSuffix: null,
			showTimepicker: true,
			timezoneList: null,
			addSliderAccess: false,
			sliderAccessArgs: null,
			controlType: 'slider',
			defaultValue: null,
			parse: 'strict'
		};
		$.extend(this._defaults, this.regional['']);
	};

	$.extend(Timepicker.prototype, {
		$input: null,
		$altInput: null,
		$timeObj: null,
		inst: null,
		hour_slider: null,
		minute_slider: null,
		second_slider: null,
		millisec_slider: null,
		microsec_slider: null,
		timezone_select: null,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		microsec: 0,
		timezone: null,
		hourMinOriginal: null,
		minuteMinOriginal: null,
		secondMinOriginal: null,
		millisecMinOriginal: null,
		microsecMinOriginal: null,
		hourMaxOriginal: null,
		minuteMaxOriginal: null,
		secondMaxOriginal: null,
		millisecMaxOriginal: null,
		microsecMaxOriginal: null,
		ampm: '',
		formattedDate: '',
		formattedTime: '',
		formattedDateTime: '',
		timezoneList: null,
		units: ['hour','minute','second','millisec', 'microsec'],
		support: {},
		control: null,

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  settings  object - the new settings to use as defaults (anonymous object)
		* @return the manager object
		*/
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/*
		* Create a new Timepicker instance
		*/
		_newInst: function($input, o) {
			var tp_inst = new Timepicker(),
				inlineSettings = {},
            	fns = {},
		    	overrides, i;

			for (var attrName in this._defaults) {
				if(this._defaults.hasOwnProperty(attrName)){
					var attrValue = $input.attr('time:' + attrName);
					if (attrValue) {
						try {
							inlineSettings[attrName] = eval(attrValue);
						} catch (err) {
							inlineSettings[attrName] = attrValue;
						}
					}
				}
			}

		    overrides = {
		        beforeShow: function (input, dp_inst) {
		            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
		                return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
		            }
		        },
		        onChangeMonthYear: function (year, month, dp_inst) {
		            // Update the time as well : this prevents the time from disappearing from the $input field.
		            tp_inst._updateDateTime(dp_inst);
		            if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
		                tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
		            }
		        },
		        onClose: function (dateText, dp_inst) {
		            if (tp_inst.timeDefined === true && $input.val() !== '') {
		                tp_inst._updateDateTime(dp_inst);
		            }
		            if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
		                tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
		            }
		        }
		    };
		    for (i in overrides) {
		        if (overrides.hasOwnProperty(i)) {
		            fns[i] = o[i] || null;
		        }
		    }

		    tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, overrides, {
		        evnts:fns,
		        timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		    });
			tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
				return val.toUpperCase();
			});
			tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
				return val.toUpperCase();
			});

			// detect which units are supported
			tp_inst.support = detectSupport(
					tp_inst._defaults.timeFormat + 
					(tp_inst._defaults.pickerTimeFormat? tp_inst._defaults.pickerTimeFormat:'') + 
					(tp_inst._defaults.altTimeFormat? tp_inst._defaults.altTimeFormat:''));

			// controlType is string - key to our this._controls
			if(typeof(tp_inst._defaults.controlType) === 'string'){
				if(tp_inst._defaults.controlType == 'slider' && typeof(jQuery.ui.slider) === 'undefined'){
					tp_inst._defaults.controlType = 'select';
				}
				tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
			}
			// controlType is an object and must implement create, options, value methods
			else{ 
				tp_inst.control = tp_inst._defaults.controlType;
			}

			// prep the timezone options
			var timezoneList = [-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,
					0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];
			if (tp_inst._defaults.timezoneList !== null) {
				timezoneList = tp_inst._defaults.timezoneList;
			}
			var tzl=timezoneList.length,tzi=0,tzv=null;
			if (tzl > 0 && typeof timezoneList[0] !== 'object') {
				for(; tzi<tzl; tzi++){
					tzv = timezoneList[tzi];
					timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
				}
			}
			tp_inst._defaults.timezoneList = timezoneList;

			// set the default units
			tp_inst.timezone = tp_inst._defaults.timezone !== null? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : 
							((new Date()).getTimezoneOffset()*-1);
			tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin? tp_inst._defaults.hourMin : 
							tp_inst._defaults.hour > tp_inst._defaults.hourMax? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
			tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin? tp_inst._defaults.minuteMin : 
							tp_inst._defaults.minute > tp_inst._defaults.minuteMax? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
			tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin? tp_inst._defaults.secondMin : 
							tp_inst._defaults.second > tp_inst._defaults.secondMax? tp_inst._defaults.secondMax : tp_inst._defaults.second;
			tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin? tp_inst._defaults.millisecMin : 
							tp_inst._defaults.millisec > tp_inst._defaults.millisecMax? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
			tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin? tp_inst._defaults.microsecMin : 
							tp_inst._defaults.microsec > tp_inst._defaults.microsecMax? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
			tp_inst.ampm = '';
			tp_inst.$input = $input;

			if (o.altField) {
				tp_inst.$altInput = $(o.altField).css({
					cursor: 'pointer'
				}).focus(function() {
					$input.trigger("focus");
				});
			}

			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
				tp_inst._defaults.minDate = new Date();
			}
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
				tp_inst._defaults.maxDate = new Date();
			}

			// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
				tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
			}
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
				tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
			}
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
				tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
			}
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
				tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			}
			tp_inst.$input.bind('focus', function() {
				tp_inst._onFocus();
			});

			return tp_inst;
		},

		/*
		* add our sliders to the calendar
		*/
		_addTimePicker: function(dp_inst) {
			var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

			this.timeDefined = this._parseTime(currDT);
			this._limitMinMaxDateTime(dp_inst, false);
			this._injectTimePicker();
		},

		/*
		* parse the time string from input value or _setTime
		*/
		_parseTime: function(timeString, withDate) {
			if (!this.inst) {
				this.inst = $.datepicker._getInst(this.$input[0]);
			}

			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
				try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
					if (!parseRes.timeObj) {
						return false;
					}
					$.extend(this, parseRes.timeObj);
				} catch (err) {
					$.timepicker.log("Error parsing the date/time string: " + err +
									"\ndate/time string = " + timeString +
									"\ntimeFormat = " + this._defaults.timeFormat +
									"\ndateFormat = " + dp_dateFormat);
					return false;
				}
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
				if (!timeObj) {
					return false;
				}
				$.extend(this, timeObj);
				return true;
			}
		},

		/*
		* generate and inject html for timepicker into ui datepicker
		*/
		_injectTimePicker: function() {
			var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				show = null,
				max = {},
				gridSize = {},
				size = null,
				i=0,
				l=0;

			// Prevent displaying twice
			if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div'+ (o.isRTL? ' ui-timepicker-rtl' : '') +'"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' + 
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

				// Create the markup
				for(i=0,l=this.units.length; i<l; i++){
					litem = this.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					show = o['show'+uitem] !== null? o['show'+uitem] : this.support[litem];

					// Added by Peter Medeiros:
					// - Figure out what the hour/minute/second max should be based on the step values.
					// - Example: if stepMinute is 15, then minMax is 45.
					max[litem] = parseInt((o[litem+'Max'] - ((o[litem+'Max'] - o[litem+'Min']) % o['step'+uitem])), 10);
					gridSize[litem] = 0;

					html += '<dt class="ui_tpicker_'+ litem +'_label"' + (show ? '' : noDisplay) + '>' + o[litem +'Text'] + '</dt>' + 
								'<dd class="ui_tpicker_'+ litem +'"><div class="ui_tpicker_'+ litem +'_slider"' + (show ? '' : noDisplay) + '></div>';

					if (show && o[litem+'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

						if(litem == 'hour'){
							for (var h = o[litem+'Min']; h <= max[litem]; h += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								var tmph = $.datepicker.formatTime(this.support.ampm? 'hht':'HH', {hour:h}, o);									
								html += '<td data-for="'+litem+'">' + tmph + '</td>';
							}
						}
						else{
							for (var m = o[litem+'Min']; m <= max[litem]; m += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								html += '<td data-for="'+litem+'">' + ((m < 10) ? '0' : '') + m + '</td>';
							}
						}

						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				
				// Timezone
				var showTz = o.showTimezone !== null? o.showTimezone : this.support.timezone;
				html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
				html += '<dd class="ui_tpicker_timezone" ' + (showTz ? '' : noDisplay) + '></dd>';

				// Create the elements from string
				html += '</dl></div>';
				var $tp = $(html);

				// if we only want time picker...
				if (o.timeOnly === true) {
					$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
					$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
				}
				
				// add sliders, adjust grids, add events
				for(i=0,l=tp_inst.units.length; i<l; i++){
					litem = tp_inst.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					show = o['show'+uitem] !== null? o['show'+uitem] : this.support[litem];

					// add the slider
					tp_inst[litem+'_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_'+litem+'_slider'), litem, tp_inst[litem], o[litem+'Min'], max[litem], o['step'+uitem]);

					// adjust the grid and add click event
					if (show && o[litem+'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem+'Grid'] / (max[litem] - o[litem+'Min']);
						$tp.find('.ui_tpicker_'+litem+' table').css({
							width: size + "%",
							marginLeft: o.isRTL? '0' : ((size / (-2 * gridSize[litem])) + "%"),
							marginRight: o.isRTL? ((size / (-2 * gridSize[litem])) + "%") : '0',
							borderCollapse: 'collapse'
						}).find("td").click(function(e){
								var $t = $(this),
									h = $t.html(),
									n = parseInt(h.replace(/[^0-9]/g),10),
									ap = h.replace(/[^apm]/ig),
									f = $t.data('for'); // loses scope, so we use data-for

								if(f == 'hour'){
									if(ap.indexOf('p') !== -1 && n < 12){
										n += 12;
									}
									else{
										if(ap.indexOf('a') !== -1 && n === 12){
											n = 0;
										}
									}
								}
								
								tp_inst.control.value(tp_inst, tp_inst[f+'_slider'], litem, n);

								tp_inst._onTimeChange();
								tp_inst._onSelectHandler();
							}).css({
								cursor: 'pointer',
								width: (100 / gridSize[litem]) + '%',
								textAlign: 'center',
								overflow: 'hidden'
							});
					} // end if grid > 0
				} // end for loop

				// Add timezone options
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
				$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />").val(typeof val == "object" ? val.value : val).text(typeof val == "object" ? val.label : val);
				}));
				if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
					var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset()*-1;
					if (local_timezone == this.timezone) {
						selectLocalTimezone(tp_inst);
					} else {
						this.timezone_select.val(this.timezone);
					}
				} else {
					if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
						this.timezone_select.val(o.timezone);
					} else {
						selectLocalTimezone(tp_inst);
					}
				}
				this.timezone_select.change(function() {
					tp_inst._onTimeChange();
					tp_inst._onSelectHandler();
				});
				// End timezone options
				
				// inject timepicker into datepicker
				var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
				if ($buttonPanel.length) {
					$buttonPanel.before($tp);
				} else {
					$dp.append($tp);
				}

				this.$timeObj = $tp.find('.ui_tpicker_time');

				if (this.inst !== null) {
					var timeDefined = this.timeDefined;
					this._onTimeChange();
					this.timeDefined = timeDefined;
				}

				// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
				if (this._defaults.addSliderAccess) {
					var sliderAccessArgs = this._defaults.sliderAccessArgs,
						rtl = this._defaults.isRTL;
					sliderAccessArgs.isRTL = rtl;
						
					setTimeout(function() { // fix for inline mode
						if ($tp.find('.ui-slider-access').length === 0) {
							$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function() {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl? 'marginRight':'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl? 'marginRight':'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
					this.microsecMinOriginal = o.microsecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
								if(this.millisec <= this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
									this._defaults.microsecMin = minDateTime.getMicroseconds();
								} else {
									if (this.microsec < this._defaults.microsecMin) {
										this.microsec = this._defaults.microsecMin;
									}
									this._defaults.microsecMin = this.microsecMinOriginal;
								}
							} else {
								this._defaults.millisecMin = this.millisecMinOriginal;
								this._defaults.microsecMin = this.microsecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
							this._defaults.microsecMin = this.microsecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
						this._defaults.microsecMin = this.microsecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
					this._defaults.microsecMin = this.microsecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
					this.microsecMaxOriginal = o.microsecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
							if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax;
								this._defaults.millisecMax = maxDateTime.getMilliseconds();
								if (this.millisec >= this._defaults.millisecMax) {
									this.millisec = this._defaults.millisecMax;
									this._defaults.microsecMax = maxDateTime.getMicroseconds();
								} else {
									if (this.microsec > this._defaults.microsecMax) {
										this.microsec = this._defaults.microsecMax;
									}
									this._defaults.microsecMax = this.microsecMaxOriginal;
								}
							} else {
								this._defaults.millisecMax = this.millisecMaxOriginal;
								this._defaults.microsecMax = this.microsecMaxOriginal;
							}
						} else {
							this._defaults.secondMax = this.secondMaxOriginal;
							this._defaults.millisecMax = this.millisecMaxOriginal;
							this._defaults.microsecMax = this.microsecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
						this._defaults.microsecMax = this.microsecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
					this._defaults.microsecMax = this.microsecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);
					microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
				}
				if (this.microsec_slider) {
					this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax });
					this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec));
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function() {
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) == 'object') {
				hour = false;
			}
			if (typeof(minute) == 'object') {
				minute = false;
			}
			if (typeof(second) == 'object') {
				second = false;
			}
			if (typeof(millisec) == 'object') {
				millisec = false;
			}
			if (typeof(microsec) == 'object') {
				microsec = false;
			}
			if (typeof(timezone) == 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}
			if (microsec !== false) {
				microsec = parseInt(microsec, 10);
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec || microsec != this.microsec 
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) 
								|| (this.timezone !== null && timezone != this.timezone));

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (microsec !== false) {
					this.microsec = microsec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (this.support.ampm) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if(pickerTimeFormat === o.timeFormat){
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else{
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function() {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;
			
			// if a slider was changed but datepicker doesn't have a value yet, set it
			if(dp_inst.lastVal===""){
                dp_inst.currentYear=dp_inst.selectedYear;
                dp_inst.currentMonth=dp_inst.selectedMonth;
                dp_inst.currentDay=dp_inst.selectedDay;
            }

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
				
				if(!this._defaults.timeOnly){
					if (this._defaults.altFormat){
						altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
					}
					else{
						altFormattedDateTime = this.formattedDate;
					}

					if (altFormattedDateTime){
						altFormattedDateTime += altSeparator;
					}
				}

				if(this._defaults.altTimeFormat){
					altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				}
				else{
					altFormattedDateTime += this.formattedTime + altTimeSuffix;
				}
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function() {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.timepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl? val*-1 : val,
						min: rtl? max*-1 : min,
						max: rtl? min*-1 : max,
						step: step,
						slide: function(event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl? ui.value*-1:ui.value);
							tp_inst._onTimeChange();
						},
						stop: function(event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function(tp_inst, obj, unit, opts, val){
					if(tp_inst._defaults.isRTL){
						if(typeof(opts) == 'string'){
							if(opts == 'min' || opts == 'max'){
								if(val !== undefined){
									return obj.slider(opts, val*-1);
								}
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if(min !== undefined){
							opts.max = min * -1;
						}
						if(max !== undefined){
							opts.min = max * -1;
						}
						return obj.slider(opts);
					}
					if(typeof(opts) == 'string' && val !== undefined){
							return obj.slider(opts, val);
					}
					return obj.slider(opts);
				},
				value: function(tp_inst, obj, unit, val){
					if(tp_inst._defaults.isRTL){
						if(val !== undefined){
							return obj.slider('value', val*-1);
						}
						return Math.abs(obj.slider('value'));
					}
					if(val !== undefined){
						return obj.slider('value', val);
					}
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var sel = '<select class="ui-timepicker-select" data-unit="'+ unit +'" data-min="'+ min +'" data-max="'+ max +'" data-step="'+ step +'">',
						format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

					for(var i=min; i<=max; i+=step){						
						sel += '<option value="'+ i +'"'+ (i==val? ' selected':'') +'>';
						if(unit == 'hour'){
							sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig,'')), {hour:i}, tp_inst._defaults);
						}
						else if(unit == 'millisec' || unit == 'microsec' || i >= 10){ sel += i; }
						else {sel += '0'+ i.toString(); }
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function(e){
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function(tp_inst, obj, unit, opts, val){
					var o = {},
						$t = obj.children('select');
					if(typeof(opts) == 'string'){
						if(val === undefined){
							return $t.data(opts);
						}
						o[opts] = val;	
					}
					else{ o = opts; }
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function(tp_inst, obj, unit, val){
					var $t = obj.children('select');
					if(val !== undefined){
						return $t.val(val);
					}
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker..
		*/
		timepicker: function(o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o == 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function() {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function(o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) == 'string') {
				if (o == 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function() {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
			parseRex.date.setMicroseconds(t.microsec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function(timeFormat, timeString, options) {		
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
			iso8601 = (timeFormat.replace(/\'.*?\'/g,'').indexOf('Z') !== -1);

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function(f, s, o){

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function(val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						c: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] == -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
							var ml = match.length;
							switch (match.charAt(0).toLowerCase()) {
								case 'h': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'm': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 's': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'l': return '(\\d?\\d?\\d)';
								case 'c': return '(\\d?\\d?\\d)';
								case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
								case 't': return getPatternAmpm(o.amNames, o.pmNames);
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0,
				microsec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm == 'AM' && treg[order.h] == '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm == 'PM' && treg[order.h] != '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.c !== -1) {
					resTime.microsec = Number(treg[order.c]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function(f,s,o){
			try{
				var d = new Date('2012-01-01 '+ s);
				if(isNaN(d.getTime())){
					d = new Date('2012-01-01T'+ s);
					if(isNaN(d.getTime())){
						d = new Date('01/01/2012 '+ s);
						if(isNaN(d.getTime())){
							throw "Unable to parse time with native Date: "+ s;
						}
					}
				}

				return {
					hour: d.getHours(),
					minute: d.getMinutes(),
					second: d.getSeconds(),
					millisec: d.getMilliseconds(),
					microsec: d.getMicroseconds(),
					timezone: d.getTimezoneOffset()*-1
				};
			}
			catch(err){
				try{
					return strictParse(f,s,o);
				}
				catch(err2){
					$.timepicker.log("Unable to parse \ntimeString: "+ s +"\ntimeFormat: "+ f);
				}				
			}
			return false;
		}; // end looseParse
		
		if(typeof o.parse === "function"){
			return o.parse(timeFormat, timeString, o);
		}
		if(o.parse === 'loose'){
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/*
	* Public utility to format the time
	* format = string format of the time
	* time = a {}, not a Date() for timezones
	* options = essentially the regional[].. amNames, pmNames, ampm
	*/
	$.datepicker.formatTime = function(format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: 0
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|('.*?'|".*?"))/g, function(match) {
		switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return ('0' + convert24to12(hour)).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'c':
				return ('00' + time.microsec).slice(-3);
			case 'z':
				return $.timepicker.timezoneOffsetString(time.timezone === null? options.timezone : time.timezone, false);
			case 'Z':
				return $.timepicker.timezoneOffsetString(time.timezone === null? options.timezone : time.timezone, true);
			case 'T': 
				return ampmName.charAt(0).toUpperCase();
			case 'TT': 
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/\'/g, "") || "'";
			}
		});

		tmptime = $.trim(tmptime);
		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesnt close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function(id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function(inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = tp_inst.support.ampm,
					tz = tp_inst._defaults.showTimezone !== null? tp_inst._defaults.showTimezone : tp_inst.support.timezone,					
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tz ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	/* Update any alternate field to synchronise with the main field. */
	$.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst){
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if(!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null){
					if(tp_inst._defaults.altFormat){
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
					}
					else{
						altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
					}
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else{
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.timepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function(id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimezone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function(inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
			tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date == "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
					tp_date.setMicroseconds(tp_inst.microsec);
				} else {
					tp_date = new Date(date.getTime());
				}
				if (tp_date.toString() == 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function(target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker'),
			tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;
		
		// This is important if you are using the timezone option, javascript's Date 
		// object will only return the timezone offset for the current locale, so we 
		// adjust it accordingly.  If not using timezone option this won't matter..
		// If a timezone is different in tp, keep the timezone as is
		if(tp_inst && tp_inst.timezone != null){
			date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
			tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
		}

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if(inst.lastVal === undefined){
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				date.setMicroseconds(tp_inst.microsec);

				// This is important if you are using the timezone option, javascript's Date 
				// object will only return the timezone offset for the current locale, so we 
				// adjust it accordingly.  If not using timezone option this won't matter..
				if(tp_inst.timezone != null){
					date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
				}
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function(format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			if (err.indexOf(":") >= 0) {
				date = this._base_parseDate(format, value.substring(0,value.length-(err.length-err.indexOf(':')-2)), settings);
				$.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
			} else {
				throw err;
			}
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target),
	        name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
		    if (typeof name == 'string') { // if min/max was set with the string
		        if (name === 'minDate' || name === 'minDateTime') {
		            min = value;
		        } else if (name === 'maxDate' || name === 'maxDateTime') {
		            max = value;
		        } else if (name === 'onSelect') {
		            onselect = value;
		        } else if (overrides.hasOwnProperty(name)) {
		            if (typeof (value) === 'undefined') {
		                return overrides[name];
		            }
		            fns[name] = value;
		            name_clone = {}; //empty results in exiting function after overrides updated
		        }
		    } else if (typeof name == 'object') { //if min/max was set with the JSON
		        if (name.minDate) {
		            min = name.minDate;
		        } else if (name.minDateTime) {
		            min = name.minDateTime;
		        } else if (name.maxDate) {
		            max = name.maxDate;
		        } else if (name.maxDateTime) {
		            max = name.maxDateTime;
		        }
		        for (prop in overrides) {
		            if (overrides.hasOwnProperty(prop) && name[prop]) {
		                fns[prop] = name[prop];
		            }
		        }
		    }
		    for (prop in fns) {
		        if (fns.hasOwnProperty(prop)) {
		            overrides[prop] = fns[prop];
		            if (!name_clone) { name_clone = $.extend({}, name);}
		            delete name_clone[prop];
		        }
		    }
		    if (name_clone && isEmptyObject(name_clone)) { return; }
		    if (min) { //if min was set
		        if (min === 0) {
		            min = new Date();
		        } else {
		            min = new Date(min);
		        }
		        tp_inst._defaults.minDate = min;
		        tp_inst._defaults.minDateTime = min;
		    } else if (max) { //if max was set
		        if (max === 0) {
		            max = new Date();
		        } else {
		            max = new Date(max);
		        }
		        tp_inst._defaults.maxDate = max;
		        tp_inst._defaults.maxDateTime = max;
		    } else if (onselect) {
		        tp_inst._defaults.onSelect = onselect;
		    }
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function(obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(obj)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format which units are supported
	* Returns an object of booleans for each unit
	*/
	var detectSupport = function(timeFormat){
		var tf = timeFormat.replace(/\'.*?\'/g,'').toLowerCase(), // removes literals
			isIn = function(f, t){ // does the format contain the token?
					return f.indexOf(t) !== -1? true:false; 
				};
		return {
				hour: isIn(tf,'h'),
				minute: isIn(tf,'m'),
				second: isIn(tf,'s'),
				millisec: isIn(tf,'l'),
				microsec: isIn(tf,'c'),
				timezone: isIn(tf,'z'),
				ampm: isIn('t') && isIn(timeFormat,'h'),
				iso8601: isIn(timeFormat, 'Z')
			};
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour without leading 0
	*/
	var convert24to12 = function(hour) {
		/*if (hour > 12) {
			hour = hour - 12;
		}

		if (hour === 0) {
			hour = 12;
		}*/

		return String(hour);
	};

	/*
	* Splits datetime string into date ans time substrings.
	* Throws exception when date can't be parsed
	* Returns [dateString, timeString]
	*/
	var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
		try {
			// The idea is to get the number separator occurances in datetime and the time format requested (since time has 
			// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
			var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

			if (allPartsLen > 1) {
				return [
						allParts.splice(0,allPartsLen-timePartsLen).join(separator),
						allParts.splice(0,timePartsLen).join(separator)
					];
			}

		} catch (err) {
			$.timepicker.log('Could not split the date from the time. Please check the following datetimepicker options' +
					"\nthrown error: " + err +
					"\ndateTimeString" + dateTimeString +
					"\ndateFormat = " + dateFormat +
					"\nseparator = " + timeSettings.separator +
					"\ntimeFormat = " + timeSettings.timeFormat);

			if (err.indexOf(":") >= 0) {
				// Hack!  The error message ends with a colon, a space, and
				// the "extra" characters.  We rely on that instead of
				// attempting to perfectly reproduce the parsing algorithm.
				var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

				return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

			} else {
				throw err;
			}
		}
		return [dateTimeString, ''];
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: , microsec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date;
		var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
		if (splitRes[1] !== '') {
			var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

			if (parsedTime === null) {
				throw 'Wrong time format';
			}
			return {
				date: date,
				timeObj: parsedTime
			};
		} else {
			return {
				date: date
			};
		}
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimezone = function(tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			var now = typeof date !== 'undefined' ? date : new Date();
			tp_inst.timezone_select.val(now.getTimezoneOffset()*-1);
		}
	};

	/*
	* Create a Singleton Insance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param  number if not a number this value is returned
	 * @param boolean if true formats in accordance to iso8601 "+12:45"
	 * @return string
	 */
	$.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) {
		if(isNaN(tzMinutes) || tzMinutes > 840){
			return tzMinutes;
		}

		var off = tzMinutes,
			minutes = off % 60,
			hours = (off - minutes) / 60,
			iso = iso8601? ':':'',
			tz = (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).slice(-2) + iso + ('0' + (minutes * 101).toString()).slice(-2);
		
		if(tz == '+00:00'){
			return 'Z';
		}
		return tz;
	};

	/**
	 * Get the number in minutes that represents a timezone string
	 * @param  string formated like "+0500", "-1245"
	 * @return number
	 */
	$.timepicker.timezoneOffsetNumber = function(tzString) {
		tzString = tzString.toString().replace(':',''); // excuse any iso8601, end up with "+1245"

		if(tzString.toUpperCase() === 'Z'){ // if iso8601 with Z, its 0 minute offset
			return 0;
		}

		if(!/^(\-|\+)\d{4}$/.test(tzString)){ // possibly a user defined tz, so just give it back
			return tzString;
		}

		return ((tzString.substr(0,1) =='-'? -1 : 1) * // plus or minus
					((parseInt(tzString.substr(1,2),10)*60) + // hours (converted to minutes)
					parseInt(tzString.substr(3,2),10))); // minutes
	};

	/**
	 * No way to set timezone in js Date, so we must adjust the minutes to compensate. (think setDate, getDate)
	 * @param  date
	 * @param  string formated like "+0500", "-1245"
	 * @return date
	 */
	$.timepicker.timezoneAdjust = function(date, toTimezone) {
		var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
		if(!isNaN(toTz)){
			var currTz = date.getTimezoneOffset()*-1,
				diff = currTz - toTz; // difference in minutes

			date.setMinutes(date.getMinutes()+diff);
		}
		return date;
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the timepicker() call
	 * @return jQuery
	 */
	$.timepicker.timeRange = function(startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.datetimeRange = function(startTime, endTime, options) {
		$.timepicker.handleRange('datetimepicker', startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.dateRange = function(startTime, endTime, options) {
		$.timepicker.handleRange('datepicker', startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.handleRange = function(method, startTime, endTime, options) {
		options = $.extend({}, {
			minInterval: 0, // min allowed interval in milliseconds
			maxInterval: 0, // max allowed interval in milliseconds
			start: {},      // options for start picker
			end: {}         // options for end picker
		}, options);

		$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates($(this), endTime);
			},
			onSelect: function(selectedDateTime) {
				selected($(this), endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates($(this), startTime);
			},
			onSelect: function(selectedDateTime) {
				selected($(this), startTime, 'maxDate');
			}
		}, options, options.end));

		checkDates(startTime, endTime);
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');

		function checkDates(changed, other) {
			var startdt = startTime[method]('getDate'),
				enddt = endTime[method]('getDate'),
				changeddt = changed[method]('getDate');

			if(startdt !== null){
				var minDate = new Date(startdt.getTime()),
					maxDate = new Date(startdt.getTime());

				minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
				maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);

				if(options.minInterval > 0 && minDate > enddt){ // minInterval check
					endTime[method]('setDate',minDate);
				}
				else if(options.maxInterval > 0 && maxDate < enddt){ // max interval check
					endTime[method]('setDate',maxDate);
				}
				else if (startdt > enddt) {
					other[method]('setDate',changeddt);
				}
			}
		}

		function selected(changed, other, option) {
			if (!changed.val()) {
				return;
			}
			var date = changed[method].call(changed, 'getDate');
			if(date !== null && options.minInterval > 0){
				if(option == 'minDate'){
					date.setMilliseconds(date.getMilliseconds() + options.minInterval); 
				}
				if(option == 'maxDate'){
					date.setMilliseconds(date.getMilliseconds() - options.minInterval);
				}
			}
			if (date.getTime) {
				other[method].call(other, 'option', option, date);
			}
		}
		return $([startTime.get(0), endTime.get(0)]);
	};

	/**
	 * Log error or data to the console during error or debugging
	 * @param  Object err pass any type object to log to the console during error or debugging
	 * @return void
	 */
	$.timepicker.log = function(err){
		if(window.console){
			console.log(err);
		}
	};

	/*
	* Rough microsecond support
	*/
	if(!Date.prototype.getMicroseconds){
		Date.microseconds = 0;
		Date.prototype.getMicroseconds = function(){ return this.microseconds; };
		Date.prototype.setMicroseconds = function(m){ this.microseconds = m; return this; };
	}

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.3";

})(jQuery);
/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		clearText: '??????',
		prevText: '&#x3c;??????',
		nextText: '??????&#x3e;',
		currentText: '??????',
		monthNames: ['??????','??????','??????','??????','??????','??????',
		'??????','??????','??????','??????','?????????','?????????'],
		monthNamesShort: ['???','???','???','???','???','???',
		'???','???','???','???','??????','??????'],
		dayNames: ['?????????','?????????','?????????','?????????','?????????','?????????','?????????'],
		dayNamesShort: ['??????','??????','??????','??????','??????','??????','??????'],
		dayNamesMin: ['???','???','???','???','???','???','???'],
		weekHeader: '???',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		closeText: '??????',
		showClearButton: true,
		showButtonPanel: true,
		showWeek:true,
		yearSuffix: '???'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
