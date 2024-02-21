import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/esm/Spinner';

const PopUp = (props) => {
  const { deleteFunc, error, loading, password, response } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete API</Modal.Title>
      </Modal.Header>
      {response && response.success ? (
        <>
          <Modal.Body>
            <h5>API deleted successfully</h5>
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
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="schema-delete-password"
              aria-describedby="schema-delete-password"
              onChange={(e) => {
                password(e.target.value);
              }}
            />
            <Form.Text id="schema-delete-password" muted>
              Once the deletion is confirmed, your API, database entries and
              endpoints will be permanently deleted
            </Form.Text>
            {error && <p>{error.msg}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                deleteFunc();
              }}
            >
              {loading ? (
                <>
                  {' '}
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="loading-spinner"
                  />
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                'Delete'
              )}
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default PopUp;
