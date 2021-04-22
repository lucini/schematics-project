import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const fakeObservable = of([1, 2, 3]);

@Component({
    selector: 'lucini-app-opa',
    templateUrl: './opa.component.html',
    styleUrls: ['./opa.component.scss'],
})

export class OpaComponent implements OnInit, OnDestroy {
    private readonly destroy$ = new Subject();
    stream$ = fakeObservable;
    constructor() { }

    ngOnInit(): void {
        this.stream$.pipe(takeUntil(this.destroy$)).subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}