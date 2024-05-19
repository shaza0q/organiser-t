import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import {CSS} from "@dnd-kit/utilities"
import Dropdown from 'react-bootstrap/Dropdown';


export const CardModule = ({id, title}) => {

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition, 
        transform: CSS.Transform.toString(transform)
    }


  return (
    <div ref={setNodeRef}
    {...attributes}
    {...listeners}
    style={style}
    className="module">
        <span className="text">{title}</span>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item >Delete</Dropdown.Item>
            <Dropdown.Item >Edit</Dropdown.Item>  
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}
