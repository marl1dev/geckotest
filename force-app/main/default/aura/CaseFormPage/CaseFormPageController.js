({
    doSave : function(component, event, helper) {
        var nombre = component.get("v.nombre");
        var apellido = component.get("v.apellido");
        var nombreempresa = component.get("v.nombrempresa");        
        var correoElectronico = component.get("v.correoelectronico");
        var descripcion = component.get("v.descripcioncaso");
        console.log(nombre + ' ' + apellido);
        var action = component.get("c.createAccounts");
        action.setParams({
            "nombre" : nombre,
            "apellido" : apellido, 
            "nombreempresa" : nombreempresa,
            "correo" : correoElectronico,
            "descripcion" : descripcion
        }); 
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                helper.showToast('Exito!', 'Registros creados satifactoriamente', 'success');
                component.set("v.nombre",null);
                component.set("v.apellido",null);
                component.set("v.nombrempresa",null);
                component.set("v.correoelectronico",null);
                component.set("v.descripcioncaso",null);
            }else{
                console.log(state);
            }
        });
        $A.enqueueAction(action);
    }
})
