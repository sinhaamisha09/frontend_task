import React, { useState, useRef }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
      },
  }));

    



export default function AddItemForm( {addTask} ) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [inputText, setInputText] = useState('');
    const inputElement = useRef();
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      // Dispatch action that adds new task
      addTask(inputText);
  
    }


  return (
    <div>
        <Button variant="contained" className={classes.absolute} color="secondary" onClick={handleClickOpen}>
              Add Task
          </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        <DialogContent>          
        <div>
            <TextField
            id="taskName"
            label="Task Name"
            style={{ margin: 8 }}
            placeholder="Task Name"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            label="Description"
            id="description"
            style={{ margin: 8 }}
            placeholder="Description"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            label="Duration"
            id="duration"
            // defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
            />
            <TextField
            label="ToTal Points"
            id="totalPoints"
            // defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            />
            <TextField
            label="Worker ID"
            id="workerId"
            // defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
            />
      </div>
        </DialogContent>
        <DialogActions component="form"
      onSubmit={onSubmit} >
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}