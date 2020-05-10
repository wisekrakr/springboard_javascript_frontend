import React, { Fragment, Component } from "react";
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

class AddProjectTask extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      errors: {},
      summary: "",
      acceptanceCriteria: "",
      status: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newProjectTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
    };
    this.props.addProjectTask(newProjectTask);
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="btn btn-primary" onClick={this.toggle}>
        <Fragment>
          <i className="fas fa-plus" />
          <span className="ml-2">New Task</span>
        </Fragment>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          style={{ color: "#333" }}
          backdrop="static"
        >
          <ModalHeader toggle={this.toggle}>New Project Task</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="textarea"
                  name="summary"
                  placeholder="What is your next task?"
                  onChange={this.onChange}
                  // value={this.state.summary}
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
                  // value={this.state.acceptanceCriteria}
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <select
                  type="text"
                  name="status"
                  placeholder="What is your next task?"
                  onChange={this.onChange}
                  // value={this.state.status}
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
                Add new task{" "}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.tasks.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
