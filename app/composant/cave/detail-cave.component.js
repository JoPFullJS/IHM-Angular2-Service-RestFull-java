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
var cave_1 = require("../../domain/cave");
var detail_bouteille_component_1 = require("../bouteille/detail-bouteille.component");
var ajout_bouteille_component_1 = require("../bouteille/ajout-bouteille.component");
var DetailCaveComponent = (function () {
    function DetailCaveComponent() {
    }
    /**
     * Sélectionner une bouteille.
     *
     * @param bouteille La bouteille sélectionnée.
     */
    DetailCaveComponent.prototype.selectionnerBouteille = function (bouteille) {
        this.bouteilleSelectionnee = bouteille;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cave_1.Cave)
    ], DetailCaveComponent.prototype, "cave", void 0);
    DetailCaveComponent = __decorate([
        core_1.Component({
            selector: 'detail-cave',
            templateUrl: 'app/composant/cave/detail-cave.component.html',
            directives: [detail_bouteille_component_1.DetailBouteilleComponent, ajout_bouteille_component_1.AjoutBouteilleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailCaveComponent);
    return DetailCaveComponent;
}());
exports.DetailCaveComponent = DetailCaveComponent;
//# sourceMappingURL=detail-cave.component.js.map