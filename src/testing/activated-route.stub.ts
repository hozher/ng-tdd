import { ReplaySubject } from 'rxjs';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private paramSubject = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.paramSubject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.paramSubject.next(convertToParamMap(params));
  }

}
