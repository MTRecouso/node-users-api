class FieldAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FieldAlreadyExistsError';
  }
}

module.exports = FieldAlreadyExistsError;
