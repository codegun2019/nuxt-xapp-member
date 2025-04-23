// composables/useToast.js
export function useToast(duration = 2000) {
  const toast = reactive({
    show: false,
    message: ''
  })

  const showToast = (msg) => {
    toast.show = false
    toast.message = msg
    setTimeout(() => {
      toast.show = true
    }, 10)

    setTimeout(() => {
      toast.show = false
    }, duration)
  }

  return { toast, showToast }
}
