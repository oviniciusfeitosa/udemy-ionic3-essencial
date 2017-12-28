"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_1 = require("../test/test");
require("rxjs/add/operator/map");
var HomePage = (function () {
    function HomePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.url = 'http://localhost:8080/v1';
        this.http.get(this.url + '/beers')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.beers = data;
        });
    }
    HomePage.prototype.goToTestPage = function () {
        this.navCtrl.push(test_1.TestPage);
    };
    HomePage.prototype.getBeerInfo = function (id) {
        this.navCtrl.push(test_1.TestPage, {
            'beer_id': id,
            'api_url': this.url
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
