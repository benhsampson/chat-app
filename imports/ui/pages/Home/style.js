import styled from 'styled-components';

const Container = styled.div`
  background: #FAFAFA;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  align-items: center;
  background: #66BB6A;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const AppHeading = styled.h2`
  font-weight: 500;
  margin: 0 0 0.25rem 0;
  text-align: center;
`;

const AppSubheading = styled.p`
  margin: 0;
  text-align: center;
`;

const Content = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

const MessagesList = styled.ul`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Message = styled.li`
  background: ${({ owned }) => (owned ? '#66BB6A' : '#F5F5F5')};
  border-radius: 0.25rem;
  color: ${({ owned }) => (owned ? '#FFFFFF' : '#000000')};
  margin: ${({ owned }) => (owned ? '0 0 1.5rem 2rem' : '0 2rem 1.5rem 0')};
  max-width: 24rem;
  padding: 1rem;
`;

const Form = styled.form`
`;

const Input = styled.input`
  border: 0.0625rem solid #BDBDBD;
  border-radius: 0.25rem;
  outline: none;
  padding: 1rem;
  width: 24rem;
`;

export {
  Container,
  Header,
  AppHeading,
  AppSubheading,
  Content,
  MessagesList,
  Message,
  Form,
  Input,
};
