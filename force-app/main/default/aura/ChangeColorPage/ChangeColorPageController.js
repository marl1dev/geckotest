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
    handleChangeText: function(component, event,helper){
        var selectedOptionValue = event.getParam("value");
        if(selectedOptionValue == "cafe"){                    
            helper.addTextBrown(component, event);
        } else if(selectedOptionValue == "negro"){            
            helper.addTextBlack(component, event);
        } else if(selectedOptionValue == "gris"){            
            helper.addTextGray(component, event);
        }
    }
})