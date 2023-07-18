import styled from '@emotion/styled';
import { ErrorMessage, Form } from 'formik';

export const ContactFormSection = styled.div`
  margin-bottom: 44px;
  font-size: 20px;

  h1 {
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

    font-size: inherit;
  }

  button {
    display: block;
    width: 220px;
    height: 40px;

    font-size: inherit;

    :hover {
      background-color: #361da5;
    }

    :active {
      background-color: #1f0592;
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ValidateError = styled(ErrorMessage)`
  margin-top: 8px;
  margin-left: 12px;
  font-size: 16px;
  color: red;
`;
