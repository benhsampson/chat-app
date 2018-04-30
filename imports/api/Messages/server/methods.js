import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Messages from '../index';

Meteor.methods({
  'messages.insert': (comment) => {
    check(comment, {
      userId: String,
      text: String,
    });
    return Messages.insert(comment);
  },
});
