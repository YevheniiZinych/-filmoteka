import './userAuth/firebase-auth-import';
import Spinner from './spinner';
import { renderMarkupTrending } from './render_trending.js';
import { handleSubmit } from './search_by_keywords';
import { onModalOpenFilm } from './modal-film';
import { onBackdropClick } from './modal-film';
import { onEscBtnPress } from './modal-film';
import './acive_button';
import { renderMarkupTrending } from './render_trending.js';
const formRef = document.querySelector('#search-form');
formRef.addEventListener('submit', handleSubmit);
// Экземпляр класса Spinner имеет 2 метода:
// 1. spinner.enable() - выключает спинер
// 2. spinner.disable() - включает спинер
const spinner = new Spinner({
  selector: '[data-action="load-spinner"]',
});
spinner.enable(); // сейчас спинер выключен

renderMarkupTrending();
