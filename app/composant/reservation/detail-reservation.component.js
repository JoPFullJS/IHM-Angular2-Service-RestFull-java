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
var reservation_1 = require("../../domain/reservation");
var DetailReservationComponent = (function () {
    function DetailReservationComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', reservation_1.Reservation)
    ], DetailReservationComponent.prototype, "reservation", void 0);
    DetailReservationComponent = __decorate([
        core_1.Component({
            selector: 'detail-reservation',
            templateUrl: 'app/composant/reservation/detail-reservation.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DetailReservationComponent);
    return DetailReservationComponent;
}());
exports.DetailReservationComponent = DetailReservationComponent;
//# sourceMappingURL=detail-reservation.component.js.map