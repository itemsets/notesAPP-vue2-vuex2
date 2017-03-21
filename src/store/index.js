import Vue from 'vue'
import Vuex from 'vuex'

import LocalstorageNotes from '../localstorage'


Vue.use(Vuex)

const state = LocalstorageNotes

const mutations = {
    ADD_NOTE(state) {
        const newNote = {
            title: 'New caption',
            text: 'New note',
            favorite: (state.show == 'all') ? false : true
        }
        state.notes.push(newNote)
        state.activeNote = newNote // 指向notes里面单项同一地址
    },
    EDIT_NOTE(state, text) {
        state.activeNote.text = text
    },
    EDIT_NOTE_TITLE(state, text) {
        state.activeNote.title = text
    },
    DELETE_NOTE(state) {
        // vue1的$remove,在vue2费掉了
        // state.notes.$remove(state.activeNote) 
        let indice = state.notes.indexOf(state.activeNote)
        state.notes.splice(indice, 1)
        state.activeNote = state.notes[0] || {}
    },
    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note
    },
    SET_SHOW(state, value){
        state.show = value
    },            
    UPDATE_LOCALSTORAGE(state){
        let str = JSON.stringify(state.notes);
        window.localStorage.setItem("notes", str);
    }
}
export default new Vuex.Store({
    state,
    mutations
})
