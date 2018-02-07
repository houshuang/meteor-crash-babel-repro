import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import A from '../imports/a';
import B from '../imports/b';
import path from 'path';

Meteor.startup(() => {
  // const TeacherLoadable = Loadable({
  //   loader: () => import('../imports/a.js'),
  //   loading: () => 'Loading...',
  //   serverSideRequirePath: path.resolve(__dirname, './TeacherContainer')
  // });

  render(
    <div>
      <h1>Hi</h1>
      <A />
      <B />
    </div>,
    document.getElementById('render-target')
  );
});
