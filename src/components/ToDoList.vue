<template>
    <v-card
        width="320"
        elevation="10"
    >
        <h2>
        {{ themeTitle }}
        </h2>
        <v-divider></v-divider>
        <v-list
            class="mb-4"
            max-height="60vh"
        >   
            <draggable
                v-model="tasks"
                draggable=".item"
            > 
                <task-item
                    v-for="task in tasks"
                    :key="task.id"
                    :task="task"
                    class="item"
                    @edit="editTask"
                    @edit-fix="editFixTask"
                    @favorit="favoriteTask"
                    @check="checkTask"
                    @delete="deleteTask"
                >
                </task-item>
            </draggable>
        </v-list>
        <v-hover>
            <v-card
                @click="addTask"
                class="pa-2"
            >
                <v-icon>mdi-plus-circle</v-icon>タスクを追加
            </v-card>
        </v-hover>
    </v-card>
</template>

<script>
import TaskItem from './TaskItem.vue'
import draggable from 'vuedraggable'

let todoId = 1;

export default{
    name: 'ToDoList',
    props: {
        themeTitle: {
            type: String
        }
    },
    components: {
        TaskItem,
        draggable
    },
    date(){
        return{
            tasks: [
                //{
                //    id: tasks.length+1,
                //    title: "朝ごはんを食べる",
                //    body: "基本的には納豆ごはん",
                //    editable: false,
                //    favorite: false,
                //    checked: false
                //}
            ]
        }
    },
    methods: {
        addTask: function(){
            this.tasks.push({
                id: todoId++,
                title: "",
                body: "",
                editable: true,
                favorite: false,
                checked: false
            })
        },
        editTask: function(taskObject, event){
            if (event.keyCode == 13){
                if (taskObject.title.length > 0 && taskObject.body.length > 0){
                    taskObject.editable = !taskObject.editable;
                } else {
                    alert("タスクを入力してください");
                }
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
        deleteTask: function(task){
            alert('ko');
        }
    }

};
</script>
