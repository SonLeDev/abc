import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { MainConfigApp } from "./app/main.config.module.app";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(MainConfigApp)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherise, log the boot error
  })
  .catch(err => console.log(err));
