import { Component } from '../../Component';

export class GridView extends Component {
  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  gridItems: HTMLElement[];

  constructor(props) {
    super(props);
    this.render();
    this.mount();
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');

    this.renderNewsGrid();
    this.renderPressLogo();
  }

  mount() {
    this.element.append(...this.gridItems);
  }

  renderNewsGrid() {
    this.gridItems = [];
    const cellNum = 24;

    for (let i = 0; i < cellNum; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const logoImg = document.createElement('img');
      logoImg.classList.add('press-logo');

      gridItem.append(logoImg);
      this.gridItems.push(gridItem);
    }
  }

  renderPressLogo() {
    this.gridItems.forEach((item, idx) => {
      const itemImg = item.children[0] as HTMLImageElement;
      const imgIdx = idx + (this.props.currentPage - 1) * 24;

      itemImg.src = this.props.gridData[imgIdx]?.logoURL || '';
      itemImg.alt = this.props.gridData[imgIdx]?.name || '';
    });
  }

  // update(state: GridState) {
  //   if (state.displayCell === 'show') {
  //     this.showSubBtn(state);
  //   }
  //   if (state.displayCell === 'hide') {
  //     this.hideSubBtn(state);
  //   }

  //   if (state.currentPage === 1) {
  //     this.render(state);
  //     this.leftBtn.classList.add('hide');
  //   } else if (state.currentPage === 4) {
  //     this.render(state);
  //     this.rightBtn.classList.add('hide');
  //   } else {
  //     this.render(state);
  //     this.leftBtn.classList.remove('hide');
  //     this.rightBtn.classList.remove('hide');
  //   }
  // }

  // render(state: GridState) {
  //   this.gridItems.forEach((item, idx) => {
  //     const itemImg = item.children[0] as HTMLImageElement;
  //     const imgIdx = idx + (state.currentPage - 1) * 24;
  //     itemImg.src = state.newsData[imgIdx] ? state.newsData[imgIdx].logoURL : '';
  //     itemImg.alt = state.newsData[imgIdx] ? state.newsData[imgIdx].name : '';
  //   });
  // }

  // setEvent() {
  //   this.rightBtn.addEventListener('click', () => {
  //     Actions.clickArrowBtn('right');
  //   });
  //   this.leftBtn.addEventListener('click', () => {
  //     Actions.clickArrowBtn('left');
  //   });
  //   this.gridItems.forEach((item) => {
  //     item.addEventListener('mouseenter', (e) => {
  //       Actions.handleSubBtn(e.target, 'show');
  //     });
  //   });
  //   this.gridItems.forEach((item) => {
  //     item.addEventListener('mouseleave', (e) => {
  //       Actions.handleSubBtn(e.target, 'hide');
  //     });
  //   });
  // }

  // showSubBtn({ targetCell }) {
  //   const gridCell = targetCell;

  //   const subBtn = document.createElement('button');
  //   subBtn.classList.add('sub-btn');

  //   const subBtnIcon = document.createElement('img');
  //   subBtnIcon.classList.add('sub-btn__icon');
  //   subBtnIcon.setAttribute('src', '/src/assets/plus.svg');

  //   const subBtnLabel = document.createElement('span');
  //   subBtnLabel.classList.add('sub-btn__label');
  //   subBtnLabel.textContent = '구독하기';

  //   subBtn.append(subBtnIcon, subBtnLabel);

  //   gridCell.children[0].classList.add('hide');
  //   gridCell.append(subBtn);
  // }

  // hideSubBtn({ targetCell }) {
  //   const gridCell = targetCell;
  //   const subBtn = gridCell.querySelector('.sub-btn');
  //   gridCell.removeChild(subBtn);
  //   gridCell.children[0].classList.remove('hide');
  // }
}