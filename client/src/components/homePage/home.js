import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import {
  getDataAction,
  addDataAction,
  deleteDataAction,
} from "../../store/actions/getdata";
import FormDailog from "./addTodoModel";
class Home extends Component {
  state = {
    open: false,
  };
  componentDidMount = () => {
    this.props.getDataAction();
  };
  addTodo = (e) => {
    this.props.addDataAction();
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  delete = (id) => {
    this.props.deleteDataAction({ id });
    window.location.reload();
  };
  render() {
    const { data } = this.props;

    return (
      <Container>
        <Grid md={12} xs={12} sm={12} item>
          <h1>ToDo List</h1>
          <Button
            variant="contained"
            style={{ marginRight: 8, background: "red" }}
            onClick={this.addTodo}
          >
            <Typography style={{ color: "#fff" }}>Add</Typography>
          </Button>
          {data &&
            data.data &&
            data.data.map((row, i) => (
              <Grid
                md={12}
                sm={12}
                xs={12}
                item
                style={{ display: "flex" }}
                key={i}
              >
                <Grid md={6} sm={6} xs={6} item>
                  <Typography>{row.name}</Typography>
                </Grid>
                <Grid md={6} sm={6} xs={6} item style={{ margin: 8 }}>
                  <Button
                    variant="contained"
                    onClick={() => this.delete(row._id)}
                  >
                    <Typography>delete</Typography>
                  </Button>
                </Grid>
              </Grid>
            ))}
          <FormDailog open={this.state.open} close={this.handleClose} />
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = ({
  getDataReducer,
  addDataReducer,
  deleteDataReducer,
}) => {
  return {
    data: getDataReducer,
    addData: addDataReducer,
    deleteData: deleteDataReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getDataAction,
    addDataAction,
    deleteDataAction,
  })(Home)
);
