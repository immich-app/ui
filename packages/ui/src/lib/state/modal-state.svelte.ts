class ModalState {
  #layer = $state(0);

  get layer() {
    return this.#layer;
  }

  incrementLayer() {
    return ++this.#layer;
  }

  decrementLayer() {
    if (this.#layer < 1) {
      throw new Error('Tried to decrement the modal layer <0');
    }

    return --this.#layer;
  }
}

export const modalState = new ModalState();
