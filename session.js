export default class Session {
  constructor(session) {}

  @action
  setTimes = session => {
    this.startedAt = session.startedAt;
  };

  close = () => {};
}
