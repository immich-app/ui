import { PersistedLocalStorage } from '$lib/state/persisted.js';
import { DateTime } from 'luxon';

class ScreencastManager {
  #enabled = new PersistedLocalStorage<boolean>('show-keys', false);
  #cursor = $state<{ event: MouseEvent; moving: boolean }>();
  #events = $state<Array<{ event: KeyboardEvent; expiresAt: DateTime }>>([]);

  get cursor() {
    return this.#cursor;
  }

  get events() {
    return this.#events.map(({ event }) => event);
  }

  get enabled() {
    return this.#enabled.current;
  }

  toggle() {
    this.#enabled.current = !this.#enabled.current;
    this.#events = [];
    this.#cursor = undefined;
  }

  onTick() {
    if (!this.#enabled.current) {
      return;
    }

    const now = DateTime.now();
    this.#events = this.#events.filter(({ expiresAt }) => expiresAt > now);
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.#enabled.current) {
      return;
    }

    this.#events.push({ event, expiresAt: DateTime.now().plus({ millisecond: 1500 }) });
    this.onTick();
  }

  onMouseDown(event: MouseEvent) {
    if (!this.#enabled.current) {
      return;
    }

    this.#cursor = { event, moving: false };
  }

  onMouseMove(event: MouseEvent) {
    if (!this.#enabled.current) {
      return;
    }

    if (this.#cursor) {
      this.#cursor = { event, moving: true };
    }
  }

  onMouseUp(_event: MouseEvent) {
    if (!this.#enabled.current) {
      return;
    }

    this.#cursor = undefined;
  }
}

export const screencastManager = new ScreencastManager();
