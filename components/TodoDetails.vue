<template>
    <div class="pt-3 d-flex justify-center">
        <transition-group name="fade">
            <v-col cols="4">
                <div class="pb-5" v-if="todoStore.fetchTodosIncomplete.length > 0">
                    <v-row class="pb-3">
                        <h4>Active Todos {{ todoStore.fetchTodosIncomplete.length }}</h4>
                        <v-spacer></v-spacer>
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn class="mr-3" size="x-small" v-bind="props"
                                :color="isHovering ? 'red' : 'default'"
                                @click="todoStore.removeAll(false)">
                                    Remove All
                                </v-btn>
                            </template>
                        </v-hover>
                    </v-row>
                    <v-card class="mx-auto pa-3 ma-2 d-flex text-center" v-for="todo in todoStore.fetchTodosIncomplete"
                        :key="todo.id">
                        <v-row>
                            <v-col cols="2" class="d-flex justify-space-between">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn icon v-bind="props" :color="isHovering ? 'success' : 'default'"
                                            @click="todoStore.toggleEvent(todo.id)">
                                            <v-icon>mdi-check</v-icon>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </v-col>

                            <v-col cols="8">
                                <v-list-item-title class="headline mb-1">
                                    {{ todo.title }}
                                </v-list-item-title>
                            </v-col>
                            <v-col cols="2" class="d-flex justify-space-between ">
                                <v-btn icon color="red" @click="todoStore.deleteTodo(todo.id)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>

                <div v-if="todoStore.fetchTodosComplete.length > 0">
                    <v-row class="pb-3">
                        <h4>Completed Todos {{ todoStore.fetchTodosComplete.length }}</h4>
                        <v-spacer></v-spacer>
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn class="mr-3" size="x-small" v-bind="props"
                                :color="isHovering ? 'red' : 'default'"
                                @click="todoStore.removeAll(true)">
                                    Remove All
                                </v-btn>
                            </template>
                        </v-hover>
                    </v-row>
                    <v-card class="mx-auto pa-3 ma-2 text-center" v-for="todo in todoStore.fetchTodosComplete"
                        :key="todo.id">
                        <v-row>
                            <v-col cols="2" class="d-flex justify-space-between">
                                <v-hover>
                                    <template v-slot:default="{ isHovering, props }">
                                        <v-btn icon v-bind="props" :color="isHovering ? 'warning' : 'default'"
                                            @click="todoStore.toggleEvent(todo.id)">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </template>
                                </v-hover>
                            </v-col>
                            <v-col cols="8">
                                <v-list-item-title class="headline mb-1">
                                    {{ todo.title }}
                                </v-list-item-title>
                            </v-col>
                            <v-col cols="2" class="d-flex justify-space-between ">
                                <v-btn icon color="red" @click="todoStore.deleteTodo(todo.id)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </v-col>
        </transition-group>
    </div>
</template>

<script>
import { useTodoStore } from '@/stores/todo';

export default {
    setup() {
        const todoStore = useTodoStore()

        return { todoStore }
    }
}
</script>