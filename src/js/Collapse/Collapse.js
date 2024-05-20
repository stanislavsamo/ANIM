import './collapse.less';

export default class Collapse {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  init() {
    this.drawUi();
    this.addEvents();
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="collapse-wrapper">
        <button type="button" class="show-collapse">Collapse</button>
        <div class="content-collapse">
          Collapsible containers are interactive UI components 
          that allow users to expand and collapse sections of content. This helps to keep the webpage organized and clutter-free, 
          making it easier for users to find and focus on the information they're looking for.
        </div>
      </div>
      <span class="copy-collapse">Copy</span>
      `;
  }

  addEvents() {
    const collapseBtn = this.container.querySelector('.show-collapse');
    collapseBtn.addEventListener('click', () => this.container
      .querySelector('.content-collapse')
      .classList.toggle('content-collapse_visible'));
  }
}
