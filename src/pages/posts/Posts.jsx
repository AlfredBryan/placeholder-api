import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

import Profits from "../../assets/profits.png";
import Salary from "../../assets/salary.png";
import Referral from "../../assets/connections.png";
import Section from "../../assets/Section.png";
import Nasa from "../../assets/icons/NASA.png";
import Netflix from "../../assets/icons/Netflix.png";
import Pin from "../../assets/icons/Pinterest.png";
import Spot from "../../assets/icons/Spotify.png";
import Vod from "../../assets/icons/Vodafone.png";
import AboutImg from "../../assets/nowimg.png";

export const Posts = () => {
  return (
    <>
      <Flex align={"center"} width={"100%"} height={"80px"} bg="#0065a3">
        <Flex pl="4rem" align={"center"}>
          <Text fontSize={"50px"} color={"#fff"} fontWeight={"900"}>
            SEI
          </Text>
          <Box ml="5px" fontWeight={"bold"} color={"#fff"}>
            <Text>New ways</Text>
            <Text>New answers</Text>
          </Box>
        </Flex>
      </Flex>
      <Box
        w={"100%"}
        h="65rem"
        bgSize={"cover"}
        bgImage={`url(
          ${Section})`}
      >
        <Box pl={{ base: "0rem", lg: "3rem" }} pt="1rem" pr="3rem">
          <Box p="2rem">
            <Text
              fontWeight={"900"}
              fontSize={{ base: "20px", lg: "25px" }}
              color={"#fff"}
            >
              Sun Equity Inventories network marketing has developed a
              reputation for mixed results. We're the fastest-growing affiliate
              platform, empowering partnership that drives results.
            </Text>
          </Box>
          <Flex
            direction={{ base: "column", lg: "row" }}
            mt={{ base: "2rem", lg: "20rem" }}
            ml={{ base: "2rem", lg: "0rem" }}
            gap="20px"
          >
            <Button
              _hover={{
                bg: "transparent",
                border: "1px solid #fff",
                color: "#fff",
              }}
              color="#0065a3"
              fontSize={"15px"}
              w={{ base: "100%", lg: "200px" }}
              height="50px"
              bg="white"
              border={"1px solid #0065a3"}
              borderRadius="10px"
            >
              Increase online sales
            </Button>
            <Button
              _hover={{
                bg: "transparent",
                border: "1px solid #fff",
                color: "#fff",
              }}
              color="#0065a3"
              fontSize={"15px"}
              w={{ base: "100%", lg: "200px" }}
              height="50px"
              bg="white"
              border={"1px solid #0065a3"}
              borderRadius="10px"
            >
              Monetize
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box
        pr={{ base: "2rem", lg: "10rem" }}
        pl={{ base: "2rem", lg: "10rem" }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify={"space-between"}
          w="100%"
          mt="2rem"
          gap="20px"
        >
          <Box w={{ base: "100%", lg: "30%" }}>
            <Image w="50px" h="50px" src={Profits} />
            <Text mt="1rem" mb="2rem" fontSize={"25px"} color={"#0065a3"}>
              COMMISSION
            </Text>
            <Text>
              One of the major appeals of our marketing agreements is that the
              participant's income is tied directly to the amount of packages
              that the participant can participate,The details spelling out our
              company's sales commissions and fees are a vital component of the
              agreement. With SEI, the participant earns sales commissions not
              only on their investment, but on those packages by the other
              participants he recruits into the business.
            </Text>
            <Button
              mt="2rem"
              height={"50px"}
              width="80%"
              fontSize={"18px"}
              color="#fff"
              bg="#0065a3"
              borderRadius={"8px"}
              _hover={{
                border: "1px solid #0065a3",
                bg: "#fff",
                color: "#0065a3",
              }}
            >
              Grow your brand's reach
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "30%" }}>
            <Image w="50px" h="50px" src={Referral} />
            <Text mt="1rem" mb="2rem" fontSize={"25px"} color={"#0065a3"}>
              REFFERAL AND RECRUITMENT
            </Text>
            <Text>
              The core principle of SEI marketing lies in how well whic our
              networkers can attract new recruits into our company. The
              participant must find motivated individuals capable of
              communicating the company's message and convincing others to join
              and invest in the company's packages/plans. The agreement should
              also cover the rules regarding the recruitment and referral of new
              affiliate participant . The agreement will also show the
              commission rates that the primary investors earns from the
              recruitment or referral of his affiliate members.
            </Text>
            <Button
              mt="2rem"
              height={"50px"}
              width="80%"
              fontSize={"18px"}
              color="#fff"
              bg="#0065a3"
              borderRadius={"8px"}
              _hover={{
                border: "1px solid #0065a3",
                bg: "#fff",
                color: "#0065a3",
              }}
            >
              Grow your connection
            </Button>
          </Box>
          <Box w={{ base: "100%", lg: "30%" }}>
            <Image w="50px" h="50px" src={Salary} />
            <Text mt="1rem" mb="2rem" fontSize={"25px"} color={"#0065a3"}>
              COLLECTION
            </Text>
            <Text>
              Sun equity inventories also take different approaches to the
              collection of sales and income taxes. Since the participant is
              typically considered an independent contractor and not an
              employee, our company does not withhold payment, as well as
              payments toward Social Security and Medicare. The agreement should
              also address issues surrounding the collection of state and local
              sales taxes. The contract should show if either the participant or
              the SEI has the ultimate responsibility of collecting sales taxes.
            </Text>
            <Button
              mt="2rem"
              height={"50px"}
              width="80%"
              fontSize={"18px"}
              color="#fff"
              bg="#0065a3"
              borderRadius={"8px"}
              _hover={{
                border: "1px solid #0065a3",
                bg: "#fff",
                color: "#0065a3",
              }}
            >
              Cash out
            </Button>
          </Box>
        </Flex>
      </Box>
      <Marquee gradientWidth={0}>
        <Flex mt="5rem" justify={"space-around"}>
          <Image w={"10%"} h="50px" src={Nasa} />
          <Image w={"10%"} h="50px" src={Netflix} />
          <Image w={"10%"} h="50px" src={Pin} />
          <Image w={"10%"} h="50px" src={Spot} />
          <Image w={"10%"} h="50px" src={Vod} />
        </Flex>
      </Marquee>
      <Text
        mt="4rem"
        mb="4rem"
        textAlign={"center"}
        fontSize={"25px"}
        fontWeight="bold"
        color={"#0065a3"}
      >
        About Us
      </Text>
      <Flex
        align={"center"}
        pr={{ base: "2rem", lg: "10rem" }}
        pl={{ base: "2rem", lg: "10rem" }}
        w="100%"
        justify={"space-between"}
        direction={{ base: "column", lg: "row" }}
      >
        <Box w={{ base: "100%", lg: "35%" }}>
          <Text fontSize={"18px"}>
            Sun equity inventories delivers technology and investment solutions
            that connects to financial services industry. With capabilities
            across investment processing, operations, and asset management, sun
            equity works with corporations, financial institutions and
            professionals to manage change and help project assets- for growth
            today and in the future.
          </Text>
          <Text fontWeight={"bold"} fontSize={"18px"}>
            Phone Number:<Text as={"span"}>+1 469-750-3496</Text>
          </Text>
        </Box>
        <Box w={{ base: "100%", lg: "60%" }}>
          <Image height={"100%"} w="100%" src={AboutImg} />
        </Box>
      </Flex>
      <Flex
        pr="2rem"
        pl="2rem"
        justify={"space-between"}
        bg="black"
        height={"40px"}
        align="center"
        mb={{ base: "-5rem", lg: "0rem" }}
      >
        <Flex pl="4rem" align={"center"}>
          <Text fontSize={"30px"} color={"#fff"} fontWeight={"900"}>
            SEI
          </Text>
          <Box ml="5px" fontSize={"10px"} fontWeight={"bold"} color={"#fff"}>
            <Text>New ways</Text>
            <Text>New answers</Text>
          </Box>
        </Flex>
        <Flex color={"#fff"}>
          Copyright &#9400; {new Date().getFullYear()} Sun Equity Inventories
        </Flex>
      </Flex>
    </>
  );
};
