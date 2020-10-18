import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Checkbox from '@material-ui/core/Checkbox';
import Check from "@material-ui/icons/Check";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
//import { useState } from 'react';


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Task() {
  const classes = useStyles();

  const [state, setState] = React.useState({
      identificador: 0,
      descripcion: '',
      fecha_creacion:'2019-05-24T10:30',
      vigente: true
  });

  const handleChange = (event) => {
    setState({...state, [event.target.id]: event.target.value});
  };

  const handleAddTarea = () => {    
    const {identificador, descripcion, fecha_creacion, vigente} = state;
    console.log(identificador, descripcion, fecha_creacion, vigente);
  };
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Crear Tarea</h4>
              <p className={classes.cardCategoryWhite}>Complete los datos de la tarea</p>
            </CardHeader>
            <CardBody>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                    <CustomInput
                      labelText="Identificador (disabled)"
                      id="identificador"
                      formControlProps={{
                        fullwidth: "true"
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <TextField
                        required
                        onChange={handleChange}
                        id="descripcion"
                        label="Descripcion"
                        placeholder='Descripcion'                        
                    />                    
                  </GridItem>               
                </GridContainer>
              <GridContainer>              
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="fecha_creacion"
                      label="Fecha Hora Creacion"
                      type="datetime-local"
                      onChange={handleChange}
                      defaultValue="2019-05-24T10:30"
                      className={classes.textField}
                      InputLabelProps={{
                        fullwidth: "true"
                      }}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                  <FormControlLabel
                     value="Vigente"
                     control={
                       <Checkbox  id="vigente"                         
                         defaultChecked={true}
                         onChange={handleChange}
                         checkedIcon={<Check className={classes.checkedIcon} />}
                         icon={<Check className={classes.uncheckedIcon} />}/>
                     }
                     label="Vigente"
                     labelPlacement="end"
                     classes={{
                      checked: classes.checked,
                      root: classes.root
                    }}
                   />                 
                </GridItem>
              </GridContainer>                           
            </CardBody>
            <CardFooter>
              <Button color="primary"
              onClick={handleAddTarea}
              startIcon={<SaveIcon />}
              >Crear Tarea</Button>
            </CardFooter>
          </Card>
        </GridItem>        
      </GridContainer>
    </div>
  );
}
