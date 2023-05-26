import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TimeEntryModal = (props) => {
  const [date, setDate] = useState(new Date().toISOString().substr(0,10));
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');
  const [show, setShow] = useState(false); // State for controlling modal visibility

  const handleShow = () => setShow(true); // Function to show the modal
  const handleClose = () => setShow(false); // Function to hide the modal

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = { date, duration, category, notes };
    props.onSubmit(entry);
    handleClose();
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Time Entry
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Time Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration</Form.Label>
              <Form.Control type="number" min="0" placeholder="Enter duration in hours" value={duration} onChange={e => setDuration(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" value={category} onChange={e => setCategory(e.target.value)} required>
                <option value="">Select a category</option>
                <option value="job_search">Job Search</option>
                <option value="applications">Applications</option>
                <option value="interviews">Interviews</option>
                <option value="follow_up">Follow Up</option>
                <option value="training">Training</option>
                <option value="research">Research</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TimeEntryModal;
