import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('app'));

// use hot module reloading if it's available
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
