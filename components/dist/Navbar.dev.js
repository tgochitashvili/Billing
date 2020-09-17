"use strict";

app.component("billing-navbar", {
  props: {},
  template:
  /*html*/
  "   <div class=\"navbarbggray\">\n                <div class=\"navbar\">\n                    This is the navigation bar\n                    <br>\n                    <button \n                        v-on:click=\"updateComponent('billing-notfound')\">\n                        Notfound\n                    </button>\n                    <br>\n                    <button \n                        v-on:click=\"updateComponent('billing-component')\">\n                        Content\n                    </button>\n                </div>\n        </div>\n        \n    ",
  data: function data() {
    return {};
  },
  methods: {
    updateComponent: function updateComponent(component) {
      this.$emit('change-component', component);
    }
  },
  computed: {}
});