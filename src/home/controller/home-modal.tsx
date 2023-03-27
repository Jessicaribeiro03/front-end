export const myModal = document.getElementById('myModal')
export const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
  
})