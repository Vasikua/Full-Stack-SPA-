import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../Summary/Summary";
import ExpenceView from "../ExpenceView/ExpenceView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../Contex/Contex";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    allTransaction,
    totalIncome,
    totalExpence,
    setTotalIncome,
    setTotalExpence,
  } = useContext(GlobalContext);
  useEffect(() => {
    let income = 0;
    let expence = 0;
    allTransaction.forEach(item => {
      item.type === "income"
        ? (income += parseFloat(item.amount))
        : (expence += parseFloat(item.amount));
    });
    setTotalExpence(expence);
    setTotalIncome(income);
  }, [allTransaction]);

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
      <Summary
        totalExpence={totalExpence}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-evently"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenceView
          data={allTransaction.filter(item => item.type === "income")}
          type={"income"}
        />
        <ExpenceView
          data={allTransaction.filter(item => item.type === "expence")}
          type={"expence"}
        />
      </Flex>
    </Flex>
  );
}
