<template>
  <div id="app">
    <toolbar></toolbar>
    <noteslist></noteslist>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Noteslist from './Noteslist.vue'
import Editor from './Editor.vue'

export default {
  name: 'app',
  components: { 
    Toolbar,
    Noteslist,
    Editor
  }
}
</script>
