import quickIsPrime from 'quick-is-prime';
import { Observable } from 'rxjs';

export default () => (source) =>
  new Observable((observer) =>
    source.subscribe({
      next: (number) => {
        if (quickIsPrime(number)) {
          observer.next(number);
        }
      },
      error: (err) => observer.error(err),
      complete: () => observer.complete(),
    }),
  );
