<template>
    <div id="toolbar">
        <i class="logoicon"><img :src="img"></i>
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>
<script>

export default {
    data(){
        return{
            img: require('../assets/logo-s.png')
        }
    },
    methods: {
        addNote() {
            this.$store.commit('ADD_NOTE');
            this.$store.commit('UPDATE_LOCALSTORAGE');
        },
        deleteNote() {
            this.$store.commit('DELETE_NOTE')
            this.$store.commit('UPDATE_LOCALSTORAGE');
        },
        toggleFavorite() {
            this.$store.commit('TOGGLE_FAVORITE')
            this.$store.commit('UPDATE_LOCALSTORAGE');
        }
    },
    computed: {
        activeNote(){
            return this.$store.state.activeNote
        }
    }
}
</script>
