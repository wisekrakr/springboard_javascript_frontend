import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container } from "reactstrap";

import ProjectTaskItem from "./task/ProjectTaskItem";
import { getAllProjectTasks } from "../actions/taskActions";

class ProjectBoard extends Component {
  componentDidMount() {
    this.props.getAllProjectTasks();
  }
  render() {
    const { tasks } = this.props;

    let BoardContent;
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    const BoardAlgorithm = (tasks) => {
      if (tasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No project tasks on this board
          </div>
        );
      } else {
        const pts = tasks.map((task) => (
          <ProjectTaskItem key={task.id} task={task} />
        ));

        for (let i = 0; i < pts.length; i++) {
          if (pts[i].props.task.status === "TO_DO") {
            todoItems.push(pts[i]);
          }
          if (pts[i].props.task.status === "IN_PROGRESS") {
            inProgressItems.push(pts[i]);
          }
          if (pts[i].props.task.status === "DONE") {
            doneItems.push(pts[i]);
          }
        }

        return (
          <Container>
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-secondary text-white">
                    <h3>TO DO</h3>
                  </div>
                </div>
                {todoItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-primary text-white">
                    <h3>In Progress</h3>
                  </div>
                </div>
                {inProgressItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-success text-white">
                    <h3>Done</h3>
                  </div>
                </div>
                {doneItems}
              </div>
            </div>
          </Container>
        );
      }
    };

    BoardContent = BoardAlgorithm(tasks);

    return <Container>{BoardContent}</Container>;
  }
}

ProjectBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  getAllProjectTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, { getAllProjectTasks })(ProjectBoard);
