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
var detail_cave_component_1 = require("./detail-cave.component");
var cave_service_1 = require("../../service/cave.service");
var ListeCaveComponent = (function () {
    /**
     * Constructeur définissant le fournisseur de CaveService à injecter.
     * @param caveService Le fournisseur de CaveService.
     */
    function ListeCaveComponent(caveService) {
        this.caveService = caveService;
    }
    ListeCaveComponent.prototype.chargerCave = function () {
        var _this = this;
        //noinspection TypeScriptUnresolvedFunction
        this.caveService
            .obtenirCaves()
            .then(function (resul) { return _this.caves = resul; });
    };
    /**
     * Sélectionner une cave.
     *
     * @param cave La cave sélectionnée.
     */
    ListeCaveComponent.prototype.selectionnerCave = function (cave) {
        this.caveSelectionnee = cave;
    };
    ListeCaveComponent.prototype.ngOnInit = function () {
        this.chargerCave();
    };
    ListeCaveComponent = __decorate([
        core_1.Component({
            selector: 'liste-cave',
            templateUrl: 'app/composant/cave/liste-cave.component.html',
            directives: [detail_cave_component_1.DetailCaveComponent],
            providers: [cave_service_1.CaveService]
        }), 
        __metadata('design:paramtypes', [cave_service_1.CaveService])
    ], ListeCaveComponent);
    return ListeCaveComponent;
}());
exports.ListeCaveComponent = ListeCaveComponent;
//# sourceMappingURL=liste-cave.component.js.map