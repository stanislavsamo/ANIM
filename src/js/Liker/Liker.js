import './liker.less';

export default class Liker {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  init() {
    this.drawUi();
    this.events();
  }

  drawUi() {
    this.container.innerHTML = `
      <div class="like-wrapper">
        <button type="button" class="add-like">Like</button>
      </div>  
        `;
  }

  events() {
    const likeBtn = this.container.querySelector('.add-like');

    likeBtn.addEventListener('click', () => this.addLike());
  }

  addLike() {
    const like = document.createElement('div');
    like.classList.add('like');
    const randomTrajectory = Liker.getRandomTrajectory();

    like.style.animation = `${randomTrajectory} 500ms ease-out`;

    this.container.querySelector('.like-wrapper').appendChild(like);
    like.addEventListener('animationend', () => like.parentNode.removeChild(like));
  }

  static getRandomTrajectory() {
    const trajectories = ['like1', 'like2', 'like3', 'like4'];
    const randomIndex = Math.floor(Math.random() * trajectories.length);
    return trajectories[randomIndex];
  }
}
