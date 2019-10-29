sap.ui.define([
	"sap/ui/core/ValueState"
], function(ValueState) {
	"use strict";

	return {

		getTextForState: function(sState) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();

			switch (sState) {
				case ValueState.Warning:
					// Warning
					return oBundle.getText("stateWarning");
				case ValueState.Error:
					// Error
					return oBundle.getText("stateError");
				case ValueState.None:
				case ValueState.Success:
				case ValueState.Information:
					// None
					return oBundle.getText("stateNone");
			}
		},

		getIconForState: function(sState) {

			switch (sState) {
				case ValueState.Warning:
					// Warning
					return "sap-icon://status-negative";
				case ValueState.Error:
					// Error
					return "sap-icon://status-critical";
				case ValueState.None:
				case ValueState.Success:
				case ValueState.Information:
					// None
					return "sap-icon://status-positive";
			}
		},

	};
});