class Modal {
  constructor(config) {
    const defaultConfig = {
      MODAL_WRAPPER: "modal",
    };
    this.config = Object.assign(defaultConfig, config);
    this.modal = document.querySelector(`.${this.config.MODAL_WRAPPER}`);
    this.body = document.body;
    this.speed = 300;
    this.isOpen = false;
    this.modalWindow = null;

    if (!this.modal) {
      console.error("Модальное окно не найдено!");
      return;
    }

    this.init();
  }

  init() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-modal-button]");
      if (btn) {
        e.preventDefault();
        e.stopPropagation(); // ← ДОБАВЬТЕ ЭТО
        const target = btn.dataset.modalButton;
        this.modalWindow = document.querySelector(
          `[data-modal-window="${target}"]`,
        );
        if (this.modalWindow) {
          this.open();
        }
        return; // ← ДОБАВЬТЕ ЭТО
      }

      const closeBtn = e.target.closest("[data-modal-close]");
      if (closeBtn) {
        e.stopPropagation(); // ← ДОБАВЬТЕ ЭТО
        this.close();
        return;
      }

      if (this.isOpen && !e.target.closest("[data-modal-window]")) {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });
  }

  open() {
    console.log("Модалка открыта");
    this.modal.classList.add("modal--open");
    this.modalWindow.classList.add("modal__window--open");
    this.body.style.overflow = "hidden";
    this.isOpen = true;
  }

  close() {
    console.log("Модалка закрыта");
    this.modal.classList.remove("modal--open");
    if (this.modalWindow) {
      this.modalWindow.classList.remove("modal__window--open");
    }
    this.body.style.overflow = "";
    this.isOpen = false;
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  console.log("Инициализация модального окна");
  new Modal({ MODAL_WRAPPER: "modal" });
});
