'use strict';
// /// <reference path='../../../typings/bootstrapDateTimePicker.d.ts' />
require('../../../libraries/bootstrap-datetimepicker/index');
var angular = require('angular');
var $ = require('jquery');
var _ = require('lodash');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var __dateTimeFormatStrings = typescript_angular_utilities_1.services.date;
var __object = typescript_angular_utilities_1.services.object;
var componentValidator_service_1 = require('../../services/componentValidator/componentValidator.service');
exports.moduleName = 'rl.ui.components.dateTime';
exports.directiveName = 'rlDateTime';
exports.controllerName = 'DateTimeController';
var DateTimeController = (function () {
    function DateTimeController($scope, componentValidatorFactory) {
        var _this = this;
        var unregister = $scope.$watch(function () { return _this.ngModel; }, function (value) {
            if (!_.isUndefined(_this.validator)) {
                _this.dateTimeValidator = componentValidatorFactory.getInstance({
                    ngModel: _this.ngModel,
                    $scope: $scope,
                    validators: [_this.validator],
                });
            }
            unregister();
        });
    }
    Object.defineProperty(DateTimeController.prototype, "dateTimeValue", {
        get: function () {
            this.timeZone = 'EST';
            return this.ngModel.$viewValue;
        },
        set: function (value) {
            //
            this.ngModel.$setViewValue(value);
        },
        enumerable: true,
        configurable: true
    });
    DateTimeController.prototype.onClearClick = function () {
        this.ngModel.$setViewValue('');
        this.onClearEvent();
    };
    DateTimeController.$inject = ['$scope', componentValidator_service_1.factoryName];
    return DateTimeController;
})();
exports.DateTimeController = DateTimeController;
dateTime.$inject = [typescript_angular_utilities_1.services.moment.serviceName, __dateTimeFormatStrings.dateTimeFormatServiceName, __object.serviceName];
function dateTime(moment, dateTimeFormatStrings, object) {
    'use strict';
    return {
        restrict: 'E',
        template: require('./dateTime.html'),
        require: '?^ngModel',
        controller: exports.controllerName,
        controllerAs: 'dateTime',
        scope: {},
        bindToController: {
            minuteStepping: '=',
            useDate: '=',
            useTime: '=',
            min: '=',
            max: '=',
            validator: '=',
            clearButton: '=',
            onClearEvent: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            var dateTime = scope.dateTime;
            dateTime.ngModel = ngModel;
            // defaults to true
            var hasDate = _.isUndefined(dateTime.useDate) ? true : dateTime.useDate;
            var hasTime = _.isUndefined(dateTime.useTime) ? true : dateTime.useTime;
            var defaults = element.datetimepicker.defaults;
            var min = dateTime.min != null ? dateTime.min : defaults.minDate;
            var max = dateTime.max != null ? dateTime.max : defaults.maxDate;
            scope.$watch(function () { return ngModel.$viewValue; }, function (newValue) {
                dateTime.validFormat = object.isNullOrEmpty(newValue)
                    ? true
                    : moment(newValue).isValid();
            });
            element.find('.show-date-picker').datetimepicker({
                stepping: dateTime.minuteStepping || 1,
                format: dateTime.format || defaultFormat(hasDate, hasTime),
                direction: 'bottom',
                elementHeight: 2,
                pickDate: hasDate,
                pickTime: hasTime,
                minDate: min,
                maxDate: max,
            }).on('change.dp', function () {
                var newValue = $(this).find('input').val();
                ngModel.$setViewValue(newValue);
                scope.$apply();
            });
            function defaultFormat(hasDate, hasTime) {
                if (hasDate && hasTime) {
                    return dateTimeFormatStrings.dateTimeFormat;
                }
                else if (hasDate) {
                    return dateTimeFormatStrings.dateFormat;
                }
                else if (hasTime) {
                    return dateTimeFormatStrings.timeFormat;
                }
                else {
                    // revert to default format
                    return false;
                }
            }
        },
    };
}
angular.module(exports.moduleName, [typescript_angular_utilities_1.services.moment.moduleName, typescript_angular_utilities_1.services.date.moduleName, componentValidator_service_1.moduleName, __object.moduleName])
    .directive(exports.directiveName, dateTime)
    .controller(exports.controllerName, DateTimeController);
//# sourceMappingURL=dateTime.js.map