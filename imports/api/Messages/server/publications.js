import { Meteor } from 'meteor/meteor';

import Messages from '../index';

Meteor.publish('messages.all', () => Messages.find());
