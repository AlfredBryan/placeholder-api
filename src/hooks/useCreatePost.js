import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { axios } from "../utils";
export const useCreatePost = () => {
  const initialState = {
    title: "",
    body: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(initialState);

  const toast = useToast();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (setIsOpen, update) => {
    setIsLoading(true);
    axios
      .post(`posts`, state)
      .then((res) => {
        if (res.status === 201) {
          toast({
            title: "Success",
            description: "Post created successfully",
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          setIsOpen(false);
          setState(initialState);
          update();
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const checkProperties = (obj) => {
    for (let key in obj) {
      if (obj[key] === "") return true;
    }
    return false;
  };

  return { isLoading, state, handleChange, onSubmit, checkProperties };
};
