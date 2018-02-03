import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

class A {
  @observable x;
}
const c = new A();
export default observer(() => <h1>{c.x}</h1>);
c.x = 'Hi';
