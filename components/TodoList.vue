<template>
    <div class="pt-3">
        <v-row class="d-flex justify-center">
            <v-col cols="6">
                <v-text-field label="Add Task Item" variant="outlined" v-model="newTodo"
                    @keyup.enter="handleAddEvent"></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn large color="primary" @click="handleAddEvent">Add</v-btn>
            </v-col>
        </v-row>
        <TodoDetails />

        <v-snackbar v-model="snackbar" location="top">
            {{ errorAddItemtxt }}

            <template v-slot:actions>
                <v-btn color="warning" variant="text" @click="snackbar = false" >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { useTodoStore } from '@stores/todo';
import TodoDetails from '@components/TodoDetails.vue';
export default {
    components: {
        TodoDetails
    },
    setup() {
        const todoStore = useTodoStore()
        const newTodo = ref('');
        
        const snackbar = ref(false);
        const errorAddItemtxt = "Please input todo activity.";

        const handleAddEvent = () => {
            if (newTodo.value.length > 0) {
                todoStore.addTodo({
                    title: newTodo.value,
                    isComplete: false,
                    id: Math.floor(Math.random() * 1000)
                })
            } else {
                snackbar.value = true;
            }

            newTodo.value = '';
        }

        return { todoStore, newTodo, handleAddEvent, snackbar, errorAddItemtxt }
    }
}
</script>