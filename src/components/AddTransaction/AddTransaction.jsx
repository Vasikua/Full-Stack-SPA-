import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export default function AddTransaction({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description </FormLabel>
              <Input
                name="description"
                type="text"
                placeholder="Enter transaction descrioption"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Emount </FormLabel>
              <Input
                name="amount"
                type="number"
                placeholder="Enter transaction amount"
              />
            </FormControl>
            <RadioGroup mt="5">
              <Radio value="income" colorScheme="blue" name="type">
                Income
              </Radio>
              <Radio value="expense" colorScheme="red" name="type">
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
