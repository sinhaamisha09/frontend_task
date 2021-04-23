import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InboxIcon from '@material-ui/icons/Inbox';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Task" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RateReviewIcon />
      </ListItemIcon>
      <ListItemText primary="To be reviewed" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved tasks</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="All" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Active" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Completed" />
    </ListItem>
  </div>
);