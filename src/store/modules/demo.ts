import { defineStore } from 'pinia'
import { ref } from 'vue'

const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const abc = ref(0)

  const increment = () => {
    counter.value++
    abc.value++
  }

  return {
    counter,
    abc,
    increment
  }
}, {
  persist: {
    key: 'hm-demo',
    storage: localStorage
  }
})

export default useDemoStore
