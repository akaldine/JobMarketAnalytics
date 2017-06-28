import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';

let PROVIDERS: any[] = [
  // common env directives
];

let _decorateModuleRef = function identity<T>(value: T): T { return value; };

disableDebugTools();
enableProdMode();

PROVIDERS = [
  ...PROVIDERS,
  // custom providers in production
];

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
export const environment = {  
  production: true,  
};