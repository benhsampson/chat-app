import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Messages = new Mongo.Collection('Messages');

const MessagesSchema = new SimpleSchema({
  userId: {
    type: String,
    label: 'The user sending this message',
  },
  text: {
    type: String,
    label: 'The text of the message',
  },
});

Messages.attachSchema(MessagesSchema);

export default Messages;
