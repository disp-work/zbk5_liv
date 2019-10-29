sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.hcc.bk5.liv.controller.MasterLiV", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcc.bk5.liv.view.Master
		 */
		onInit: function() {
		},

		onItemPressLiV: function(oEvent) {
			var oElement = oEvent.getSource();
			var sObjectPath = oElement.getBindingContextPath();
			var sLivId = oElement.getModel().getData(sObjectPath).LivId;

			this.getOwnerComponent().getRouter().navTo("TargetDetailLiV", {
				LivId: sLivId
			});
		}

	});

});