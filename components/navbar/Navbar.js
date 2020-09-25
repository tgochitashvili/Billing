app.component("billing-navbar",{
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
    `   
    <div class="navcontainer">
        <div class="navbarbggray">
            <div class="navbarb">
                <img :src="livecaller" class="logocontainer">
                <div class="menucontainer">
                <!--

                
                    <div v-for="icon in icons">
                        <img class="svgicon" :src="icon"> {{ icon }}
                        <br>
                    </div>


                -->


                <!--


                    <button 
                        v-on:click="updateComponent('billing-notfound')">
                        Notfound
                    </button>
                    <br>
                    <button 
                        v-on:click="updateComponent('billing-component')">
                        Content
                    </button>
                    <br>
                -->
                    <div>General</div>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['dashboard']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>Analytics</div>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['answered']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['unanswered']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>Team Management</div>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['users']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['departments']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['devices']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>Visitors</div>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['settings']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['blocked']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>
                        Widgets
                    </div>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['widgets']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['generate']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>Account</div>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['billing']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                </div>
                
            </div>
        </div>

        <div class="footercontainer">
            
            <div class="beam"></div>
            asdawsawdaw
        </div>
    </div>    
    `,
    data(){
        return {
            livecaller: "assets/SVG/livecaller.svg",
            clickedButtonDetails: this.buttons["billing"]
        }
    },
    methods: {
        updateComponent(component) {
            this.clickedButtonDetails = component
            this.$emit("change-component", component[2])
        }
    },
    computed: {

    },
    emits: ["change-component"]
})