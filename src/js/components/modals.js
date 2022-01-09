let modalClass = "js-modal";
let modalContentClass = "js-modal-content";

const modal = document.querySelectorAll(`.${modalClass}`);

if (modal) {
  const modalOpenButtons = document.querySelectorAll("[data-modal]");
  modalOpenButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let modalId = "#" + button.dataset.modal;
      openModal(modalId);
    });
  });

  const modalCloseButtons = document.querySelectorAll("js-modal-close");
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      closeModal();
    });
  });

  const modalContents = document.querySelectorAll(`.${modalContentClass}`);
  modalContents.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  modal.forEach((item) => {
    item.addEventListener("click", (e) => {
      closeModal();
    });
  });
}

function openModal(modalId) {
  document.querySelector(modalId).classList.add("active");
  document.body.classList.add("lock");
}

function closeModal() {
  const modalActive = document.querySelector(`${modalClass}.active`);
  if (modalActive) {
    modalActive.classList.remove("active");
    document.body.classList.remove("lock");
  }
}
