import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { axios } from "../utils";
export const useAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [editData, setEditData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const getPosts = () => {
    setIsLoading(true);
    axios
      .get("posts")
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const itemsPerPage = 9;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset, posts]);

  useEffect(() => {
    getPosts();
  }, []);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  const handleEdit = (data) => {
    setIsOpen(true);
    setEditData(data);
  };

  const deletePost = (id) => {
    axios
      .delete(`posts/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Success",
            description: "Post deleted successfully",
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          getPosts();
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    currentItems,
    pageCount,
    editData,
    isLoading,
    isOpen,
    setIsOpen,
    isCreateOpen,
    setIsCreateOpen,
    getPosts,
    handlePageClick,
    handleEdit,
    deletePost,
  };
};
