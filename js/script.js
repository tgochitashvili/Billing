const app = Vue.createApp({
    data() {
        return {
            contentComponent:"billing-component",
            buttons: {
                "blocked":["Blocked visitors", "/assets/SVG/blocked.svg"],
                "answered":["Answered", "/assets/SVG/chart-bar.svg"],
                "unanswered":["Unanswered", "/assets/SVG/chart-bell-curve.svg"],
                "departments":["Departments", "/assets/SVG/departments.svg"],
                "devices": ["Devices", "/assets/SVG/devices.svg"],
                "generate": ["Generate", "/assets/SVG/generate.svg"],
                "settings": ["Caller settings", "/assets/SVG/settings.svg"],
                "dashboard": ["Dashboard", "/assets/SVG/tetris.svg"],
                "users": ["Users", "/assets/SVG/users.svg"],
                "billing": ["Billing", "/assets/SVG/wallet.svg", "billing-component"],
                "widgets": ["My widgets", "/assets/SVG/widgets.svg"]
            }
        }
    },
    methods: {
        changeComponent(component){
            this.contentComponent = component
        }
    },
    computed: {
    }
  })


  