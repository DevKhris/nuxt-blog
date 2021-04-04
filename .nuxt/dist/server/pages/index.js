exports.ids = [1];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  endpoint: 'https://jsonplaceholder.typicode.com'
});

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=06cb0163&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mt-5"},[_vm._ssrNode("<title data-v-06cb0163>Nuxt Post Website</title> <h1 class=\"title\" data-v-06cb0163>Nuxt Post Website</h1> <h2 class=\"subtitle\" data-v-06cb0163>Recent Posts</h2> <h3 class=\"link\" data-v-06cb0163></h3> <hr data-v-06cb0163> "),_vm._ssrNode("<div class=\"columns is-multiline\" data-v-06cb0163>","</div>",_vm._l((_vm.posts),function(post){return _c('PostCard',{key:post.id,attrs:{"post":post}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=06cb0163&scoped=true&lang=html&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/env.js
var env = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/PostCard.vue?vue&type=template&id=62343924&lang=html&
var PostCardvue_type_template_id_62343924_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box column is-full py-4"},[_vm._ssrNode("<h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.post.body))+"</p> <br> "),_c('nuxt-link',{staticClass:"button is-primary",attrs:{"to":("/posts/" + (_vm.post.id))}},[_vm._v("Read more...")])],2)}
var PostCardvue_type_template_id_62343924_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./components/PostCard.vue?vue&type=template&id=62343924&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PostCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PostCardvue_type_script_lang_js_ = ({
  name: 'PostCard',
  props: {
    post: Object
  }
});
// CONCATENATED MODULE: ./components/PostCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PostCardvue_type_script_lang_js_ = (PostCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PostCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PostCardvue_type_script_lang_js_,
  PostCardvue_type_template_id_62343924_lang_html_render,
  PostCardvue_type_template_id_62343924_lang_html_staticRenderFns,
  false,
  injectStyles,
  null,
  "09ee9494"
  
)

/* harmony default export */ var PostCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    PostCard: PostCard
  },

  data() {
    return {
      posts: []
    };
  },

  created: async function () {
    let postsResponse = await external_axios_default.a.get(`${env["a" /* default */].endpoint}/posts`);
    this.posts = postsResponse.data;
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "06cb0163",
  "340df158"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map