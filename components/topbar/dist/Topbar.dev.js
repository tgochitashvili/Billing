"use strict";

app.component("billing-topbar", {
  props: {},
  template:
  /*html*/
  "\n        <div>\n            <input  class=\"search\"\n                    type=\"text\"\n                    placeholder=\"Search\"\n                    onfocus=\"this.placeholder=''\"\n                    onblur=\"this.placeholder='Search'\"\n            >\n            <button class=\"serve\">\n                Serve 1 Request\n            </button>\n            <button class=\"nbell\">\n                <img style=\"height: 20px\" src=\"./assets/SVG/bell.svg\">\n            </button>\n            <div class=\"divider\">\n            </div>\n            <div class=\"profilecontainer\">\n                <div class=\"name\">\n                    {{ name }}\n                </div>\n                <div class=\"status\" :class=\"status\">\n                    {{ status }}\n                </div>\n                <img class=\"avatar\" src=\"https://thispersondoesnotexist.com/image\">\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      status: "online",
      name: "Saul Berenson"
    };
  },
  methods: {},
  computed: {}
});