import {FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader,ModalFooter, ModalOverlay, Input, Button} from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalContext } from "../../context";


export default function AddForm({onClose, isOpen}){

    const {formData, setFormData, handleFormSubmit} = useContext(GlobalContext);

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] :event.target.value,
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        handleFormSubmit(formData)
    }

    return (<Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit} autoComplete="off">
            <ModalOverlay>

            </ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    Add new meal
                </ModalHeader>
                <ModalCloseButton>

                </ModalCloseButton>
                <ModalBody>
                    <FormControl>
                        <FormLabel >Name</FormLabel>
                        <Input placeholder="Enter element name" name="Name" type="text" onChange={handleFormChange}/>
                    </FormControl>
                    <br></br>
                    <FormControl>
                        <FormLabel >Calories</FormLabel>
                        <Input placeholder="Enter calories" name="cals" type="number" onChange={handleFormChange}/>
                    </FormControl>
                    <br></br>
                    <FormControl>
                        <FormLabel >Protein (g)</FormLabel>
                        <Input placeholder="Enter protein grams" name="prote" type="number" onChange={handleFormChange}/>
                    </FormControl>
                    <br></br>
                    <FormControl>
                        <FormLabel >Carbs (g)</FormLabel>
                        <Input placeholder="Enter carbs grams" name="carbs" type="number" onChange={handleFormChange}/>
                    </FormControl>
                    <br></br>
                    <FormControl>
                        <FormLabel >Fat (g)</FormLabel>
                        <Input placeholder="Enter fat grams" name="fat" type="number" onChange={handleFormChange}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'4'} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onClose} type="submit">
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
    );
}