import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { Meteor } from 'meteor/meteor';

import App from '../../ui/layouts/App';

import base from '../../styles/base';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
  ${base};
`;

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
