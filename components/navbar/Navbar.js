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
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['billing']" 
                                :clickedButtonDetails="clickedButtonDetails">
                    </nav-button>
                    <nav-button @update-component="updateComponent" 
                                :buttonDetails="buttons['departments']" 
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