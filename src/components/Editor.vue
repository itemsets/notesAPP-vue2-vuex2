<template>
    <div id="note-editor">
        <input type="" name="" :value="activeNoteTitle" @input="editNoteTitle" class="form-control input-title">
        <textarea :value="activeNoteText" @input="editNote" class="form-control">
        </textarea>
        <div v-html="html" class="notes-html"></div>
    </div>
</template>
<script>
export default {
       data() {
            return {
                html: ''
            }
        },
        methods: {
            editNote(e) {
                this.$store.commit('EDIT_NOTE', e.target.value)
                this.$store.commit('UPDATE_LOCALSTORAGE')
                this.setMarked(e.target.value)
            },
            editNoteTitle(e) {
                this.$store.commit('EDIT_NOTE_TITLE', e.target.value)
                this.$store.commit('UPDATE_LOCALSTORAGE')
            },
            setMarked(value) {
                this.html = marked(value)
            }
        },
        computed: {
            activeNoteText() {
                let activeNote_text = this.$store.state.activeNote.text
                this.setMarked(activeNote_text)
                return activeNote_text
            },
            activeNoteTitle() {
                return this.$store.state.activeNote.title
            }
        }
}
</script>
