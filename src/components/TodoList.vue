<template>
    <div class="pt-3">
        <v-row class="d-flex justify-center">
            <v-col cols="6">
                <v-text-field label="Add Task Item" variant="outlined" v-model="newTodo" @keyup.enter="handleAddEvent"></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn large color="primary" @click="handleAddEvent">Add</v-btn>
            </v-col>
        </v-row>
        <TodoDetails />
        {{ todoStore.todos }}
    </div>
</template>

<script>
import { useTodoStore } from '../../stores/todo';
import TodoDetails from './TodoDetails.vue';
export default {
    components: {
        TodoDetails
    },
    setup () {
        const todoStore = useTodoStore()
        const newTodo = ref('');

        const handleAddEvent = () => {
            if(newTodo.value.length > 0){
                todoStore.addTodo({
                    title: newTodo.value,
                    isComplete: false,
                    id: Math.floor(Math.random() * 1000)
                })
            }

            newTodo.value = '';
        }

        return { todoStore, newTodo, handleAddEvent }
    }
}
</script>