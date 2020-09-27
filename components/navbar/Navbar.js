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
                    <div>
                        General
                    </div>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['dashboard']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>
                        Analytics
                    </div>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['answered']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent"
                                :buttonDetails="buttons['unanswered']"
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <div>
                        Team Management
                    </div>
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
                    <div>
                        Visitors
                    </div>
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
                    <div>
                        Account
                    </div>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['billing']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                </div>
                
            </div>
        </div>

        <div class="footercontainer">
            <button class="help">Help & Feedback
            </button>
            <div class="beam"></div>
            <span class="tm">LIVECALLER.IO 2019</span>
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