<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes | coligo</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All Notes button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="setShow('all')" :class="{active: getShow === 'all'}">
                        All Notes
                    </button>
                </div>
                <!-- Favorites Button -->
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default" @click="setShow('favorites')" :class="{active: getShow === 'favorites'}">
                        Favorites
                    </button>
                </div>
            </div>
        </div>
        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="[{'active': activeNote === note}]" @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">
                        {{note.title.trim().substring(0, 30)}}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
            return {
                // show: 'all'
            }
        },
        methods: {
            updateActiveNote(note) {
                this.$store.commit('SET_ACTIVE_NOTE', note)
                this.$store.commit('UPDATE_LOCALSTORAGE');
            },
            setShow(value){
                this.$store.commit('SET_SHOW', value);
            }
        },
        computed: {
            filteredNotes() {
                if (this.$store.state.show === 'all') {
                    return this.$store.state.notes
                } else if (this.$store.state.show === 'favorites') {
                    return this.$store.state.notes.filter(note => note.favorite)
                }
            },
            getShow() { 
               return this.$store.state.show
            },
            activeNote() {
                return this.$store.state.activeNote
            },
            notes() {
                return this.$store.state.notes
            },
        }
}
</script>
