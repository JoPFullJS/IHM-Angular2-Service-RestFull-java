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
var detail_client_component_1 = require("./detail-client.component");
var client_service_1 = require("../../service/client.service");
var ListeClientComponent = (function () {
    /**
     * Constructeur définissant le fournisseur de ClientService à injecter.
     * @param clientService Le fournisseur de ClientService.
     */
    function ListeClientComponent(clientService) {
        this.clientService = clientService;
    }
    ListeClientComponent.prototype.chargerClient = function () {
        var _this = this;
        this.clientService
            .obtenirClients()
            .then(function (resultat) { return _this.clients = resultat; });
    };
    /**
     * Sélectionner un client.
     *
     * @param client Le client sélectionnée.
     */
    ListeClientComponent.prototype.selectionnerClient = function (client) {
        this.clientSelectionnee = client;
    };
    ListeClientComponent.prototype.ngOnInit = function () {
        this.chargerClient();
    };
    ListeClientComponent = __decorate([
        core_1.Component({
            selector: 'liste-client',
            templateUrl: 'app/composant/client/liste-client.component.html',
            directives: [detail_client_component_1.DetailClientComponent],
            providers: [client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService])
    ], ListeClientComponent);
    return ListeClientComponent;
}());
exports.ListeClientComponent = ListeClientComponent;
//# sourceMappingURL=liste-client.component.js.map