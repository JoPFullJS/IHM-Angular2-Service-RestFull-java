"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var router_service_1 = require("./service/router.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_service_1.routerService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map