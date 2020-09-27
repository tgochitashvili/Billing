"use strict";

app.component("billing-navbar", {
  props: {
    icons: {
      type: Array,
      required: true
    },
    buttons: {
      type: Object,
      required: true
    }
  },
  template:
  /*html*/
  "   \n    <div class=\"navcontainer\">\n        <div class=\"navbarbggray\">\n            <div class=\"navbarb\">\n                <img :src=\"livecaller\" class=\"logocontainer\">\n                <div class=\"menucontainer\">\n                    <div>\n                        General\n                    </div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['dashboard']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Analytics\n                    </div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['answered']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['unanswered']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Team Management\n                    </div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['users']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['departments']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['devices']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Visitors\n                    </div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['settings']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['blocked']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Widgets\n                    </div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['widgets']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['generate']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Account\n                    </div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['billing']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                </div>\n                \n            </div>\n        </div>\n\n        <div class=\"footercontainer\">\n            <button class=\"help\">Help & Feedback\n            </button>\n            <div class=\"beam\"></div>\n            <span class=\"tm\">LIVECALLER.IO 2019</span>\n        </div>\n    </div>    \n    ",
  data: function data() {
    return {
      livecaller: "assets/SVG/livecaller.svg",
      clickedButtonDetails: this.buttons["billing"]
    };
  },
  methods: {
    updateComponent: function updateComponent(component) {
      this.clickedButtonDetails = component;
      this.$emit("change-component", component[2]);
    }
  },
  computed: {},
  emits: ["change-component"]
});