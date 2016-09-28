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
var client_1 = require("../../domain/client");
var reservation_1 = require("../../domain/reservation");
var AjoutReservationComponent = (function () {
    function AjoutReservationComponent() {
        // Reservation à ajouter.
        this.reservation = new reservation_1.Reservation();
    }
    /**
     * Ajouter une nouvelle reservation
     */
    AjoutReservationComponent.prototype.ajouterNouvelleReservation = function () {
        //noinspection TypeScriptUnresolvedFunction
        this.client.reservations.push(Object.assign({}, this.reservation));
        // Nous réinitialisons la reservation liée au formulaire.
        this.reservation = new reservation_1.Reservation();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', client_1.Client)
    ], AjoutReservationComponent.prototype, "client", void 0);
    AjoutReservationComponent = __decorate([
        core_1.Component({
            selector: 'ajout-reservation',
            templateUrl: 'app/composant/reservation/ajout-reservation.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AjoutReservationComponent);
    return AjoutReservationComponent;
}());
exports.AjoutReservationComponent = AjoutReservationComponent;
//# sourceMappingURL=ajout-reservation.component.js.map