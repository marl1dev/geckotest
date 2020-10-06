({
    addstyleRed : function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'externalYellow');
        $A.util.removeClass(targetComponent, 'externalBlue');
        $A.util.addClass(targetComponent,'externalRed');
    },
    addstyleYellow : function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'externalBlue');
        $A.util.removeClass(targetComponent, 'externalRed');
        $A.util.addClass(targetComponent,'externalYellow');
    },
    addstyleBlue : function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'externalRed');
        $A.util.removeClass(targetComponent, 'externalYellow');
        $A.util.addClass(targetComponent,'externalBlue');
    }    
})