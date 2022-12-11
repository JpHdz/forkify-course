import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class resultsView extends View {
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _parentElement = document.querySelector('.results');
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();
