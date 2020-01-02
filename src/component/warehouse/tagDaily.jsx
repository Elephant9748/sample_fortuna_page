import React from "react";
import {
  FormTagDaily,
  TagDailyRow,
  TagDailyLabel,
  FormInputTagDaily,
  FormTagInput,
  ButtonContainer,
  Span2,
  ButtonTag
} from "../styling/formdailystyle";

const TagDaily = ({ tagform }) => {
  return (
    <FormTagDaily onSubmit={tagform.handleSubmit} onReset={tagform.handleReset}>
      <TagDailyRow>
        <TagDailyLabel htmlFor="tag">Tag End :</TagDailyLabel>
        <FormInputTagDaily>
          <FormTagInput
            name="tag"
            id="tag"
            onChange={tagform.handleChange}
            value={tagform.values.tag}
          />
        </FormInputTagDaily>
      </TagDailyRow>
      <ButtonContainer>
        <Span2 />
        <ButtonTag>
          <button type="submit">Save</button>
          <button type="reset">Clear</button>
        </ButtonTag>
      </ButtonContainer>
    </FormTagDaily>
  );
};

export default TagDaily;
