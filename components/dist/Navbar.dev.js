"use strict";

app.component("billing-navbar", {
  props: {
    icons: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  "   \n    <div class=\"navcontainer\">\n        <div class=\"navbarbggray\">\n            <div class=\"navbar\">\n                <img :src=\"livecaller\">\n            <img class=\"svgicon\" v-for=\"icon in icons\" :src=\"icon\">\n                This is the navigation bar\n                <br>\n                <button \n                    v-on:click=\"updateComponent('billing-notfound')\">\n                    Notfound\n                </button>\n                <br>\n                <button \n                    v-on:click=\"updateComponent('billing-component')\">\n                    Content\n                </button>\n            </div>\n        </div>\n        <div class=\"beam\">\n        </div>\n    </div>    \n    ",
  data: function data() {
    return {
      livecaller: "assets/SVG/livecaller.svg"
    };
  },
  methods: {
    updateComponent: function updateComponent(component) {
      this.$emit('change-component', component);
    }
  },
  computed: {}
});