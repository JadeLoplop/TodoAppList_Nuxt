describe('import vue components', () => {
    test('Successfully imports TodoList',async () => {
        const cmp = await import ('@components/TodoList.vue')
        expect(cmp).toBeDefined()
    });
    test('Successfully imports TodoDetails',async () => {
        const cmp = await import ('@components/TodoDetails.vue')
        expect(cmp).toBeDefined()
    });
})