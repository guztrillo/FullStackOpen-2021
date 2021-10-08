import React from 'react'

export const Notification = ({ message, success }) => {
     const colorBase = success ? '#57C656' : '#ED5245';

     const notificationStyle = {
          fontSize: '1.5rem',
          backgroundColor: '#E9E9E9',
          border: `5px solid ${colorBase}`,
          color: `${colorBase}`,
          textAlign: 'center',
          margin: '1rem auto'
     }

     return (
          <>
               {
                    message
                    ?
                    <div style={notificationStyle}>
                         {message}
                    </div>
                    : null
               }
          </>

     )
}
