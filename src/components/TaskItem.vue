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
                v-model="task.title"
                placeholder="タスク名を入力してください"
                @keydown.enter="$emit('edit', task, $event)"
            >
            </v-text-field>
            <v-text-field
                solo
                v-model="task.body"
                placeholder="タスク内容を入力してください"
                @keydown.enter="$emit('edit', task, $event)"
            >
            </v-text-field>
        </v-card>
        <v-card
            v-else
            class="text-center"
            v-on:dblclick="$emit('edit-fix', task)"
        >
            <v-card-title>{{ task.title }}</v-card-title>
            <v-card-text>{{ task.body }}</v-card-text>
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
    props: {
        task: {
            type: Object, //データ型
            required: true, //データ渡し必須
        },
        favorite: {
            type: Boolean,
            required: true,
        },
        check: {
            type: Boolean,
            required: true,
        },
    },
};
</script>
