import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Tasks from "components/Tasks/Tasks.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from 'react-router-dom';


import {tareas} from "variables/general.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";



const useStyles = makeStyles(styles);
const MyLink = React.forwardRef((props, ref) => <Link to="/admin/task" {...props} />);

export default function Dashboard() {
  const classes = useStyles();

  fetch('http://localhost:8080/v1/tareas/')
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Tareas</h4>
              <p className={classes.cardCategoryWhite}>
                Listado de Tareas
              </p>      
            </CardHeader>
            <CardBody>
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={tareas}
              />
            </CardBody>
            <CardFooter>
              <Button component={MyLink} color="primary">Agregar Tarea</Button>
            </CardFooter>
          </Card>
        </GridItem>     
      </GridContainer>
    </div>
  );
}
