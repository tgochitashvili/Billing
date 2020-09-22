const app = Vue.createApp({
    data() {
        return {
            contentComponent:"billing-component",
            icons: [
                "assets/SVG/blocked.svg",
                "assets/SVG/chart-bar.svg",
                "assets/SVG/chart-bell-curve.svg",
                "assets/SVG/circle.svg",
                "assets/SVG/cross.svg",
                "assets/SVG/departments.svg",
                "assets/SVG/devices.svg",
                "assets/SVG/generate.svg",
                "assets/SVG/settings.svg",
                "assets/SVG/tetris.svg",
                "assets/SVG/users.svg",
                "assets/SVG/wallet.svg",
                "assets/SVG/widgets.svg"
            ],
            buttons: {
                "blocked":["Blocked visitors", "assets/SVG/blocked.svg"],
                "answered":["Answered", "assets/SVG/chart-bar.svg"],
                "unanswered":["Unanswered", "assets/SVG/chart-bell-curve.svg"],
                "departments":["Departments", "assets/SVG/departments.svg"],
                "devices": ["Devices", "assets/SVG/devices.svg"],
                "generate": ["Generate", "assets/SVG/generate.svg"],
                "settings": ["Caller settings", "assets/SVG/settings.svg"],
                "dashboard": ["Dashboard", "assets/SVG/tetris.svg"],
                "users": ["Users", "assets/SVG/users.svg"],
                "billing": ["Billing", "assets/SVG/wallet.svg", "billing-component"],
                "widgets": ["My widgets", "assets/SVG/widgets.svg"]
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


  