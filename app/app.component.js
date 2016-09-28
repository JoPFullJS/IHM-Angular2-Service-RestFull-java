"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var liste_bouteille_component_1 = require("./composant/bouteille/liste-bouteille.component");
var liste_cave_component_1 = require("./composant/cave/liste-cave.component");
var liste_reservation_component_1 = require("./composant/reservation/liste-reservation.component");
var liste_client_component_1 = require("./composant/client/liste-client.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'wineo',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [liste_bouteille_component_1.ListeBouteilleComponent, liste_cave_component_1.ListeCaveComponent, liste_client_component_1.ListeClientComponent, liste_reservation_component_1.ListeReservationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map