import React from 'react'
import {Link} from 'react-router-dom'
import {Button, IconButton} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

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
         <>
            <div>
               <h1>Профиль пользователя</h1>
               <h2>
                  Имя автора: {name}
                  <span>
                     <IconButton
                        onClick={this.changeNameClickHandler}
                        color="primary"
                        aria-label="edit">
                           <EditIcon />
                     </IconButton>
                  </span>
               </h2>
               <h4>Присвоеный идентификатор: {id}</h4>
            </div>

            <hr />

            <div>
               <Link to="/">
                  <Button variant="contained" color="primary" size="small">назад</Button>
               </Link>
            </div>
         </>
      )
   }
}
