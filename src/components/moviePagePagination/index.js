import movieAPI from '../../utils/movieAPI';
import templatePagination from './templatePagination.hbs';
import './stylesPagination.scss';

export default function (root) {
  const template = templatePagination();
  root.insertAdjacentHTML('beforeend', template);

  const refs = {
    btnPrev: document.querySelector('.pagination_btn--prev'),
    btnNext: document.querySelector('.pagination_btn--next'),
    pageNumber: document.querySelector('.pagination_page'),
    
  };

  
}