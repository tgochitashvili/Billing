"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      value: 0,
      contentComponent: "billing-component",
      icons: ["blocked.svg", "chart-bar.svg", "chart-bell-curve.svg", "circle.svg", "cross.svg", "departments.svg"]
    };
  },
  methods: {
    increment: function increment() {
      this.value += 1;
    },
    changeComponent: function changeComponent(component) {
      this.contentComponent = component;
    }
  },
  computed: {}
});