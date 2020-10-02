import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@material-ui/core'

export class Profile extends React.Component {
   render() {
   const name = this.props.match.params.name
   
      return (
         <>
            <div>
               <h1>{name}</h1>
               <p>Здесь, {name}, когда-нибудь, будет реализован твой профиль!</p>
            </div>

            <div>
               <Link to="/">
                  <Box>на главную</Box>
               </Link>
            </div>
         </>
      )
   }
}