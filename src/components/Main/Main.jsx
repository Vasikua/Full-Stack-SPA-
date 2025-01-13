import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../Summary/Summary";
import ExpenceView from "../ExpenceView/ExpenceView";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Button onClick={onOpen} color={"black"} bg={"blue.300"} ml={"4"}>
            Add new transaction
          </Button>
        </Flex>
      </Flex>
      <Summary />
      <Flex
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evently"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenceView />
        <ExpenceView />
      </Flex>
    </Flex>
  );
}
