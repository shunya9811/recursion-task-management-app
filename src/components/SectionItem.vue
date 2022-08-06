<template>
    <v-card
        width="250"
        elevation="10"
        class="ma-2"
    >   
        <h2 class="text-center">
            {{ sectionTitle }}
        </h2>
        <v-divider></v-divider>
        <v-list
            class="mb-4 overflow-y-auto"
            max-height="60vh"
        >   
            <draggable
                v-model="taskArray"
                draggable=".item"
                group="items"
            > 
                <task-item
                    v-for="task in taskArray"
                    :task="task"
                    :key="task.id"
                    class="item"
                    @edit="editTask"
                    @edit-fix="editFixTask"
                    @favorite="favoriteTask"
                    @check="checkTask"
                    @delete-task="deleteTask"
                >
                </task-item>
            </draggable>
        </v-list>
        <v-hover
            class="d-flex justify-space-between "
        >
            <v-card>
                <span
                    @click="createTask"
                    class="pa-2"
                ><v-icon 
                >mdi-plus-circle</v-icon>タスクを追加</span>
                <v-icon
                    @click="$emit('delete-section', section)"
                    class="btn btn-outline-primary justify-content-end"
                >
                    mdi-delete
                </v-icon>
            </v-card>
        </v-hover>
    </v-card>
</template>

<script>
import TaskItem from './TaskItem.vue'
import draggable from 'vuedraggable'
import {Task} from '../class.js'


let taskId = 0;

export default{
    name: 'ToDoList',
    props: {
        section: Object
    },
    components: {
        TaskItem,
        draggable
    },
    data(){
        return{
            sectionTitle: this.section.title,
            taskArray: this.section.tasks
        }
    },
    methods: {
        createTask: function(){
            let task = new Task(taskId, "", "", true, false, false);
            taskId++;
            this.taskArray.push(task);

        },
        editTask: function(taskObject, event){
            if (event.keyCode == 13){
                taskObject.editable = !taskObject.editable;
            }
        },
        editFixTask: function(taskObject){
            taskObject.editable = !taskObject.editable;
        },
        favoriteTask: function(taskObject){
            taskObject.favorite = !taskObject.favorite;
        },
        checkTask: function(taskObject){
            taskObject.checked = !taskObject.checked;
        },
        deleteTask: function(taskObject){
            this.taskArray.splice(taskObject.id, 1);
            for (let i = 0; i < this.taskArray.length; i++){
                if (this.taskArray[i].id == taskObject.id){
                    this.taskArray.splice(i, 1);
                }
            }
        }
    }

};
</script>
