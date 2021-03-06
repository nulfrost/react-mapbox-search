import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.input`
  height: 100%;
  width: 100%;
  text-indent: 40px;
  font-size: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  ${(props) => props.hasResults && "border-bottom-left-radius: 0;"}
  ${(props) => props.hasResults && "border-bottom-right-radius: 0;"}
`;

const SearchInput = ({
  value,
  handleInputChange,
  hasResults,
  handleFocus,
  handleBlur,
  searchHint,
}) => (
  <Wrapper>
    <FaSearch />
    <InputWrapper
      displayName="input"
      hasResults={hasResults}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={searchHint}
      value={value}
      onChange={handleInputChange}
    />
  </Wrapper>
);

export default SearchInput;
