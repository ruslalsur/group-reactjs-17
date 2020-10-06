import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Container, Grid, Button, Paper, Box} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import {Header} from '../header'
import './profile.sass'

export class Profile extends React.Component {
   changeNameClickHandler = () => {
      const {name, handleProfileChange} = this.props
      const newName = prompt('Измените имя: ', name)

      if (newName) {
         handleProfileChange(newName)
      }
   }

   render() {
      const {id, name} = this.props

      return (
         <Container>
            <Box mb={3}>
               <Header author={name} />
            </Box>

           
            <Paper elevation={3}>
               <Box className="content">
                  <Grid container alignItems="baseline" spacing={3}>
                     <Grid item xs={12}>
                        <Typography variant="h4" color="primary">Профиль автора по имени {name}</Typography>
                     </Grid>
                     <Grid item zeroMinWidth xs={3}>
                     <Typography variant="subtitle1" color="primary">Автор творит под именем: </Typography>
                     </Grid>
                     <Grid item zeroMinWidth xs={3}>
                     <Typography variant="h5" color="textSecondary">{name}</Typography>
                     </Grid>
                  </Grid>

                  <Grid container alignItems="baseline" spacing={3}>
                     <Grid item xs={3} />
                     <Grid item xs={3}>
                        <Button
                           onClick={this.changeNameClickHandler}
                           variant="contained"
                           color="secondary"
                           startIcon={<EditIcon />}>
                              изменить
                        </Button>   
                     </Grid>
                  </Grid>
               </Box> 
            </Paper>  
         </Container>   
      )
   }
}
