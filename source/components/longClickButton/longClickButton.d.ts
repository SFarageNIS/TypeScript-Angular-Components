import * as angular from 'angular';
import { services } from 'typescript-angular-utilities';
import __promise = services.promise;
import __object = services.object;
import __notification = services.notification;
import { ButtonAsyncController } from '../buttonAsync/buttonAsync';
export declare let moduleName: string;
export declare let componentName: string;
export declare let controllerName: string;
export declare class LongClickButtonController extends ButtonAsyncController {
    private $interval;
    private $timeout;
    private objectUtility;
    private notification;
    warning: string;
    text: string;
    onShortClickText: string;
    icon: string;
    private interval;
    duration: number;
    buttonText: string;
    width: number;
    active: boolean;
    actionProgress: number;
    private actionInterval;
    static $inject: string[];
    constructor($interval: angular.IIntervalService, $timeout: angular.ITimeoutService, objectUtility: __object.IObjectUtility, promise: __promise.IPromiseUtility, notification: __notification.INotificationService);
    startAction(): void;
    stopAction(): void;
    private cleanup();
    private warn();
    private updateProgressBarWidth();
}
