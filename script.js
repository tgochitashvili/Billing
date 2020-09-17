const app = Vue.createApp({
    data() {
        return {
            value:0,
            contentComponent:"billing-component",
            icons: [
                "blocked.svg",
                "chart-bar.svg",
                "chart-bell-curve.svg",
                "circle.svg",
                "cross.svg",
                "departments.svg"
            ]
        }
    },
    methods: {
        increment(){
            this.value+=1
        },
        changeComponent(component){
            this.contentComponent = component
        }
    },
    computed: {
    }
  })


  