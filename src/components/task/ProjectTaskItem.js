import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Card, CardHeader, CardBody, Button } from "reactstrap";

import UpdateProjectTask from "./UpdateProjectTask";
import { deleteProjectTask } from "../../actions/taskActions";

class ProjectTaskItem extends Component {
  onDelete = (id) => {
    this.props.deleteProjectTask(id);
  };
  render() {
    const { summary, acceptanceCriteria, id } = this.props.task;
    return (
      <Card className="mb-1 bg-light">
        <CardHeader className="text-primary">ID: {id}</CardHeader>
        <CardBody className="card-body bg-light">
          <h5 className="card-title">{summary}</h5>
          <p className="card-text text-truncate ">{acceptanceCriteria}</p>
          <UpdateProjectTask task={this.props.task} />

          <Button
            className="btn btn-danger ml-4"
            onClick={this.onDelete.bind(this, id)}
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    );
  }
}

ProjectTaskItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.task,
});

const mapActionsToProps = { deleteProjectTask };

export default connect(mapStateToProps, mapActionsToProps)(ProjectTaskItem);
