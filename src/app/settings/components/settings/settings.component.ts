import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.actions';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/CurrentUserInput.interface';
import {
  ErrorsSettingsSelector,
  isSubmittingSettingsSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;

  isSubmitting$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSettingsSelector));
    this.errors$ = this.store.pipe(select(ErrorsSettingsSelector));
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = new FormGroup({
      image: new FormControl(this.currentUser.image),
      username: new FormControl(this.currentUser.username),
      bio: new FormControl(this.currentUser.bio),
      email: new FormControl(this.currentUser.email),
      password: new FormControl(null),
    });
  }

  onSubmit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };

    this.store.dispatch(
      updateCurrentUserAction({ currentUserInput: currentUserInput })
    );
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
