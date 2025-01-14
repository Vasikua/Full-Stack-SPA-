import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import TransactionChartSummary from "../Chart/Chart";
import AddTransaction from "../AddTransaction/AddTransaction";

export default function Summary({
  onClose,
  isOpen,
  totalIncome,
  totalExpence,
}) {
  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}>
            Balance is :${totalIncome - totalExpence}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.500"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading>{totalIncome}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Heading>{totalExpence}</Heading>
              <Text color={"gray.600"}>Total Expence</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>
            <TransactionChartSummary
              income={totalIncome}
              expence={totalExpence}
            />
          </Heading>
        </Box>
      </Flex>
      <AddTransaction onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}
