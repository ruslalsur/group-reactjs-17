import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Container, Grid, Button, Paper, Box} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import {Header} from '../header'
import './profile.sass'

export class Profile extends React.Component {
   profileUpdateHandler = () => {
      const {author, profileUpdate} = this.props
      const newName = prompt('Измените имя: ', author)

      if (newName) {
         profileUpdate(newName)
      }
   }

   render() {
      const {author} = this.props

      return (
         <Paper elevation={3}>
            <Box className="content">
               <Grid container alignItems="baseline" spacing={3}>
                  <Grid item xs={12}>
                     <Typography variant="h4" color="primary">Профиль автора по имени {author}</Typography>
                  </Grid>
                  <Grid item zeroMinWidth xs={3}>
                  <Typography variant="subtitle1" color="primary">Автор творит под именем: </Typography>
                  </Grid>
                  <Grid item zeroMinWidth xs={3}>
                  <Typography variant="h5" color="textSecondary">{author}</Typography>
                  </Grid>
               </Grid>

               <Grid container alignItems="baseline" spacing={3}>
                  <Grid item xs={3} />
                  <Grid item xs={3}>
                     <Button
                        onClick={this.profileUpdateHandler}
                        variant="contained"
                        color="secondary"
                        startIcon={<EditIcon />}>
                           изменить
                     </Button>
                  </Grid>
               </Grid>
            </Box>
         </Paper>
      )
   }
}
