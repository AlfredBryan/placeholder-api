import { Box } from "@chakra-ui/react";
import React from "react";

import { BaseButton, BaseInput, CenterModal } from "../../components";
import { useEditPost } from "../../hooks";

const EditModal = ({ data, isOpen, setIsOpen, update }) => {
  const { isLoading, state, handleChange, onSubmit, checkProperties } =
    useEditPost(data);

  return (
    <CenterModal
      title="Edit Placeholder Post"
      showModal={isOpen}
      setShowModal={setIsOpen}
    >
      <Box>
        <BaseInput
          name="title"
          value={state?.title}
          onChange={handleChange}
          label="Title"
        />
      </Box>
      <Box mt="10px" mb="40px">
        <BaseInput
          name="body"
          value={state?.body}
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
        Update
      </BaseButton>
    </CenterModal>
  );
};

export default EditModal;
