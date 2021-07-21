import styled from '@emotion/styled';

export const FormInput = styled.input`
  color: rgb(5, 5, 5);
  padding: 3px;
  font-size: 18px;
  background-color: ffffff;
  border-radius: 3px;
  margin: 5px;
`;
export const FormBtn = styled.button`
  color: rgb(10, 121, 121);
  font-weight: 600;
  border-radius: 20px;
  height: auto;
 padding: 6px;
  margin-left: 15px;
  border: 2px solid rgb(58, 230, 58);
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:focus {
  color: rgb(250, 244, 243);
  background-color: rgb(58, 230, 58);
  font-weight: 600;
  transform: scale(1.1);
  border: 2px solid rgb(12, 231, 213);
  }
`;
