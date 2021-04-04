import { ref } from 'vue'

export default (): any => {
  const name = ref('Name')
  return { name }
}
