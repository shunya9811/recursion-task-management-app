<template>
  <div class="container">
    <div class="d-flex">
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          label="セクション名を入力"
          solo
          v-model="themeTitle"
        ></v-text-field>
      </v-col>
      <v-btn
        color="primary"
        x-large
        class="mt-2"
        v-bind:disabled="addToDoListbtnDisaled" 
        v-on:click="counter += 1, themeTitle = ''"
      >
        <v-icon>mdi-plus-circle</v-icon>セクションを追加
      </v-btn>
    </div>
    <v-list
      class="d-flex align-start overflow-x-auto pa-2"
    >
        <todo-list
            v-for="i in counter"
            v-bind:key="i"
            :themeTitle="themeTitle"
        ></todo-list>
    </v-list>
  </div>
</template>

<script>
import todoList from './ToDoList.vue';

export default{
  name: 'SectionList',
  components: {
    todoList
  },
  data(){
    return{
      themeTitle: '',
      counter: 0
    }
  },
  computed: {
    addToDoListbtnDisaled: function(){
      return this.themeTitle === "";
    }
  }
};
</script>