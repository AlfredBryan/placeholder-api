import { Button } from "@chakra-ui/react";
import React from "react";

const BaseButton = ({ id, children, onClick, type, ...rest }) => {
  return (
    <Button
      className="btn"
      id={id}
      display="flex"
      h="4.2rem"
      justifyContent="center"
      alignItems="center"
      color="#fff"
      w="100%"
      borderRadius="3px"
      type={type}
      fontSize="1.4rem"
      bg="brand.blue"
      onClick={onClick}
      _hover={{ opacity: "0.8" }}
      _disabled={{
        backgroundColor: "#939AA3",
        cursor: "not-allowed",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export { BaseButton };
