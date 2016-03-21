'use strict';
var angular = require('angular');
var _ = require('lodash');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var __notification = typescript_angular_utilities_1.services.notification;
var autosaveAction_service_1 = require('../autosaveAction/autosaveAction.service');
var triggers = require('./triggers/triggers.service');
exports.triggers = triggers;
var form_service_1 = require('../form/form.service');
exports.moduleName = 'rl.ui.services.autosave';
exports.factoryName = 'autosaveFactory';
var AutosaveService = (function () {
    function AutosaveService(notification, autosaveService, options, triggerServiceFactory, formService) {
        var _this = this;
        this.notification = notification;
        this.autosaveService = autosaveService;
        this.formService = formService;
        this.autosave = function () {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i - 0] = arguments[_i];
            }
            var result = _this.validateAndSave.apply(_this, data);
            if (_.isBoolean(result)) {
                return result;
            }
            else {
                _this.autosaveService.trigger(result);
                return true;
            }
        };
        this.contentForm = options.contentForm || this.nullForm();
        this.save = options.save;
        this.saveWhenInvalid = options.saveWhenInvalid;
        this.triggerService = triggerServiceFactory.getInstance();
        this.configureTriggers(options);
        this.triggerService.setTriggers(options.triggers, this.autosave);
    }
    AutosaveService.prototype.validateAndSave = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i - 0] = arguments[_i];
        }
        if (this.contentForm.$pristine) {
            return true;
        }
        if (this.contentForm.$valid || this.saveWhenInvalid) {
            var promise = this.save.apply(this, data);
            if (!_.isUndefined(promise)) {
                return promise.then(function () {
                    if (_this.contentForm != null) {
                        _this.contentForm.$setPristine();
                    }
                });
            }
            return true;
        }
        else {
            this.notification.warning(this.formService.getAggregateError(this.contentForm));
            return false;
        }
    };
    AutosaveService.prototype.configureTriggers = function (options) {
        this.triggerService.triggers.onChange.configure({
            form: options.contentForm,
            setChangeListener: options.setChangeListener,
            debounceDuration: options.debounceDuration,
            saveWhenInvalid: options.saveWhenInvalid,
        });
    };
    AutosaveService.prototype.nullForm = function () {
        return {
            $pristine: false,
            $dirty: true,
            $valid: true,
            $setPristine: function () {
                return;
            },
        };
    };
    return AutosaveService;
}());
autosaveServiceFactory.$inject = [__notification.serviceName, autosaveAction_service_1.serviceName, triggers.factoryName, form_service_1.serviceName];
function autosaveServiceFactory(notification, autosaveService, triggerServiceFactory, formService) {
    'use strict';
    return {
        getInstance: function (options) {
            return new AutosaveService(notification, autosaveService, options, triggerServiceFactory, formService);
        }
    };
}
angular.module(exports.moduleName, [__notification.moduleName, autosaveAction_service_1.moduleName, triggers.moduleName, form_service_1.moduleName])
    .factory(exports.factoryName, autosaveServiceFactory);
//# sourceMappingURL=autosave.service.js.map