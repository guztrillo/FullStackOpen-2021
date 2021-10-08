import React from 'react'
import { Course } from './Course'

export const Courses = ({ courses }) => {
     return (
          <div>
               {
                    courses.map(course =>
                         <Course name={course.name} parts={course.parts} key={course.id}/>
                    )
               }
          </div>
     )
}
