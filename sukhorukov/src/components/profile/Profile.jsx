import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@material-ui/core'

export class Profile extends React.Component {
   render() {
      const {id, name} = this.props

      return (
         <>
            <div>
               <h1>Профиль пользователя</h1>
               <h4>Присвоеный идентификатор: {id}</h4>
               <h4>Имя автора: {name}</h4>
            </div>

            <div>
               <Link to="/">
                  <Box>назад</Box>
               </Link>
            </div>
         </>
      )
   }
}
