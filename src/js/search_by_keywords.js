import { QueryHandler } from './query_handler';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createCardMarkup } from './card_markup';

const queryHandler = new QueryHandler();

// const formRef = document.querySelector('#search-form');
const filmListRef = document.querySelector('.card-list');

// formRef.addEventListener('submit', handleSubmit);
Notify.init({
  timeout: 1500,
  position: 'center-top',
  backOverlay: false,
});

export async function handleSubmit(evt) {
  evt.preventDefault();
  console.log(evt);
  const {
    elements: { searchQuery },
  } = evt.target;
  const valueSearchQuery = searchQuery.value.trim().toLowerCase();
  if (!valueSearchQuery) {
    Notify.failure('Enter the name of the movie!');
    return;
  }
  queryHandler.resetPage();
  filmListRef.innerHTML = '';
  queryHandler.query = valueSearchQuery;
  try {
    const { results, total_results } =
      await queryHandler.fetchQueryResultsForMovieSearch();

    if (results.length === 0) {
      return Notify.failure(
        'Search result not successful. Enter the correct movie name.'
      );
    }
    Notify.success(`Hooray! We found ${total_results} movie!`);
    const markup = results.map(createCardMarkup).join('');
    filmListRef.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
