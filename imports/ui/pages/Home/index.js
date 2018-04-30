import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import store from 'store';
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { withTracker } from 'meteor/react-meteor-data';

import Messages from '../../../api/Messages';

import {
  Container,
  Header,
  AppHeading,
  AppSubheading,
  Content,
  MessagesList,
  Message,
  Form,
  Input,
} from './style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    autoBind(this);
  }

  componentDidMount() {
    const existingUserId = store.get('userId');

    if (!existingUserId) {
      store.set('userId', Random.id());
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const comment = {
      text: this.state.text,
      userId: store.get('userId'),
    };

    Meteor.call('messages.insert', comment, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        console.log('MESSAGE SUBMITTED');
        this.setState({ text: '' });
      }
    });
  }

  render() {
    const { loading, messages } = this.props;
    return (
      <Container>
        <Header>
          <AppHeading>Anonymous Chatting App</AppHeading>
          <AppSubheading>Made with Meteor, React, and Styled Components</AppSubheading>
        </Header>
        <Content>
          <MessagesList>
            {!loading ? (
              <div>
                {messages.map(({ _id, userId, text }) => {
                  const owned = !!(store.get('userId') === userId);
                  return (
                    <Message key={_id} owned={owned}>
                      {text}
                    </Message>
                  );
                })}
              </div>
            ) : <p>Loading...</p>}
          </MessagesList>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="What's going on?"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('messages.all');
  return {
    loading: !subscription.ready(),
    messages: Messages.find().fetch(),
  };
})(Home);
