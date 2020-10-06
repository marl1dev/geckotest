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
    },
    addTextBrown: function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'TextGray');
        $A.util.removeClass(targetComponent, 'TextBlack');
        $A.util.addClass(targetComponent,'TextBrown');
    },
    addTextBlack: function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'TextWhite');
        $A.util.removeClass(targetComponent, 'TextGray');
        $A.util.addClass(targetComponent,'TextBlack');
    },
    addTextGray: function(component, event, helper) {
        var targetComponent = component.find("theContainer");
        $A.util.removeClass(targetComponent, 'TextBrown');
        $A.util.removeClass(targetComponent, 'TextBlack');
        $A.util.addClass(targetComponent,'TextGray');
    }

})