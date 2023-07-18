import styled from '@emotion/styled';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 480px;
    width: 100%;
    gap: 12px;
  }

  button {
    width: 88px;
    height: 32px;
    font-size: 16px;

    :hover {
      background-color: #361da5;
    }

    :active {
      background-color: #1f0592;
    }
  }
`;

export const ContactListSection = styled.div`
  h2 {
    margin-left: 40px;
    margin-bottom: 28px;
    color: #eac645;
  }

  p {
    margin-bottom: 12px;
    font-weight: 700;
  }

  input {
    max-width: 280px;
    width: 100%;
    height: 36px;

    margin-bottom: 16px;
  }

  li {
  }
`;

export const ContactName = styled.span`
  font-weight: 700;
  color: #eac645;
`;

export const ContactPhone = styled.div`
  font-size: 20px;
`;
