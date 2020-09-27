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
                <img src="./assets/SVG/bell.svg">
            </button>
            <div class="divider">
            </div>
    `,
    data(){
        return {

        }
    },
    methods: {

    },
    computed: {

    }
})