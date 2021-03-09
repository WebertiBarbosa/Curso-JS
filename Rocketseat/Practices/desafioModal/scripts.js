const openModal = document.getElementById('openModal') 

const modalWrapper = document.querySelector('.modal-wrapper')

openModal.onclick = function(){
  modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
  const isKeyEsc = event.key === 'Escape'

  if (isKeyEsc){
    modalWrapper.classList.add('invisible')
  }
}) 

