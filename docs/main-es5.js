function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/jiraff-administration/j-page/j-page.component */
    "./src/app/comps/jiraff-administration/j-page/j-page.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'jirafa';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-j-page");
        }
      },
      directives: [_comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__["JPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_jiraff_administration_jiraff_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/jiraff-administration/jiraff-administration.component */
    "./src/app/comps/jiraff-administration/jiraff-administration.component.ts");
    /* harmony import */


    var _comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/jiraff-administration/j-page/j-page.component */
    "./src/app/comps/jiraff-administration/j-page/j-page.component.ts");
    /* harmony import */


    var _comps_jiraff_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/jiraff-administration/j-item/j-item.component */
    "./src/app/comps/jiraff-administration/j-item/j-item.component.ts");
    /* harmony import */


    var _comps_jiraff_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/jiraff-administration/j-details/j-details.component */
    "./src/app/comps/jiraff-administration/j-details/j-details.component.ts");
    /* harmony import */


    var _comps_jiraff_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comps/jiraff-administration/j-label-span/j-label-span.component */
    "./src/app/comps/jiraff-administration/j-label-span/j-label-span.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_administration_jiraff_administration_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdministrationComponent"], _comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_4__["JPageComponent"], _comps_jiraff_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_5__["JItemComponent"], _comps_jiraff_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_6__["JDetailsComponent"], _comps_jiraff_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_7__["JLabelSpanComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_administration_jiraff_administration_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdministrationComponent"], _comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_4__["JPageComponent"], _comps_jiraff_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_5__["JItemComponent"], _comps_jiraff_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_6__["JDetailsComponent"], _comps_jiraff_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_7__["JLabelSpanComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_4__["JPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_administration_jiraff_administration_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdministrationComponent"], _comps_jiraff_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_4__["JPageComponent"], _comps_jiraff_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_5__["JItemComponent"], _comps_jiraff_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_6__["JDetailsComponent"], _comps_jiraff_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_7__["JLabelSpanComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/comps/jiraff-administration/j-details/j-details.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/comps/jiraff-administration/j-details/j-details.component.ts ***!
    \******************************************************************************/

  /*! exports provided: JDetailsComponent */

  /***/
  function srcAppCompsJiraffAdministrationJDetailsJDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JDetailsComponent", function () {
      return JDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../j-label-span/j-label-span.component */
    "./src/app/comps/jiraff-administration/j-label-span/j-label-span.component.ts");

    function JDetailsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "label-span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label-span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j.item" + (ctx_r0.j.isBossy ? " bossy" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx_r0.j.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.j.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.color);
      }
    }

    var JDetailsComponent = /*#__PURE__*/function () {
      function JDetailsComponent() {
        _classCallCheck(this, JDetailsComponent);
      }

      _createClass(JDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JDetailsComponent;
    }();

    JDetailsComponent.ɵfac = function JDetailsComponent_Factory(t) {
      return new (t || JDetailsComponent)();
    };

    JDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JDetailsComponent,
      selectors: [["app-j-details"]],
      inputs: {
        j: "j"
      },
      decls: 3,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], ["label", "height", 3, "val"], ["label", "color", 3, "val"]],
      template: function JDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JDetailsComponent_div_2_Template, 5, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.j);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_2__["JLabelSpanComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbmlzdHJhdGlvbi9qLWRldGFpbHMvai1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-details',
          templateUrl: './j-details.component.html',
          styleUrls: ['./j-details.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-administration/j-item/j-item.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/comps/jiraff-administration/j-item/j-item.component.ts ***!
    \************************************************************************/

  /*! exports provided: JItemComponent */

  /***/
  function srcAppCompsJiraffAdministrationJItemJItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JItemComponent", function () {
      return JItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../j-label-span/j-label-span.component */
    "./src/app/comps/jiraff-administration/j-label-span/j-label-span.component.ts");

    var JItemComponent = /*#__PURE__*/function () {
      function JItemComponent() {
        _classCallCheck(this, JItemComponent);

        //nitificatons
        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomColorNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JItemComponent, [{
        key: "clickNoteFn",
        value: function clickNoteFn() {
          console.log('clickNoteFn for jiraff ' + this.j.name);
          this.clickNote.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.randomColorNote.emit(_this.j.color);

            console.log("randomColorNote " + _this.j.color);
          }, 1000 * this.j.id);
        }
      }, {
        key: "deleteNoteFn",
        value: function deleteNoteFn() {
          this.deleteNote.emit(this.j.id);
          console.log("deleteNoteFn " + this.deleteNoteFn);
        }
      }]);

      return JItemComponent;
    }();

    JItemComponent.ɵfac = function JItemComponent_Factory(t) {
      return new (t || JItemComponent)();
    };

    JItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JItemComponent,
      selectors: [["j-item"]],
      inputs: {
        j: "j"
      },
      outputs: {
        clickNote: "clickNote",
        deleteNote: "deleteNote",
        randomColorNote: "randomColorNote"
      },
      decls: 9,
      vars: 7,
      consts: [[1, "aaa", 3, "click"], ["label", "height", 3, "val"], ["label", "color", 3, "val"], [3, "click"]],
      template: function JItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_div_click_0_listener() {
            return ctx.clickNoteFn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label-span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label-span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_button_click_7_listener() {
            return ctx.deleteNoteFn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx.j.isBossy ? " bossy" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx.j.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("name : ", ctx.j.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("id : ", ctx.j.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.color);
        }
      },
      directives: [_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_1__["JLabelSpanComponent"]],
      styles: ["aaa[_ngcontent-%COMP%]{\r\n    outline-style: dashed;\r\n}\r\n\r\n.j.item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 1px solid green;\r\n    margin: 4px;\r\n}\r\n\r\n.j.item.bossy[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWFkbWluaXN0cmF0aW9uL2otaXRlbS9qLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvamlyYWZmLWFkbWluaXN0cmF0aW9uL2otaXRlbS9qLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFhYXtcclxuICAgIG91dGxpbmUtc3R5bGU6IGRhc2hlZDtcclxufVxyXG5cclxuLmouaXRlbXtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuLmouaXRlbS5ib3NzeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'j-item',
          templateUrl: './j-item.component.html',
          styleUrls: ['./j-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        randomColorNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-administration/j-label-span/j-label-span.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/comps/jiraff-administration/j-label-span/j-label-span.component.ts ***!
    \************************************************************************************/

  /*! exports provided: JLabelSpanComponent */

  /***/
  function srcAppCompsJiraffAdministrationJLabelSpanJLabelSpanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JLabelSpanComponent", function () {
      return JLabelSpanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JLabelSpanComponent = /*#__PURE__*/function () {
      function JLabelSpanComponent() {
        _classCallCheck(this, JLabelSpanComponent);
      }

      _createClass(JLabelSpanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JLabelSpanComponent;
    }();

    JLabelSpanComponent.ɵfac = function JLabelSpanComponent_Factory(t) {
      return new (t || JLabelSpanComponent)();
    };

    JLabelSpanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JLabelSpanComponent,
      selectors: [["label-span"]],
      inputs: {
        label: "label",
        val: "val"
      },
      decls: 6,
      vars: 2,
      template: function JLabelSpanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbmlzdHJhdGlvbi9qLWxhYmVsLXNwYW4vai1sYWJlbC1zcGFuLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JLabelSpanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'label-span',
          templateUrl: './j-label-span.component.html',
          styleUrls: ['./j-label-span.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        val: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-administration/j-page/j-page.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/comps/jiraff-administration/j-page/j-page.component.ts ***!
    \************************************************************************/

  /*! exports provided: JPageComponent, Jiraff */

  /***/
  function srcAppCompsJiraffAdministrationJPageJPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JPageComponent", function () {
      return JPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Jiraff", function () {
      return Jiraff;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function JPageComponent_j_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "j-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function JPageComponent_j_item_4_Template_j_item_clickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var jiraff_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectedj = jiraff_r1;
        })("deleteNote", function JPageComponent_j_item_4_Template_j_item_deleteNote_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deletej($event);
        })("randomColorNote", function JPageComponent_j_item_4_Template_j_item_randomColorNote_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.bgRND = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var jiraff_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", jiraff_r1);
      }
    }

    var JPageComponent = /*#__PURE__*/function () {
      function JPageComponent() {
        _classCallCheck(this, JPageComponent);

        //date
        this.jiraffsarray = [{
          id: 1,
          name: 'yoel',
          height: 1.00,
          color: 'red',
          isBossy: false
        }, {
          id: 2,
          name: 'chaim',
          height: 7.25,
          color: 'blue',
          isBossy: false
        }, {
          id: 3,
          name: 'yoel',
          height: 1.4,
          color: 'mediumspringgreen',
          isBossy: true
        }, {
          id: 4,
          name: '',
          height: 8.20,
          color: 'violet',
          isBossy: false
        }, {
          id: 5,
          name: 'yoel',
          height: 3.98,
          color: 'darkturquoise',
          isBossy: false
        }, {
          id: 6,
          name: 'yoel',
          height: 8.05,
          color: 'coral',
          isBossy: true
        }, {
          id: 7,
          name: 'yoel',
          height: 7.25,
          color: 'pink',
          isBossy: false
        }, {
          id: 8,
          name: 'yoel',
          height: 7.25,
          color: 'brown',
          isBossy: false
        }, {
          id: 9,
          name: 'yoel',
          height: 1.4,
          color: 'red',
          isBossy: true
        }, {
          id: 10,
          name: 'yoel',
          height: 8.05,
          color: 'mediumturquoise',
          isBossy: false
        }, {
          id: 11,
          name: 'yoel',
          height: 7.25,
          color: 'mediumslateblue',
          isBossy: true
        }];
      }

      _createClass(JPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deletej",
        value: function deletej(jid) {
          console.log("jid " + jid);
          var index = this.jiraffsarray.findIndex(function (_j) {
            return _j.id == jid;
          });
          this.jiraffsarray.splice(index, 1);
        }
      }]);

      return JPageComponent;
    }();

    JPageComponent.ɵfac = function JPageComponent_Factory(t) {
      return new (t || JPageComponent)();
    };

    JPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JPageComponent,
      selectors: [["app-j-page"]],
      decls: 6,
      vars: 4,
      consts: [[2, "display", "flex"], [1, "force-jitem"], ["class", "j-item-as-list", 3, "j", "clickNote", "deleteNote", "randomColorNote", 4, "ngFor", "ngForOf"], [3, "j"], [1, "j-item-as-list", 3, "j", "clickNote", "deleteNote", "randomColorNote"]],
      template: function JPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome to jiraff-administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JPageComponent_j_item_4_Template, 1, 1, "j-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-j-details", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bgRND, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffsarray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", ctx.selectedj);
        }
      },
      styles: [".j-item-as-list[_ngcontent-%COMP%]{\r\n    display: list-item;\r\n}\r\n\r\n.force-jitem[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWFkbWluaXN0cmF0aW9uL2otcGFnZS9qLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbmlzdHJhdGlvbi9qLXBhZ2Uvai1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuai1pdGVtLWFzLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbn1cclxuXHJcbi5mb3JjZS1qaXRlbXtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-page',
          templateUrl: './j-page.component.html',
          styleUrls: ['./j-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var Jiraff = function Jiraff() {
      _classCallCheck(this, Jiraff);
    };
    /***/

  },

  /***/
  "./src/app/comps/jiraff-administration/jiraff-administration.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/comps/jiraff-administration/jiraff-administration.component.ts ***!
    \********************************************************************************/

  /*! exports provided: JiraffAdministrationComponent */

  /***/
  function srcAppCompsJiraffAdministrationJiraffAdministrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffAdministrationComponent", function () {
      return JiraffAdministrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JiraffAdministrationComponent = /*#__PURE__*/function () {
      function JiraffAdministrationComponent() {
        _classCallCheck(this, JiraffAdministrationComponent);
      }

      _createClass(JiraffAdministrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JiraffAdministrationComponent;
    }();

    JiraffAdministrationComponent.ɵfac = function JiraffAdministrationComponent_Factory(t) {
      return new (t || JiraffAdministrationComponent)();
    };

    JiraffAdministrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffAdministrationComponent,
      selectors: [["app-jiraff-administration"]],
      decls: 2,
      vars: 0,
      template: function JiraffAdministrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "jiraff-administration works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbmlzdHJhdGlvbi9qaXJhZmYtYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffAdministrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-administration',
          templateUrl: './jiraff-administration.component.html',
          styleUrls: ['./jiraff-administration.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\jiratot project\jirafa\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map