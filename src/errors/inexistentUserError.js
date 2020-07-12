class InexistentUserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InexistentUserError';
  }
}

module.exports = InexistentUserError;
