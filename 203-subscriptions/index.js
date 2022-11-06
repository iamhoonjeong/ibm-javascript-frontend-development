import { of, EMPTY, NEVER, throwError, interval, tap, take } from 'rxjs';

const btnStart = document.getElementById('btnStart');
const result = document.getElementById('result');

btnStart.addEventListener('click', () => {
  const data$ = of(1, 2, 3, 4).pipe(tap((e) => console.log('tap', e)));
  const empty$ = EMPTY;
  const never$ = NEVER;
  const error$ = throwError(() => new Error('Something bad just happened'));
  const time$ = interval(1000).pipe(take(3));

  data$.subscribe({
    next: (e) => {
      console.log(e);
      result.textContent = e;
    },
    error: (error) => (result.textContent = error.message),
    complete: () => (result.textContent = 'Complete'),
  });
  setTimeout(() => subscription.unsubscribe(), 5000);
});

if (module.hot) {
  module.hot.dispose(function () {
    location.reload();
  });
}
