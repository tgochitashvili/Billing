"use strict";

app.component("nav-button", {
  props: {
    buttonDetails: {
      type: Array,
      required: true
    },
    clickedButtonDetails: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  "\n    <button v-bind:class=\"{ active: isSelected }\"\n            v-on:click=\"updateContent\">\n        <img :src=\"buttonDetails[1]\">\n        {{ buttonDetails[0] }}\n    </button>\n    ",
  data: function data() {
    return {};
  },
  methods: {
    updateContent: function updateContent() {
      if (this.buttonDetails[2] == null) {
        var arr = this.buttonDetails;
        arr[2] = "billing-notfound";
        this.$emit("update-component", arr);
        return;
      }

      this.$emit("update-component", this.buttonDetails);
    }
  },
  computed: {
    isSelected: function isSelected() {
      return this.clickedButtonDetails === this.buttonDetails;
    }
  },
  emits: ["update-component"]
});