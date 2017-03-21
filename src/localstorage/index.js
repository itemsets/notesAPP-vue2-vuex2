let notes = [{
    title: 'Caption one',
    text: 'New note',
    favorite: false
}, {
    title: 'Caption two',
    text: 'New note',
    favorite: true
}, {
    title: 'Caption three',
    text: 'New note',
    favorite: false
}]

let get_notes = window.localStorage.getItem("notes")

if (get_notes) {
    notes = JSON.parse(get_notes)
}else {
    let str = JSON.stringify(notes);
    window.localStorage.setItem("notes", str)
}

let activeNote = notes[0]

let show = 'all'

export default {
    notes,
    activeNote,
    show
}
