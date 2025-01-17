/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){"use strict";var e,i;if(t.ui=t.ui||{},t.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.extend(t.expr.pseudos,{data:t.expr.createPseudo?t.expr.createPseudo((function(e){return function(i){return!!t.data(i,e)}})):function(e,i,n){return!!t.data(e,n[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.fn.extend({disableSelection:(e="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(e+".ui-disableSelection",(function(t){t.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.ui.focusable=function(e,i){var n,o,s,r,l,a=e.nodeName.toLowerCase();return"area"===a?(o=(n=e.parentNode).name,!(!e.href||!o||"map"!==n.nodeName.toLowerCase())&&((s=t("img[usemap='#"+o+"']")).length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(a)?(r=!e.disabled)&&(l=t(e).closest("fieldset")[0])&&(r=!l.disabled):r="a"===a&&e.href||i,r&&t(e).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)e=(t=t.parent()).css("visibility");return"visible"===e}(t(e)))},t.extend(t.expr.pseudos,{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout((function(){var i=e.data("ui-form-reset-instances");t.each(i,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element._form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
t.expr.pseudos||(t.expr.pseudos=t.expr[":"]),t.uniqueSort||(t.uniqueSort=t.unique),!t.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,o=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};t.escapeSelector=function(t){return(t+"").replace(n,o)}}t.fn.even&&t.fn.odd||t.fn.extend({even:function(){return this.filter((function(t){return t%2==0}))},odd:function(){return this.filter((function(t){return t%2==1}))}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.fn.labels=function(){var e,i,n,o,s;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(o=this.eq(0).parents("label"),(n=this.attr("id"))&&(s=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),i="label[for='"+t.escapeSelector(n)+"']",o=o.add(s.find(i).addBack(i))),this.pushStack(o)):this.pushStack([])},t.ui.plugin={add:function(e,i,n){var o,s=t.ui[e].prototype;for(o in n)s.plugins[o]=s.plugins[o]||[],s.plugins[o].push([i,n[o]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(){var e,i=Math.max,n=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,f=t.fn.position;function h(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function u(e,i){return parseInt(t.css(e,i),10)||0}function c(t){return null!=t&&t===t.window}function d(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:c(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,n,o=t("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),s=o.children()[0];return t("body").append(o),i=s.offsetWidth,o.css("overflow","scroll"),i===(n=s.offsetWidth)&&(n=o[0].clientWidth),o.remove(),e=i-n},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=c(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:o,offset:!n&&!o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);var a,c,p,g,m,v,y="string"==typeof(e=t.extend({},e)).of?t(document).find(e.of):t(e.of),w=t.position.getWithinInfo(e.within),b=t.position.getScrollInfo(w),_=(e.collision||"flip").split(" "),x={};return v=d(y),y[0].preventDefault&&(e.at="left top"),c=v.width,p=v.height,g=v.offset,m=t.extend({},g),t.each(["my","at"],(function(){var t,i,n=(e[this]||"").split(" ");1===n.length&&(n=o.test(n[0])?n.concat(["center"]):s.test(n[0])?["center"].concat(n):["center","center"]),n[0]=o.test(n[0])?n[0]:"center",n[1]=s.test(n[1])?n[1]:"center",t=r.exec(n[0]),i=r.exec(n[1]),x[this]=[t?t[0]:0,i?i[0]:0],e[this]=[l.exec(n[0])[0],l.exec(n[1])[0]]})),1===_.length&&(_[1]=_[0]),"right"===e.at[0]?m.left+=c:"center"===e.at[0]&&(m.left+=c/2),"bottom"===e.at[1]?m.top+=p:"center"===e.at[1]&&(m.top+=p/2),a=h(x.at,c,p),m.left+=a[0],m.top+=a[1],this.each((function(){var o,s,r=t(this),l=r.outerWidth(),f=r.outerHeight(),d=u(this,"marginLeft"),v=u(this,"marginTop"),W=l+d+u(this,"marginRight")+b.width,C=f+v+u(this,"marginBottom")+b.height,E=t.extend({},m),L=h(x.my,r.outerWidth(),r.outerHeight());"right"===e.my[0]?E.left-=l:"center"===e.my[0]&&(E.left-=l/2),"bottom"===e.my[1]?E.top-=f:"center"===e.my[1]&&(E.top-=f/2),E.left+=L[0],E.top+=L[1],o={marginLeft:d,marginTop:v},t.each(["left","top"],(function(i,n){t.ui.position[_[i]]&&t.ui.position[_[i]][n](E,{targetWidth:c,targetHeight:p,elemWidth:l,elemHeight:f,collisionPosition:o,collisionWidth:W,collisionHeight:C,offset:[a[0]+L[0],a[1]+L[1]],my:e.my,at:e.at,within:w,elem:r})})),e.using&&(s=function(t){var o=g.left-E.left,s=o+c-l,a=g.top-E.top,h=a+p-f,u={target:{element:y,left:g.left,top:g.top,width:c,height:p},element:{element:r,left:E.left,top:E.top,width:l,height:f},horizontal:s<0?"left":o>0?"right":"center",vertical:h<0?"top":a>0?"bottom":"middle"};c<l&&n(o+s)<c&&(u.horizontal="center"),p<f&&n(a+h)<p&&(u.vertical="middle"),i(n(o),n(s))>i(n(a),n(h))?u.important="horizontal":u.important="vertical",e.using.call(this,t,u)}),r.offset(t.extend(E,{using:s}))}))},t.ui.position={fit:{left:function(t,e){var n,o=e.within,s=o.isWindow?o.scrollLeft:o.offset.left,r=o.width,l=t.left-e.collisionPosition.marginLeft,a=s-l,f=l+e.collisionWidth-r-s;e.collisionWidth>r?a>0&&f<=0?(n=t.left+a+e.collisionWidth-r-s,t.left+=a-n):t.left=f>0&&a<=0?s:a>f?s+r-e.collisionWidth:s:a>0?t.left+=a:f>0?t.left-=f:t.left=i(t.left-l,t.left)},top:function(t,e){var n,o=e.within,s=o.isWindow?o.scrollTop:o.offset.top,r=e.within.height,l=t.top-e.collisionPosition.marginTop,a=s-l,f=l+e.collisionHeight-r-s;e.collisionHeight>r?a>0&&f<=0?(n=t.top+a+e.collisionHeight-r-s,t.top+=a-n):t.top=f>0&&a<=0?s:a>f?s+r-e.collisionHeight:s:a>0?t.top+=a:f>0?t.top-=f:t.top=i(t.top-l,t.top)}},flip:{left:function(t,e){var i,o,s=e.within,r=s.offset.left+s.scrollLeft,l=s.width,a=s.isWindow?s.scrollLeft:s.offset.left,f=t.left-e.collisionPosition.marginLeft,h=f-a,u=f+e.collisionWidth-l-a,c="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];h<0?((i=t.left+c+d+p+e.collisionWidth-l-r)<0||i<n(h))&&(t.left+=c+d+p):u>0&&((o=t.left-e.collisionPosition.marginLeft+c+d+p-a)>0||n(o)<u)&&(t.left+=c+d+p)},top:function(t,e){var i,o,s=e.within,r=s.offset.top+s.scrollTop,l=s.height,a=s.isWindow?s.scrollTop:s.offset.top,f=t.top-e.collisionPosition.marginTop,h=f-a,u=f+e.collisionHeight-l-a,c="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,p=-2*e.offset[1];h<0?((o=t.top+c+d+p+e.collisionHeight-l-r)<0||o<n(h))&&(t.top+=c+d+p):u>0&&((i=t.top-e.collisionPosition.marginTop+c+d+p-a)>0||n(i)<u)&&(t.top+=c+d+p)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.fn.scrollParent=function(e){var i=this.css("position"),n="absolute"===i,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==i&&s.length?s:t(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.extend(t.expr.pseudos,{tabbable:function(e){var i=t.attr(e,"tabindex"),n=null!=i;return(!n||i>=0)&&t.ui.focusable(e,n)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
t.fn.extend({uniqueId:(i=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++i)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")}))}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var s,r=0,l=Array.prototype.hasOwnProperty,a=Array.prototype.slice;t.cleanData=(s=t.cleanData,function(e){var i,n,o;for(o=0;null!=(n=e[o]);o++)(i=t._data(n,"events"))&&i.remove&&t(n).triggerHandler("remove");s(e)}),t.widget=function(e,i,n){var o,s,r,l={},a=e.split(".")[0],f=a+"-"+(e=e.split(".")[1]);return n||(n=i,i=t.Widget),Array.isArray(n)&&(n=t.extend.apply(null,[{}].concat(n))),t.expr.pseudos[f.toLowerCase()]=function(e){return!!t.data(e,f)},t[a]=t[a]||{},o=t[a][e],s=t[a][e]=function(t,e){if(!this||!this._createWidget)return new s(t,e);arguments.length&&this._createWidget(t,e)},t.extend(s,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),(r=new i).options=t.widget.extend({},r.options),t.each(n,(function(t,e){l[t]="function"==typeof e?function(){function n(){return i.prototype[t].apply(this,arguments)}function o(e){return i.prototype[t].apply(this,e)}return function(){var t,i=this._super,s=this._superApply;return this._super=n,this._superApply=o,t=e.apply(this,arguments),this._super=i,this._superApply=s,t}}():e})),s.prototype=t.widget.extend(r,{widgetEventPrefix:o&&r.widgetEventPrefix||e},l,{constructor:s,namespace:a,widgetName:e,widgetFullName:f}),o?(t.each(o._childConstructors,(function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,s,i._proto)})),delete o._childConstructors):i._childConstructors.push(s),t.widget.bridge(e,s),s},t.widget.extend=function(e){for(var i,n,o=a.call(arguments,1),s=0,r=o.length;s<r;s++)for(i in o[s])n=o[s][i],l.call(o[s],i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var s="string"==typeof o,r=a.call(arguments,1),l=this;return s?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?"function"!=typeof s[o]||"_"===o.charAt(0)?t.error("no such method '"+o+"' for "+e+" widget instance"):(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=r++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<n.length-1;s++)o[n[s]]=o[n[s]]||{},o=o[n[s]];if(e=n.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,n,o;for(i in e)o=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&o&&o.length&&(n=t(o.get()),this._removeClass(o,i),n.addClass(this._classes({element:n,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],n=this;function o(){var i=[];e.element.each((function(e,o){t.map(n.classesElementLookup,(function(t){return t})).some((function(t){return t.is(o)}))||i.push(o)})),n._on(t(i),{remove:"_untrackClassesElement"})}function s(s,r){var l,a;for(a=0;a<s.length;a++)l=n.classesElementLookup[s[a]]||t(),e.add?(o(),l=t(t.uniqueSort(l.get().concat(e.element.get())))):l=t(l.not(e.element).get()),n.classesElementLookup[s[a]]=l,i.push(s[a]),r&&e.classes[s[a]]&&i.push(e.classes[s[a]])}return(e=t.extend({element:this.element,classes:this.options.classes||{}},e)).keys&&s(e.keys.match(/\S+/g)||[],!0),e.extra&&s(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(n,o){-1!==t.inArray(e.target,o)&&(i.classesElementLookup[n]=t(o.not(e.target).get()))})),this._off(t(e.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){n="boolean"==typeof n?n:i;var o="string"==typeof t||null===t,s={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n};return s.element.toggleClass(this._classes(s),n),this},_on:function(e,i,n){var o,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=o=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,o=this.widget()),t.each(n,(function(n,r){function l(){if(e||!0!==s.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}"string"!=typeof r&&(l.guid=r.guid=r.guid||l.guid||t.guid++);var a=n.match(/^([\w:-]*)\s*(.*)$/),f=a[1]+s.eventNamespace,h=a[2];h?o.on(f,h,l):i.on(f,l)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!("function"==typeof r&&!1===r.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){var r;"string"==typeof o&&(o={effect:o});var l=o?!0===o||"number"==typeof o?i:o.effect||i:e;"number"==typeof(o=o||{})?o={duration:o}:!0===o&&(o={}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[l]?n[e](o):l!==e&&n[l]?n[l](o.duration,o.easing,s):n.queue((function(i){t(this)[e](),s&&s.call(n[0]),i()}))}}))}));