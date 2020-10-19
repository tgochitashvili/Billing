app.component("billing-topbar",{
    props: {
        
    },
    template:
    /*html*/
    `
        <div>
            <input  class="search"
                    type="text"
                    placeholder="Search"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Search'"
            >
            <button class="serve">
                Serve 1 Request
            </button>
            <button class="nbell">
                <img style="height: 20px" src="/assets/SVG/bell.svg">
            </button>
            <div class="divider">
            </div>
            <div class="profilecontainer">
                <div class="name">
                    {{ name }}
                </div>
                <div class="status" :class="status">
                    {{ status }}
                </div>
                <img class="avatar" src="https://thispersondoesnotexist.com/image">
            </div>
        </div>
    `,
    data(){
        return {
            status: "online",
            name: "Saul Berenson"
        }
    },
    methods: {

    },
    computed: {

    }
})