// /// <reference path='../../../typings/commonjs.d.ts' />
"use strict";
var angular = require('angular');
var componentsDefaultTheme_1 = require('../componentsDefaultTheme');
exports.moduleName = 'rl.ui.components.checkbox';
exports.componentName = 'rlCheckbox';
exports.controllerName = 'CheckboxController';
var CheckboxController = (function () {
    function CheckboxController(useDefaultTheme) {
        this.useDefaultTheme = useDefaultTheme;
    }
    Object.defineProperty(CheckboxController.prototype, "checked", {
        get: function () {
            return this.ngModel.$viewValue;
        },
        set: function (value) {
            this.ngModel.$setViewValue(value);
        },
        enumerable: true,
        configurable: true
    });
    CheckboxController.prototype.toggle = function () {
        if (this.active && !this.ngDisabled) {
            this.checked = !this.checked;
            this.onToggle({ value: this.checked });
        }
    };
    CheckboxController.prototype.$onInit = function () {
        this.active = this.active != null ? this.active : true;
    };
    CheckboxController.$inject = [componentsDefaultTheme_1.defaultThemeValueName];
    return CheckboxController;
}());
exports.CheckboxController = CheckboxController;
var checkbox = {
    require: { ngModel: 'ngModel' },
    transclude: true,
    template: require('./checkbox.html'),
    controller: exports.controllerName,
    controllerAs: 'checkbox',
    bindings: {
        ngDisabled: '<?',
        active: '<?',
        onToggle: '&',
    },
};
angular.module(exports.moduleName, [])
    .component(exports.componentName, checkbox)
    .controller(exports.controllerName, CheckboxController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7O0FBRTFELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBRW5DLHVDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBRXJELGtCQUFVLEdBQVcsMkJBQTJCLENBQUM7QUFDakQscUJBQWEsR0FBVyxZQUFZLENBQUM7QUFDckMsc0JBQWMsR0FBVyxvQkFBb0IsQ0FBQztBQVkzRDtJQXdCQyw0QkFBbUIsZUFBd0I7UUFBeEIsb0JBQWUsR0FBZixlQUFlLENBQVM7SUFBRyxDQUFDO0lBaEIvQyxzQkFBSSx1Q0FBTzthQUFYO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7YUFFRCxVQUFZLEtBQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxtQ0FBTSxHQUFOO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNGLENBQUM7SUFLRCxvQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBTE0sMEJBQU8sR0FBYSxDQUFDLDhDQUFxQixDQUFDLENBQUM7SUFNcEQseUJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLDBCQUFrQixxQkE2QjlCLENBQUE7QUFFRCxJQUFNLFFBQVEsR0FBOEI7SUFDM0MsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtJQUMvQixVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0lBQ3BDLFVBQVUsRUFBRSxzQkFBYztJQUMxQixZQUFZLEVBQUUsVUFBVTtJQUN4QixRQUFRLEVBQUU7UUFDVCxVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsSUFBSTtRQUNaLFFBQVEsRUFBRSxHQUFHO0tBQ2I7Q0FDRCxDQUFDO0FBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxrQkFBVSxFQUFFLEVBQUUsQ0FBQztLQUM1QixTQUFTLENBQUMscUJBQWEsRUFBRSxRQUFRLENBQUM7S0FDbEMsVUFBVSxDQUFDLHNCQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyJ9