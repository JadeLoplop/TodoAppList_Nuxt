import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from '@stores/todo';

describe('Test Case for Store State', () => {
    beforeEach(() => {
        // Reset the store state before each test
        setActivePinia(createPinia())
        useTodoStore().$reset();
    });

    test('addTodo action - adds a todo to the state', () => {
        const store = useTodoStore();
        store.removeAll(null);
        store.addTodo({
            id: Math.floor(Math.random() * 1000),
            title: 'Sample Todo',
            isComplete: false
        });

        expect(store.todos).toHaveLength(1);
        expect(store.todos[0].title).toBe('Sample Todo');
        expect(store.todos[0].isComplete).toBe(false);
    });

    test('deleteTodo action - removes a todo task from array', () => {
        const store = useTodoStore();
        store.removeAll(null);
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: 'Sample Todo',
            isComplete: false
        }
        store.addTodo(newTodo);
        store.deleteTodo(store.todos[0].id)

        expect(store.todos).toHaveLength(0);
        expect(store.todos).not.toContainEqual(newTodo)
    });

    test('toggleTodo action - toggle a todo task', () => {
        const store = useTodoStore();
        store.removeAll(null);
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: 'Sample Todo',
            isComplete: false
        }
        store.addTodo(newTodo);
        store.toggleEvent(newTodo.id)
        
        expect(store.todos[0].isComplete).toBe(true)
    });

    test('removeAll action - removes all todo tasks', () => {
        const store = useTodoStore();
        store.removeAll(null);
    
        expect(store.todos).toHaveLength(0);
    });
})