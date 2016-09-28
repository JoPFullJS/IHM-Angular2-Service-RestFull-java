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
var detail_reservation_component_1 = require("./detail-reservation.component");
var reservation_service_1 = require("../../service/reservation.service");
var reservation_1 = require("../../domain/reservation");
var primeng_1 = require("primeng/primeng");
var router_deprecated_1 = require("@angular/router-deprecated");
var ListeReservationComponent = (function () {
    function ListeReservationComponent(reservationService) {
        this.reservationService = reservationService;
        this.nouvelleReservation = new reservation_1.Reservation();
    }
    ListeReservationComponent.prototype.ngOnInit = function () {
        this.chargerReservation();
    };
    ListeReservationComponent.prototype.chargerReservation = function () {
        var _this = this;
        this.reservationService
            .obtenirReservations()
            .then(function (resultat) { return _this.reservations = resultat; });
    };
    ListeReservationComponent.prototype.supprimerReservation = function () {
        this.reservationService
            .supprimerReservations(this.reservationSelectionnee.idUnique);
        // .then();
    };
    ListeReservationComponent.prototype.modifier = function () {
        this.reservationService.modifierReservations(this.reservations);
    };
    ListeReservationComponent.prototype.creerNouvelleReservation = function () {
        this.reservationService.ajouterReservations(this.nouvelleReservation);
    };
    ListeReservationComponent = __decorate([
        core_1.Component({
            selector: 'liste-reservation',
            templateUrl: 'app/composant/reservation/liste-reservation.component.html',
            providers: [reservation_service_1.ReservationService],
            directives: [detail_reservation_component_1.DetailReservationComponent, primeng_1.DataTable, primeng_1.Column, primeng_1.TabPanel, primeng_1.TabView, primeng_1.Header, primeng_1.Footer, primeng_1.Dialog, primeng_1.Button, primeng_1.InputText, router_deprecated_1.ROUTER_DIRECTIVES,]
        }), 
        __metadata('design:paramtypes', [reservation_service_1.ReservationService])
    ], ListeReservationComponent);
    return ListeReservationComponent;
}());
exports.ListeReservationComponent = ListeReservationComponent;
//# sourceMappingURL=liste-reservation.component.js.map