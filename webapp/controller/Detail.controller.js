sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("com.hcc.bk5.liv.controller.Detail", {

		_LivId: null,

		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetDetail").attachMatched(this.__onRouteMatched, this);
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
		onCloseDetailPress: function() {
			this.getOwnerComponent().getRouter().navTo("TargetMaster", {}, true);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hcc.bk5.liv.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hcc.bk5.liv.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hcc.bk5.liv.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});