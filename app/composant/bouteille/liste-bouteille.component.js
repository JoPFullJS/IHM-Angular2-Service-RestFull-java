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
var detail_bouteille_component_1 = require("./detail-bouteille.component");
var bouteille_service_1 = require("../../service/bouteille.service");
var ListeBouteilleComponent = (function () {
    function ListeBouteilleComponent(bouteilleService) {
        this.bouteilleService = bouteilleService;
    }
    ListeBouteilleComponent.prototype.chargerBouteille = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        this.bouteilleService
            .obtenirBouteilles()
            .then(function (resultat) { return _this.bouteilles = resultat; });
    };
    ListeBouteilleComponent.prototype.ngOnInit = function () {
        this.chargerBouteille();
    };
    ListeBouteilleComponent = __decorate([
        core_1.Component({
            selector: 'liste-bouteille',
            templateUrl: 'app/composant/bouteille/liste-bouteille.component.html',
            directives: [detail_bouteille_component_1.DetailBouteilleComponent],
            providers: [bouteille_service_1.BouteilleService]
        }), 
        __metadata('design:paramtypes', [bouteille_service_1.BouteilleService])
    ], ListeBouteilleComponent);
    return ListeBouteilleComponent;
}());
exports.ListeBouteilleComponent = ListeBouteilleComponent;
//# sourceMappingURL=liste-bouteille.component.js.map