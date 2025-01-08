import { Flex, Heading, Button } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={"12"}>
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expence Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button color={"black"} bg={"blue.300"} ml={"4"}>
            Add new transaction
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
