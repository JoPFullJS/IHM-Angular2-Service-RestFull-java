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
var bouteille_1 = require("../../domain/bouteille");
var AjoutBouteilleComponent = (function () {
    function AjoutBouteilleComponent() {
        // Bouteille à ajouter.
        this.bouteille = new bouteille_1.Bouteille();
    }
    /**
     * Ajouter une nouvelle bouteille
     */
    AjoutBouteilleComponent.prototype.ajouterNouvelleBouteille = function () {
        //noinspection TypeScriptUnresolvedFunction
        this.cave.bouteilles.push(Object.assign({}, this.bouteille));
        // Nous réinitialisons la bouteille liée au formulaire.
        this.bouteille = new bouteille_1.Bouteille();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cave_1.Cave)
    ], AjoutBouteilleComponent.prototype, "cave", void 0);
    AjoutBouteilleComponent = __decorate([
        core_1.Component({
            selector: 'ajout-bouteille',
            templateUrl: 'app/composant/bouteille/ajout-bouteille.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AjoutBouteilleComponent);
    return AjoutBouteilleComponent;
}());
exports.AjoutBouteilleComponent = AjoutBouteilleComponent;
//# sourceMappingURL=ajout-bouteille.component.js.map