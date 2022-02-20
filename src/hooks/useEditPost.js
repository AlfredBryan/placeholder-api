import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { axios } from "../utils";

export const useEditPost = (data) => {
  const initialState = {
    title: "",
    body: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState(initialState);

  const toast = useToast();

  useEffect(() => {
    setState({ title: data?.title, body: data?.body });
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (setIsOpen, update) => {
    setIsLoading(true);
    axios
      .put(`posts/${data.id}`, state)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Success",
            description: "Post edited successfully",
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          setIsOpen(false);
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
