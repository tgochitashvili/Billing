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
  "   \n    <div class=\"navcontainer\">\n        <div class=\"navbarbggray\">\n            <div class=\"navbarb\">\n                <img :src=\"livecaller\" class=\"logocontainer\">\n                <div class=\"menucontainer\">\n                <!--\n\n                \n                    <div v-for=\"icon in icons\">\n                        <img class=\"svgicon\" :src=\"icon\"> {{ icon }}\n                        <br>\n                    </div>\n\n\n                -->\n\n\n                <!--\n\n\n                    <button \n                        v-on:click=\"updateComponent('billing-notfound')\">\n                        Notfound\n                    </button>\n                    <br>\n                    <button \n                        v-on:click=\"updateComponent('billing-component')\">\n                        Content\n                    </button>\n                    <br>\n\n\n                -->\n                    <div>General</div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['dashboard']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>Analytics</div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['answered']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['unanswered']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>Team Management</div>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['users']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['departments']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\"\n                                :buttonDetails=\"buttons['devices']\"\n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>Visitors</div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['settings']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['blocked']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>\n                        Widgets\n                    </div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['widgets']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['generate']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                    <div>Account</div>\n                    <nav-button @update-component=\"updateComponent\" \n                                :buttonDetails=\"buttons['billing']\" \n                                :clickedButtonDetails=\"clickedButtonDetails\">\n                    </nav-button>\n                </div>\n                \n            </div>\n        </div>\n\n        <div class=\"footercontainer\">\n            \n            <div class=\"beam\"></div>\n            asdawsawdaw\n        </div>\n    </div>    \n    ",
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