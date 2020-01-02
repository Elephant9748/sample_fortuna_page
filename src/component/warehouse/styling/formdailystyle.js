import styled from "styled-components";

export const Label = styled.label`
  display: table-cell;
  padding-bottom: 20px;
`;

export const Span2 = styled.div``;

export const FormDaily = styled.form`
  display: table;
  height: 100%;
  width: 100%;
  /* border: 1px solid teal; */
  padding: 5px;
`;

export const FormTagDaily = styled(FormDaily)``;

export const TableRow = styled.div`
  display: table-row;
`;

export const ButtonContainer = styled(TableRow)``;
export const TagDailyRow = styled(TableRow)``;

export const FormInput = styled.input.attrs(props => ({
  type: "text"
}))`
  width: 100%;
  height: 20px;

  background-color: rgb(196, 196, 196, 0.8);
  border: 1px solid rgb(196, 196, 196);
  font-size: 1em;
  height: 100%;

  &:focus {
    background-color: rgb(196, 196, 196);
  }
`;

export const InputDaily = styled.div`
  display: table-cell;
  padding-bottom: 20px;
`;
export const ButtonGroup = styled.div`
  display: table-cell;
  padding-bottom: 20px;
  text-align: right;

  button {
    background-color: rgb(71, 57, 90);
    border: none;
    color: inherit;
    display: inline-block;
    width: 77px;
    height: 28px;
    font-weight: bold;
    font-size: 0.9em;
    margin-left: 5px;
  }
`;
export const TagDailyLabel = styled(Label)``;
export const FormInputTagDaily = styled(InputDaily)``;
export const FormTagInput = styled(FormInput)``;
export const ButtonTag = styled(ButtonGroup)``;
