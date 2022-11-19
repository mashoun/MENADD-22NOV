
var app = Vue.createApp({
    data() {
        return {
            brand: 'gdg',
            profile: '',
            name: '',
            subject: '',
            message: '',
            spiner: true,
            api: 'https://script.google.com/macros/s/AKfycbymUTxhIziQJywt-CJ5g7bJCKxgACCULyTMAqvwBokxhG3v4qgraHvNYYMhLwfvEpIvuw/exec'
        }
    },
    mounted() {
        //life cycle hooks
        this.spiner = true;
        fetch(this.api).then(res => res.json()).then(res => {
            console.log(res)
            this.profile = res
            this.spiner = false;
        }).catch(err => {
            console.log(err)
            this.spiner = false;
        })

    },
    methods: {
        submit() {
            return `mailto:${this.profile.email}?subject=${this.subject}&body=${this.message}`
        }
    }
})

app.mount('#app')
