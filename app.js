// I know do not complain

const Home = {
    template: '#home-template',
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
    template: '#commands-template',
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
    template: '#faq-template',
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
    template: '#about-template',
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

const Testimonials = {
    template: '#testimonials-template',
    data() {
        return {
            data: ''
        }
    },
    mounted() {
        axios
            .get('./testimonials.json')
            .then(x => (this.data = x.data));
    }
};


const routes = [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/faq', component: Faq },
    { path: '/commands', component: Commands },
    { path: '/testimonials', component: Testimonials }
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