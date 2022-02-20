import { Box } from "@chakra-ui/react";
import React from "react";

import { CenterModal, BaseInput, BaseButton } from "../../components";
import { useCreatePost } from "../../hooks";

const CreatePost = ({ isOpen, setIsOpen, update }) => {
  const { isLoading, state, handleChange, onSubmit, checkProperties } =
    useCreatePost();

  return (
    <CenterModal
      title="Create new post"
      showModal={isOpen}
      setShowModal={setIsOpen}
    >
      <Box>
        <BaseInput
          name="title"
          value={state.title}
          onChange={handleChange}
          label="Title"
        />
      </Box>
      <Box mt="10px" mb="40px">
        <BaseInput
          name="body"
          value={state.body}
          onChange={handleChange}
          label="Description"
          isTextArea={true}
        />
      </Box>
      <BaseButton
        mb="10px"
        isLoading={isLoading}
        onClick={() => onSubmit(setIsOpen, update)}
        isDisabled={checkProperties(state)}
        type="submit"
      >
        Create
      </BaseButton>
    </CenterModal>
  );
};

export default CreatePost;
