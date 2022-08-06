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
          v-model="sectionTitle"
        ></v-text-field>
      </v-col>
      <v-btn
        color="primary"
        x-large
        class="mt-2"
        v-bind:disabled="addSectionbtnDisaled" 
        v-on:click="createSection"
      >
        <v-icon>mdi-plus-circle</v-icon>セクションを追加
      </v-btn>
    </div>
    <div
      class="d-flex flex-nowrap overflow-x-auto"
    >
      <div class="d-flex align-start">
        <section-item
          v-for="section in sections"
          :section="section"
          :key="section.id"
          @delete-section="deleteSection"
        ></section-item>
      </div>
    </div>
  </div>
</template>

<script>
import SectionItem from './SectionItem.vue'
import {Section} from '../class.js'


let sectionId = 0;

export default{
  name: 'SectionList',
  components: {
    SectionItem
  },
  data(){
    return{
      sectionTitle: '',
      sections: []
    }
  },
  computed: {
    addSectionbtnDisaled: function(){
      return this.sectionTitle === "";
    }
  },
  methods: {
    createSection() {
      let list = new Section(sectionId, this.sectionTitle, []);
      sectionId++;
      this.sections.push(list);
      this.sectionTitle = "";
    },
    deleteSection(sectionObject) {
      for (let i = 0; i < this.sections.length; i++){
        if (this.sections[i].id == sectionObject.id){
          this.sections.splice(i, 1);
        }
      }
    }
  }
};
</script>