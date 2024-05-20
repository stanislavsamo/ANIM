// import './modal.less';

// export default class Modal {
//   constructor(container) {
//     if (!(container instanceof HTMLElement)) {
//       throw new Error('container is not HTMLElement');
//     }

//     this.container = container;
//     this.errorContainer = null;
//     this.modal = null;
//     this.textEl = null;
//     this.submitButton = null;
//     this.openButton = null;
//     this.closeButton = null;
//   }

//   init() {
//     this.drawUi();
//     this.addEvents();
//   }

//   drawUi() {
//     this.container.innerHTML = `
//       <div id="modal" class="modal">
//         <div class="modal-wrapper">
//           <div class="modal-content">
//               <h2>Напишите нам</h2>
//               <textarea id="text" class="text-modal" placeholder="Writen your text here"></textarea>
//               <button type="submit" id="submit" class="btn-modal">Отправить</button>
//               <button type="button" class="close-modal">&times;</button>
//           </div>
//           <button type="button" id="open-modal" class="open-modal">Написать</button>
//         </div>
//         <div class="error-container"></div>
//       </div>
//     `;
//   }

//   addEvents() {
//     this.modal = this.container.querySelector('#modal');
//     this.textEl = this.container.querySelector('#text');
//     this.submitButton = this.container.querySelector('#submit');
//     this.openButton = this.container.querySelector('#open-modal');
//     this.closeButton = this.container.querySelector('.close-modal');
//     this.errorContainer = this.container.querySelector('.error-container');

//     this.submitButton.addEventListener('click', () => this.onSubmit());
//     this.openButton.addEventListener('click', () => this.showModal());
//     this.textEl.addEventListener('click', () => this.clearEmptyTextAlert());
//     this.closeButton.addEventListener('click', () => this.hideModal());
//   }

//   onSubmit() {
//     if (this.textEl.value) {
//       this.modal.style.display = 'none';
//       alert('Сообщение отрпавлено!');
//     } else {
//       this.showError('Пожалуйста, введите ваш текст');
//     }
//   }

//   showModal() {
//     this.modal
//       .querySelector('.modal-content')
//       .classList.add('modal-content_visible');
//     this.openButton.classList.add('open-modal_click');
//   }

//   hideModal() {
//     this.modal
//       .querySelector('.modal-content')
//       .classList.remove('modal-content_visible');
//     this.openButton.classList.remove('open-modal_click');
//   }

//   clearEmptyTextAlert() {
//     this.hideError();
//   }

//   showError(message) {
//     this.errorContainer.textContent = message;
//     this.errorContainer.style.display = 'block';
//   }

//   hideError() {
//     this.errorContainer.style.display = 'none';
//   }
// }

import './modal.less';

export default class Modal {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.errorContainer = null;
    this.modal = null;
    this.textEl = null;
    this.submitButton = null;
    this.openButton = null;
    this.closeButton = null;
    this.successMessage = null;
  }

  init() {
    this.drawUi();
    this.addEvents();
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="success-message"></div> <!-- Добавим элемент для успешного сообщения -->
      <div id="modal" class="modal">
        <div class="modal-wrapper">
          <div class="modal-content">
              <h2>Напишите нам</h2>
              <textarea id="text" class="text-modal" placeholder="Напишите ваш текст здесь"></textarea>
              <button type="submit" id="submit" class="btn-modal">Отправить</button>
              <button type="button" class="close-modal">&times;</button>
          </div>
          <button type="button" id="open-modal" class="open-modal">Написать</button>
        </div>
        <div class="error-container"></div>
      </div>
    `;
  }

  addEvents() {
    this.modal = this.container.querySelector('#modal');
    this.textEl = this.container.querySelector('#text');
    this.submitButton = this.container.querySelector('#submit');
    this.openButton = this.container.querySelector('#open-modal');
    this.closeButton = this.container.querySelector('.close-modal');
    this.errorContainer = this.container.querySelector('.error-container');
    this.successMessage = this.container.querySelector('.success-message'); // Инициализация элемента успешного сообщения

    this.submitButton.addEventListener('click', () => this.onSubmit());
    this.openButton.addEventListener('click', () => this.showModal());
    this.textEl.addEventListener('click', () => this.clearEmptyTextAlert());
    this.closeButton.addEventListener('click', () => this.hideModal());
  }

  onSubmit() {
    if (this.textEl.value) {
      this.modal.style.display = 'none';
      this.showSuccess('Сообщение отправлено!');
    } else {
      this.showError('Пожалуйста, введите ваш текст');
    }
  }

  showModal() {
    this.modal
      .querySelector('.modal-content')
      .classList.add('modal-content_visible');
    this.openButton.classList.add('open-modal_click');
  }

  hideModal() {
    this.modal
      .querySelector('.modal-content')
      .classList.remove('modal-content_visible');
    this.openButton.classList.remove('open-modal_click');
  }

  clearEmptyTextAlert() {
    this.hideError();
  }

  showError(message) {
    this.errorContainer.textContent = message;
    this.errorContainer.style.display = 'block';
  }

  hideError() {
    this.errorContainer.style.display = 'none';
  }

  showSuccess(message) {
    this.successMessage.textContent = message;
    this.successMessage.style.display = 'flex';
    setTimeout(() => {
      this.successMessage.style.display = 'none';
    }, 3000); // Сообщение исчезает через 3 секунды
  }
}
