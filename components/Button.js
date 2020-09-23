app.component("nav-button", {
    props: {
        buttonDetails: {
            type: Array,
            required: true
        },
        clickedButtonDetails:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <button v-bind:class="{ active: isSelected }"
            v-on:click="updateContent">
        <img class="buttonicon" :src="buttonDetails[1]">
        <span class="name">
            {{ buttonDetails[0] }}
        </span>
    </button>
    `,
    data() {
        return {

        }
    },
    methods: {
        updateContent(){
            if(this.buttonDetails[2]==null){
                var arr = this.buttonDetails
                arr[2]="billing-notfound"
                this.$emit("update-component", arr)
                return
            }
            this.$emit("update-component", this.buttonDetails)
        }
    },
    computed: {
        isSelected(){
            return this.clickedButtonDetails===this.buttonDetails
        }
        
    },
    emits: ["update-component"]
})