import BackTop from "../components/content/BackTop/Backtop.vue";


export const BackTopMixin = {
    components: { BackTop },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        backTop() {
            // console.log(["流行", "新款", "精选"], this.$refs.scrollData);
            this.$refs.scrollD.scrollTo(0, 0, 1000);
        },
    }
}