exports.ids = [2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  endpoint: 'https://jsonplaceholder.typicode.com'
});

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id.vue?vue&type=template&id=ed7b7abe&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container my-6"},[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Go back")]),_vm._ssrNode(" <h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h1> <img"+(_vm._ssrAttr("src",_vm.photo.url))+" width=\"256\"> <p>"+_vm._ssrEscape(_vm._s(_vm.post.body))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/posts/_id.vue?vue&type=template&id=ed7b7abe&lang=html&

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/env.js
var env = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/posts/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'PostPage',

  data() {
    return {
      post: {},
      photo: {}
    };
  },

  created: async function () {
    let postId = this.$route.params.id;
    let postResponse = await external_axios_default.a.get(`${env["a" /* default */].endpoint}/posts/${postId}`);
    let photoResponse = await external_axios_default.a.get(`${env["a" /* default */].endpoint}/photos/${postId}`);
    this.post = postResponse.data;
    this.photo = photoResponse.data;
  }
});
// CONCATENATED MODULE: ./pages/posts/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var posts_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/posts/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  posts_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "357f7837"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map