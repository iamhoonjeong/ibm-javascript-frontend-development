import { ajax } from 'rxjs/ajax';

const btnFetch = document.getElementById('btnFetch');
const result = document.getElementById('result');
const url =
  'http://api.icndb.com/jokes/random/?limitTo=[nerdy]&escape=javascript';

btnFetch.addEventListener('click', () => {
  ajax({ url, crossDomain: true }).subscribe(
    (e) => (result.textContent = e.response.value.joke),
  );
});

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
