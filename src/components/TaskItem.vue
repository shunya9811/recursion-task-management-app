<template>
    <v-card
        elevation="10"
        min-width="100%"
        :key="task.id"
        class="task mb-1 ma-2"
    >
        <v-card
            v-if="task.editable"
        >
            <v-text-field
                solo
                v-model="taskTitle"
                placeholder="タスク名を入力してください"
                @keydown.enter="$emit('edit', task, $event)"
            >
            </v-text-field>
            <!--
            <div class="text-caption my-2">
            Section name: {{sectionName}}
            </div>
            -->
            <v-textarea
                solo
                v-model="taskContent"
                label="タスク内容を入力してください"
                @keydown.enter="$emit('edit', task, $event)"
                outlined
                hide-details="false"
            >
            </v-textarea>
        </v-card>
        <v-card
            v-else
            class="text-center"
            v-on:dblclick="$emit('edit-fix', task)"
        >
            <v-card-title>{{ taskTitle }}</v-card-title>
            <v-card-text>{{ taskContent }}</v-card-text>
        </v-card>
        <v-card-actions
            class="d-flex justify-end"
        >
            <v-icon @click="$emit('edit-fix', task)">mdi-pencil</v-icon>
            <v-icon @click="$emit('favorite', task)" :class="{ 'lime--text': task.favorite}">mdi-star</v-icon>
            <v-icon @click="$emit('check', task)" :class="{ 'teal--text': task.check}">mdi-check-bold</v-icon>
            <v-icon @click="$emit('delete', task)">mdi-delete</v-icon>
        </v-card-actions>
    </v-card> 
</template>

<script>
export default {
    name: 'TaskItem',
    data() {
        return {
            taskTitle: this.task.title,
            taskContent: this.task.body
        }
    },
    props: {
        task: Object
    },
};
</script>
