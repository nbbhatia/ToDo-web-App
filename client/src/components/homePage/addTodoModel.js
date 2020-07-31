import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addDataAction } from "../../store/actions/getdata";
class FormDialog extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    e.persist();
    this.setState({
      name: e.target.value,
    });
  };
  submit = () => {
    this.props.addDataAction({ name: this.state.name });
    this.props.close();
    window.location.reload();
  };

  render() {
    const { open, close } = this.props;

    return (
      <div>
        <Dialog open={open} onClose={close}>
          <DialogTitle id="form-dialog-title">Add Your Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              type="name"
              fullWidth
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={close} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submit} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = ({ addDataReducer }) => {
  return {
    addData: addDataReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    addDataAction,
  })(FormDialog)
);
