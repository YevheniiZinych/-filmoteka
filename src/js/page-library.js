import './userAuth/firebase-auth-import';
import './active_button';
import Spinner from './spinner';
import { saveGenres } from './genres_storage';
import './add_to_list';
import './library_lists';
import './modal-film';
import { toggleModal, toggleCard } from './modal-team.js';
import './day-night-library';
import './userAuth/firebase-library';
saveGenres();
import { onWachedLibBtnClick } from './library_lists';
import { refs } from "./refs";
import { onChangePageClick } from './render_trending';

refs.pagination.removeEventListener('click', onChangePageClick);

onWachedLibBtnClick();

