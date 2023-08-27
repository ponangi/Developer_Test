sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},

			/* Photo Formatter*/
			formatPhoto : function (sValue) {
				if (!sValue) {
					return "";
				}
				return "data:image/png;base64," + sValue.substring(104);
			}

		};

	}
);