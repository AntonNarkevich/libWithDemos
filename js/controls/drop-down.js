/*! 5thfinger.responsive - v1.3 - 2013-08-06 12:36 */!function(){RD.controls.dropDown=function(a){function b(){var b=a.visibleFor||jQ.isFunction(a.manageVisibility),c=a.originalElement?!0:!1,d=a.originalElement||jQ.isFunction(a.managePlace);return b&&c&&d}function c(){function b(a,b){var c=a.find("option"),f=b.find("option");jQ.each(f,function(){var a=jQ(this),b=jQ(c[a.index()]);a.is(":selected")?b.prop("selected",!0):b.prop("selected",!1)}),e.find("option:selected").length?d.text(e.find("option:selected").text()):d.text("- select -")}var c=jQ(a.originalElement),d=jQ("<div>").addClass(h.getFullCssClass("text")).appendTo(f),e=c.clone().removeAttr("id").removeAttr("class").removeAttr("name").appendTo(f);b(e,c),c.change(function(){b(e,c)}),e.change(function(){b(c,e)})}function d(){f.insertAfter(a.originalElement)}function e(){h.manageVisibility(f,jQ(a.originalElement),a.visibleFor)}var f,g,h=RD.controls.baseControl({baseCssClass:"drop-down"}),i={originalElement:null,cssClass:"",visibleFor:null,manageVisibility:e,managePlace:d,onCreationStart:null,onCreationComplete:null};return h.validate(b(),function(){a=jQ.extend(i,a),f=jQ("<div>").addClass(h.getFullCssClass()).addClass(a.cssClass),jQ.isFunction(a.onCreationStart)&&a.onCreationStart(f),a.managePlace(f),c(),a.manageVisibility(f),jQ.isFunction(a.onCreationComplete)&&a.onCreationComplete(f),g={$el:f}}),g},RD.eventManager.trigger("controlReady",{name:"dropDown"})}();