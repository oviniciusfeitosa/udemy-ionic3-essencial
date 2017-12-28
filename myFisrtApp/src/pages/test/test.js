"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var TestPage = (function () {
    function TestPage(navCtrl, navParams, 
        // public alertCtrl: AlertController,
        http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.beer = {};
        var url = this.navParams.get('api_url');
        var beer_id = this.navParams.get('beer_id');
        this.http.get(url + '/beers/' + beer_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.beer = data;
            console.log(data);
        });
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-test',
            templateUrl: 'test.html',
        })
    ], TestPage);
    return TestPage;
}());
exports.TestPage = TestPage;
