const App = {
  data() {
    return {
      valueInput: '',
      todos: [],
      completeList: [],
    };
  },
  methods: {
    handleInput(e) {
      this.valueInput = e.target.value;
    },
    addTask() {
      if (this.valueInput === '') {
        return;
      }
      this.todos.push({
        title: this.valueInput,
        id: Math.random(),
      });
      this.valueInput = '';
    },
    doCheck(index, type) {
      if (type === 'need') {
        console.log(type);
        const completeMask = this.todos.splice(index, 1);
        console.log(...completeMask);
        this.completeList.push(...completeMask);
      } else {
        const noCompleteMask = this.completeList.splice(index, 1);
        this.todos.push(...noCompleteMask);
      }
    },
    removeMask(idx, type) {
      const toDoList = type === 'need' ? this.todos : this.completeList;
      toDoList.splice(idx, 1);
    },
  },
};
Vue.createApp(App).mount('#app');
