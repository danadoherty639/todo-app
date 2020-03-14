import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export const AddTaskModal = ({ addTask, modalShow, closeModal, taskNameRef, taskDescriptionRef}) => {
    return(
        <Modal show={modalShow} size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="text-center">Create a task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="flex flex-col">
                <div className="flex flex-row">
                    <div className="col-xs-2">
                        <input name="taskName" type="text" placeholder="Enter Task Name" ref={taskNameRef} required />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="col-xs-2">
                        <input name="taskDescription" type="text"  placeholder="Enter Task Description"  ref={taskDescriptionRef} required />
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col">
                        <Button variant="primary" onClick={() => addTask(taskNameRef, taskDescriptionRef)}>
                        Save Changes
                        </Button>
                    </div>
                </div>
              </div>
            </Modal.Body>
          <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                  Close
                </Button>
          </Modal.Footer>
        </Modal>
    )
}