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
var http_1 = require("@angular/http");
var lang_1 = require("@angular/forms/src/facade/lang");
var ReservationService = (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.ajouterReservations = function (reservation) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({
            'headers': headers
        });
        return this.http
            .post('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation', lang_1.Json.stringify(reservation), options)
            .toPromise();
    };
    ReservationService.prototype.obtenirReservations = function () {
        return this.http
            .get('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    ReservationService.prototype.supprimerReservations = function (identifiant) {
        var urlDelete = 'http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation/' + identifiant;
        this.http
            .delete(urlDelete)
            .toPromise()
            .then()
            .catch();
    };
    ReservationService.prototype.modifierReservations = function (reservations) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({
            'headers': headers
        });
        return this.http
            .put('http://localhost:8080/com.projetrestau-0.1-SNAPSHOT/ws/reservation', lang_1.Json.stringify(reservations), options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch();
    };
    ReservationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReservationService);
    return ReservationService;
}());
exports.ReservationService = ReservationService;
//# sourceMappingURL=reservation.service.js.map