import React from 'react'
import { Content } from './Content'
import { Header } from './Header'

export const Course = ({name, parts}) => {
     return (
          <div>
               <Header name={name} />
               <Content parts={parts} />
          </div>
     )
}
