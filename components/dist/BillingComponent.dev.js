"use strict";

app.component("billing-component", {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  template:
  /*html*/
  "\n        <div contenteditable class=\"object\">\n            This is the content area.\n        </div>\n    ",
  data: function data() {
    return {};
  },
  methods: {},
  computed: {}
});