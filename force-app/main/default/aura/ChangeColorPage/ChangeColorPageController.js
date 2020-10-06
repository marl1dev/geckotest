({
    handleChange : function(component, event,helper) {
        var selectedOptionValue = event.getParam("value");                
        if(selectedOptionValue == "rojo"){                    
            helper.addstyleRed(component, event);           
        } else if(selectedOptionValue == "amarillo"){            
            helper.addstyleYellow(component, event);           
        } else if(selectedOptionValue == "azul"){            
            helper.addstyleBlue(component, event);                      
        }
    },
    colorChanger : function(component,event,helper){
        var pickedColor = component.find("colorPicker").get("v.value");
        console.log(pickedColor);
    }
})