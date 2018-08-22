// I know do not complain

const Home = {
    template: `
    <div class="ui main text container center">
    <div class="ui stackable grid">
        <div class="ui row">
            <div class="ten wide column">
                <div class="ui row">
                    <div class="two wide column">
                        <h1 class="white large">WaifuBot</h1>
                    </div>
                </div>
                <div class="ui row">
                    <div class="ten wide column">
                        <p class="white">Claim, trade, rate fight, and work your waifus with WaifuBot.
                            <br>Over 2000 waifus stolen from MAL, ready to be claimed and traded. Hell yeah.</p>
                    </div>
                </div>
                <h4 class="ui horizontal divider header white">
                    Links
                </h4>
                <div class="ui row">
                    <router-link to="/faq" tag="button" class="ui labeled icon button">FAQ
                        <i class="file alternate outline icon"></i>
                    </router-link>
                    <a :href="data.support">
                        <button class="ui labeled icon button">Support
                            <i class="question icon"></i>
                        </button>
                    </a>
                    <router-link to="/commands" tag="button" class="ui labeled icon button">Commands
                        <i class="cogs icon"></i>
                        </i>
                    </router-link>
                </div>

                <div class="ui row" style="padding-top: 2em;">
                    <a :href="data.invite">
                        <button class="ui button large purple labeled icon">
                        <i class="discord icon"></i>
                            Invite
                        </button>
                    </a>
                </div>
            </div>
            <div class="six wide column">
                <img :src="data.image">
            </div>
        </div>
    </div>
    </div>
    `,
    data() {
        return {
            data: ''
        }
    },
    mounted() {
        axios
            .get('./data.json')
            .then(x => (this.data = x.data));
    }
 };

const Commands = {
    template: `
    <div class="ui container" style="margin-bottom: 2em;">
    <h1 class="ui white">Commands</h1>
    <p class="white">These are commands that can be used with the bot. Prefix every command with the sever's prefix of choice, which you can find out by looking at the title of the embed sent with the help command. All of these commands have cooldowns, make sure not to use them too fast!</p>
    <template v-for="(v, k) in items">
        <h2 class="white">{{k}}</h2>
        <table class="ui striped table inverted padded">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tr v-for="x in v">
                <td><b>{{x.Name}}</b></td>
                <td>{{x.Description}}</td>
                <td>{{x.Usage}}</td>
            </tr>
        </table>
    </template>
    </div>
    `,
    data() {
        return {
            items: null
        }
    },
    mounted() {
        axios
            .get('./commands.json')
            .then(x => (this.items = x.data));
    }
};

const Faq = {
    template: `
    <div class="ui container" style="margin-bottom: 2em;">
        <h1 class="white">FAQ</h1>
        <div class="ui segments" v-for="x in faq">
            <div class="ui segment">
                <p><b>Q: </b> {{x.Q}}</p>
            </div>
            <div class="ui segment">
                <p><b>A: </b> {{x.A}}</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            faq: null
        }
    },
    mounted() {
        axios
            .get('./faq.json')
            .then(x => (this.faq = x.data));
    }
};

const About = {
    template: `
    <div class="ui main text container center">
        <h1 class="white">About</h1>
        <p class="white">{{ data.about }}</p>
    </div>
    `,
    data() {
        return {
            data: ''
        }
    },
    mounted() {
        axios
            .get('./about.json')
            .then(x => (this.data = x.data));
    }
};


const routes = [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/faq', component: Faq },
    { path: '/commands', component: Commands }
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes
});

window.onload = function () {

    const app = new Vue({
        router: router
    });

    app.$mount('#app');
}