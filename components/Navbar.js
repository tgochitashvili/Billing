app.component("billing-navbar",{
    props: {

    },
    template: 
    /*html*/
    `   <div class="navbarbggray">
                <div class="navbar">
                    This is the navigation bar
                    <br>
                    <button 
                        v-on:click="updateComponent('billing-notfound')">
                        Notfound
                    </button>
                    <br>
                    <button 
                        v-on:click="updateComponent('billing-component')">
                        Content
                    </button>
                </div>
        </div>
        
    `,
    data(){
        return {
            
        }
    },
    methods: {
        updateComponent(component) {
            this.$emit('change-component', component)
        }
    },
    computed: {

    }
})