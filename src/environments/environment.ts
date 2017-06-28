// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';

let PROVIDERS: any[] = [
  // common env directives
];
let _decorateModuleRef = function identity<T>(value: T): T { return value; };

_decorateModuleRef = (modRef: any) => {
  const appRef = modRef.injector.get(ApplicationRef);
  const cmpRef = appRef.components[0];

  let _ng = (<any>window).ng;
  enableDebugTools(cmpRef);
  (<any>window).ng.probe = _ng.probe;
  (<any>window).ng.coreTokens = _ng.coreTokens;
  return modRef;
};

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
export const environment = {  
  production: false,  
};