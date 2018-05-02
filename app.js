new Vue({
    el: '#vue-app',
    data: {
        name: 'priya',
        son: 'migen'
    },
    methods: {
        greet: function(time){
            return 'miss '   + this.son;
        }
    }
});
