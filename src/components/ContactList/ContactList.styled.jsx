import styled from "@emotion/styled";

export const List = styled.ul`
  border-radius: 4px;
  padding:0;
  /* overflow: hidden */;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 5px;
  border-bottom: 1px solid rosybrown;
  & span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    color:  rgb(10, 121, 121);
    &:first-of-type {
      color: #070707;
      margin-right: 10px;
    }
}
`;
export const Button = styled.button`
  color: rgb(10, 121, 121);
  font-weight: 600;
  border-radius: 20px;
  height: auto;
 padding: 6px;
  margin-left: auto;
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