import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
    state: () => ({
        todos: [
            { id: 1, title: "Wake up at 5am", isComplete: false }

        ],
    }),
    getters: {
        fetchTodos: (state) => {
            return state.todos;
        },

        fetchTodosIncomplete: (state) => {
            return state.todos.filter(t => {
                return t.isComplete == false
            });
        },

        fetchTodosComplete: (state) => {
            return state.todos.filter(t => {
                return t.isComplete == true
            });
        },

        fetchTodoCount: (state) => {
            return state.todos.length
        }
    },
    actions: {

        addTodo(todo: any) {
            // @ts-ignore
            this.todos.push(todo);
        },

        deleteTodo(id: any) {
            this.todos = this.todos.filter(t => {
                return t.id !== id
            });
        },

        toggleEvent(id: any) {
            const todo = this.todos.find(t => t.id === id)
            // @ts-ignore
            todo.isComplete = !todo?.isComplete
        },

        removeAll(isComplete?: boolean | null) {
            if (isComplete === null) {
                this.todos = [];
            } else {
                this.todos = this.todos.filter(t => {
                    return t.isComplete !== isComplete
                });
            }
        }
    }

})