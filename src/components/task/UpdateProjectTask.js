import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import { addProjectTask } from "../../actions/taskActions";

function UpdateProjectTask({ addProjectTask, task, errors }) {
  const initialState = {
    modal: false,
  };
  const [state, setState] = useState(initialState);
  const [newTask, setNewTask] = useState({
    id: "",
    acceptanceCriteria: "",
    status: "",
    summary: "",
  });

  useEffect(() => {
    setNewTask({
      id: !task.id ? "" : task.id,
      summary: !task.summary ? "" : task.summary,
      status: !task.status ? "" : task.status,
      acceptanceCriteria: !task.acceptanceCriteria
        ? ""
        : task.acceptanceCriteria,
    });
  }, [task]);

  const { acceptanceCriteria, summary, status } = newTask;

  const onChange = (e) => {
    e.preventDefault();
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addProjectTask(newTask);
  };

  const toggle = () => {
    setState({
      modal: !state.modal,
    });
  };

  return (
    <div className="btn btn-primary" onClick={toggle}>
      <Fragment>
        <i className="fas fa-edit" />
        <span className="ml-2">Update Task</span>
      </Fragment>

      <Modal isOpen={state.modal} toggle={toggle} style={{ color: "#333" }}>
        <ModalHeader toggle={toggle}>Update Project Task</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Input
                type="textarea"
                name="summary"
                placeholder="What is your next task?"
                value={summary}
                onChange={onChange}
                className={classnames({
                  "is-invalid": errors.summary,
                })}
              ></Input>
              {errors.summary && (
                <div classnames="invalid-feedback">{errors.summary}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="acceptanceCriteria"
                placeholder="Acceptance Criteria"
                value={acceptanceCriteria}
                onChange={onChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <select
                type="text"
                name="status"
                placeholder="What is your next task?"
                onChange={onChange}
                value={status}
                className="form-control-lg"
              >
                <option value="">Select Status</option>
                <option value="TO_DO">TO DO</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">FINISHED</option>
              </select>
            </FormGroup>{" "}
            <Button
              type="submit"
              className="btn btn-primary m-2"
              style={{ float: "right" }}
            >
              Update task{" "}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

UpdateProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.tasks.errors,
});

const mapActionsToProps = {
  addProjectTask,
};

export default connect(mapStateToProps, mapActionsToProps)(UpdateProjectTask);
