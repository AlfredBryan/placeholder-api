import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";
import ReactPaginate from "react-paginate";

import EditModal from "./EditModal";
import CreatePost from "./CreatePost";
import { useAllPosts } from "../../hooks";
import { Spinner } from "../../hoc";

export const Posts = () => {
  const {
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
  } = useAllPosts();

  return (
    <Box>
      {isLoading ? (
        <Flex align="center" justify="center" h="80vh" w="100%">
          <Spinner />
        </Flex>
      ) : (
        <>
          <Box
            textAlign="center"
            p="10px 10px 10px"
            w="100%"
            bg="#3E7EEE"
            fontSize="20px"
            fontWeight="bold"
          >
            <Flex justify="space-around" align="center">
              <Text color="#fff"> Placeholder Posts</Text>
              <Button
                _hover={{ opacity: "0.8" }}
                border="2px solid #fff"
                color="#fff"
                bg="#3E7EEE"
                onClick={() => setIsCreateOpen(true)}
              >
                Add Post
              </Button>
            </Flex>
          </Box>
          <Box p="20px 30px 20px">
            <Flex flexWrap="wrap" gap="12px" justify="space-between">
              {currentItems?.map((post, i) => (
                <Box
                  key={i}
                  w={{ base: "100%", lg: "30%" }}
                  bg="#fff"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  p="5px 30px 5px"
                  borderRadius="10px"
                >
                  <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="16px"
                    wordBreak="break-all"
                    textDecor="underline"
                  >
                    {post.title}
                  </Text>
                  <Text mt="40px" mb="10px">
                    {post.body}
                  </Text>
                  <Flex mb="10px" justify="flex-end">
                    <Flex align="center">
                      <EditIcon
                        onClick={() => handleEdit(post)}
                        cursor="pointer"
                        color="#3E7EEE"
                      />

                      <DeleteIcon
                        onClick={() => deletePost(post)}
                        cursor="pointer"
                        ml="10px"
                        color="red"
                      />
                    </Flex>
                  </Flex>
                </Box>
              ))}
            </Flex>
            <Flex mt="40px" w="100%" justify="center">
              <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                containerClassName={"pagination"}
                renderOnZeroPageCount={null}
              />
            </Flex>
          </Box>
          <EditModal
            data={editData}
            update={getPosts}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <CreatePost
            update={getPosts}
            isOpen={isCreateOpen}
            setIsOpen={setIsCreateOpen}
          />
        </>
      )}
    </Box>
  );
};
