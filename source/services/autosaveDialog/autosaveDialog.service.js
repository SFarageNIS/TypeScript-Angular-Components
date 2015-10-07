'use strict';
var _ = require('lodash');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var dialog_service_1 = require('../dialog/dialog.service');
var autosaveDialog_controller_1 = require('./autosaveDialog.controller');
exports.serviceName = 'autosaveDialog';
var __autosave = typescript_angular_utilities_1.services.autosave;
var __promise = typescript_angular_utilities_1.services.promise;
var AutosaveDialogService = (function () {
    function AutosaveDialogService($rootScope, dialog, autosaveFactory, promise) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.dialog = dialog;
        this.autosaveFactory = autosaveFactory;
        this.promise = promise;
        this.autosaveCloseHandler = function (explicit) {
            if (explicit) {
                return true;
            }
            return _this.autosave.autosave(_this.data);
        };
        this.setForm = function (form) {
            _this.autosave.contentForm = form;
        };
    }
    AutosaveDialogService.prototype.open = function (options) {
        var _this = this;
        this.promise.resolvePromises(options.resolve).then(function (resolveData) {
            var scope = options.scope;
            if (scope == null) {
                scope = _this.$rootScope.$new();
                options.scope = scope;
            }
            if (options.data == null) {
                options.data = {};
            }
            _this.autosave = _this.autosaveFactory.getInstance(options.save, null, options.validate);
            scope.form = options.form;
            scope.formGetter = options.formGetter;
            scope.setForm = _this.setForm;
            _this.data = _.extend(options.data, resolveData);
            scope.dialog = _this.data;
            var dialogOptions = options;
            dialogOptions.controller = autosaveDialog_controller_1.controllerName;
            dialogOptions.controllerAs = 'controller';
            _this.dialog.open(options, _this.autosaveCloseHandler);
        });
    };
    AutosaveDialogService.$inject = ['$rootScope', dialog_service_1.serviceName, __autosave.factoryName, __promise.serviceName];
    return AutosaveDialogService;
})();
exports.AutosaveDialogService = AutosaveDialogService;
//# sourceMappingURL=autosaveDialog.service.js.map