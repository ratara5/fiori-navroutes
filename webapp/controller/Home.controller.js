sap.ui.define([
"sap/ui/core/mvc/Controller"
], function (Controller){
    "use strict";

    return Controller.extend("sap.ui.demo.nav.controller.Home", {
        onDisplayNotFound:function(){
            //display the "notFound" target without changing the hash
            this.getOwnerComponent().getRouter().getTargets().display("notFound",{
                fromTarget: "home"
            });
        },

        onNavToEmployees: function(){
            this.getOwnerComponent().getRouter().navTo("employeeList");
        }
    });
}); 