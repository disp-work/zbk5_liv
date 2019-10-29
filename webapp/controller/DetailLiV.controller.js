sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/hcc/bk5/liv/model/formatter",
	"sap/ui/core/UIComponent"
], function(Controller, formatter, UIComponent) {
	"use strict";

	return Controller.extend("com.hcc.bk5.liv.controller.DetailLiV", {
		formatter: formatter,
		_LivId: null,

		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetDetailLiV").attachMatched(this.__onRouteMatched, this);
		},

		__onRouteMatched: function(oEvent) {
			var that = this;
			this._LivId = oEvent.getParameter("arguments").LivId;
			this.getView().bindElement({
				path: "/LiVSet('" + this._LivId + "')",
				events: {
					dataRequested: function() {
						that.getView().setBusy(true);
					},
					dataReceived: function() {
						that.getView().setBusy(false);
					}
				}
			});
		},

		/**
		 * Set the full screen mode to false and navigate to master page
		 */
		onCloseDetailPressLiV: function() {
			this.getOwnerComponent().getRouter().navTo("TargetMasterLiV", {}, true);
		},

	});

});