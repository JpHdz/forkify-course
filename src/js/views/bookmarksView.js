import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class BookmarksView extends View {
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _parentElement = document.querySelector('.bookmarks__list');
  _message = '';

  addHanlderRender(hanler) {
    window.addEventListener('load', hanler);
  }

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
