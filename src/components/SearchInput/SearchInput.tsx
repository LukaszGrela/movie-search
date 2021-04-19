import React from "react";
import styled from "styled-components";

const SearchInputWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  border: 1px solid #212121;
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

const SearchButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #212121;
  border-radius: 0.25rem;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  svg * {
    fill: #212121;
  }

  :disabled {
    cursor: default;
  }
`;

export interface IProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}
const SearchInput: React.FC<IProps> = ({
  value,
  onChange,
  onSubmit,
}: IProps): JSX.Element => {
  return (
    <SearchInputWrapper>
      <Input
        type="text"
        placeholder="Type title to search"
        onKeyDown={(e): void => {
          if (e.key === "Enter" && value && onSubmit) {
            onSubmit(value);
          }
        }}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          const { value } = e.target;
          onChange(value);
        }}
      />
      <SearchButton
        disabled={!value}
        onClick={() => {
          onSubmit && value && onSubmit(value);
        }}
      >
        <svg
          aria-hidden={true}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={"0 0 64 64"}
        >
          <path
            d="M41,37.4l11.9,11.9l-3.6,3.6L37.4,41v-1.9l-0.7-0.7c-2.8,2.5-6.2,3.7-10.1,3.7c-4.3,0-8-1.5-11-4.5
        c-3-3-4.5-6.6-4.5-11c0-4.3,1.5-8,4.5-11c3-3,6.7-4.5,11-4.5c4.3,0,8,1.5,11,4.5c3,3,4.5,6.7,4.5,11c0,3.9-1.2,7.2-3.7,10.1l0.7,0.7
        H41z M19.1,34.3c2.1,2.1,4.6,3.1,7.6,3.1c3,0,5.5-1,7.6-3.1c2.1-2.1,3.1-4.6,3.1-7.6c0-3-1-5.5-3.1-7.6c-2.1-2.1-4.6-3.1-7.6-3.1
        c-3,0-5.5,1-7.6,3.1c-2.1,2.1-3.1,4.6-3.1,7.6C15.9,29.7,17,32.2,19.1,34.3z"
          />
        </svg>
      </SearchButton>
    </SearchInputWrapper>
  );
};

export default SearchInput;
