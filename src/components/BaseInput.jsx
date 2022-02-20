import { Box, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";

export const BaseInput = ({
  label,
  id,
  width,
  isTextArea,
  onChange,
  ...rest
}) => {
  return (
    <Box>
      <Text
        fontSize="1.3rem"
        color="rgba(0, 0, 0, 0.5)"
        as="label"
        htmlFor={id}
      >
        {label}
      </Text>
      {isTextArea ? (
        <Textarea
          focusBorderColor="none"
          fontSize="1.3rem"
          border="none"
          borderBottom="1px solid rgba(0, 0, 0, 0.25);"
          height="30px"
          resize="none"
          onChange={onChange}
          {...rest}
          px="1.6rem"
          h="25px"
          _focus={{ borderBottom: "2px solid #3E7EEE" }}
        />
      ) : (
        <Input
          focusBorderColor="none"
          fontSize="1.3rem"
          border="none"
          borderBottom="1px solid rgba(0, 0, 0, 0.25);"
          w={width || "100%"}
          px="1.6rem"
          onChange={onChange}
          h="25px"
          _focus={{ borderBottom: "2px solid #3E7EEE" }}
          {...rest}
          className="inputType"
        />
      )}
    </Box>
  );
};
