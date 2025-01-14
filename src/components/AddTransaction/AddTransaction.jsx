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
import { useContext } from "react";
import { GlobalContext } from "../Contex/Contex";

export default function AddTransaction({ isOpen, onClose }) {
  const { formData, setFormData, value, setValue } = useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }
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
              <Radio
                checked={FormData.type === "income"}
                value="income"
                colorScheme="blue"
                name="type"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                checked={FormData.type === "expense"}
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
              >
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
