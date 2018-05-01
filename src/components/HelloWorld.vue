<template>
  <div class="hello">
	Hello!
	<ul>
           <li v-for="member in members">{{ member.first }}</li>
	</ul>
<input v-model.trim="newMember" @keyup.enter="addMember" placeholder="Add new todo">
  </div>
</template>

<script>
/* eslint-disable */
import { db } from '../config/db.js';

export default {
data() {
return {
	members: [],
        newMember: null
}
},
  firestore: {
    members: db.collection('members'),
  },
  methods: {
    addMember: function () {
          if (this.newMember) {
            db.collection('members').add({
              first: this.newMember,
              created: firebase.firestore.FieldValue.serverTimestamp()
            })

            this.newMember = '';
          }
    }
  }
}
</script>

