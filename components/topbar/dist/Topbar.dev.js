"use strict";

app.component("billing-topbar", {
  props: {},
  template:
  /*html*/
  "\n        <div>\n            <input  class=\"search\"\n                    type=\"text\"\n                    placeholder=\"Search\"\n                    onfocus=\"this.placeholder=''\"\n                    onblur=\"this.placeholder='Search'\"\n            >\n            <button class=\"serve\">\n                Serve 1 Request\n            </button>\n            <button class=\"nbell\">\n                <img src=\"./assets/SVG/bell.svg\">\n            </button>\n            <div class=\"divider\">\n            </div>\n    ",
  data: function data() {
    return {};
  },
  methods: {},
  computed: {}
});