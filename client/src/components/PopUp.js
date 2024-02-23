import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const PopUp = (props) => {
  const { btn, error, body, response, title } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      {response && response.success ? (
        <>
          <Modal.Body>
            <h5>Deleted successfully</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                props.onHide();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Body>
            <Form.Label htmlFor="schema-delete-password">Password</Form.Label>
            {body}
            {error && <p>{error.msg}</p>}
          </Modal.Body>
          <Modal.Footer>
            {btn}
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default PopUp;
