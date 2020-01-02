import React from "react";
import {
  FormDaily,
  InputDaily,
  FormInput,
  Label,
  TableRow,
  ButtonGroup,
  ButtonContainer,
  Span2
} from "./styling/formdailystyle";

const FormAddDaily = ({ dailyform }) => {
  return (
    <FormDaily
      onReset={dailyform.handleReset}
      onSubmit={dailyform.handleSubmit}
    >
      <TableRow>
        <Label htmlFor="amount">Amount :</Label>
        <InputDaily>
          <FormInput
            name="amount"
            id="amount"
            onChange={dailyform.handleChange}
            value={dailyform.values.amount}
          />
        </InputDaily>
      </TableRow>
      <TableRow>
        <Label htmlFor="kg">Kg :</Label>
        <InputDaily>
          <FormInput
            id="kg"
            name="kg"
            onChange={dailyform.handleChange}
            value={dailyform.values.kg}
          />
        </InputDaily>
      </TableRow>
      <ButtonContainer>
        <Span2/>
        <ButtonGroup>
          <button type="submit">Save</button>
          <button type="reset">Clear</button>
        </ButtonGroup>
      </ButtonContainer>
    </FormDaily>
  );
};

export default FormAddDaily;
