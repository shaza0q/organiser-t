import '../Styling/OrganiserHomeStyle.css'
// import { GrAdd } from "react-icons/gr";
import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Model from 'react-modal' 
import {DndContext, closestCorners} from "@dnd-kit/core"
import { Column } from './Column';

const customStyles = {
    content: {
      width:"400px",
      height:"300px",
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -10%)',
    },
  };

export const OrganiserHome = () => {

    const [visibleModule, setVisibleModule] = useState(false)
    const [value, setValue] = useState('')
    const [curModules, setModules] = useState([
        {id: 1, title: "chp 1"},
        {id: 2, title: "chp 2"},
    ])

    
    function handleInputChange(e){

    }

    function handleAddModule(e){
        e.preventDefault()
        if(value.trim() !== ""){
            setModules(m => [...m, {id: curModules.length+1, value}]);
            setVisibleModule(false)
            setValue('')
        }

        console.log(curModules)
    }

    function deleteModule(index){

        const updatedModule = curModules.filter((_, i) => i !== index)
        setModules(updatedModule)
    }

    const handleDragEnd = (e) => {
        const {active, over} = e

        if(active) return

    }

    
    return(
        <div>
            <div class="headTab">
                <h3>Course Builder</h3>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Add
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setVisibleModule(true)}>Create Module</Dropdown.Item>
                        <Dropdown.Item >Add a link</Dropdown.Item>
                        <Dropdown.Item >Upload</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Model isOpen={visibleModule} 
                onRequestClose={()=>setVisibleModule(false)}
                style={customStyles}>
                    <form className="addModule" onSubmit={handleAddModule}>
                        <input type="text" className='module-input' placeholder='add Module' 
                        onChange={(e) => setValue(e.target.value)}/>
                        <button type='submit' className='module-submit-btn'>Add Module</button>
                    
                    </form>
                    <button onClick={()=>setVisibleModule(false)}> Cancel</button>
                </Model>

            </div>

            <div className="modules_showning">
                <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                    <Column modules={curModules}/>
                </DndContext>
                
                
                {/* <ol>
                    {curModules.map((module, index) => (
                        <li key={index}>
                            <span className="text">{module}</span>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => deleteModule(index)}>Delete</Dropdown.Item>
                                <Dropdown.Item onClick={()=> dragUp(index)}>Edit</Dropdown.Item>
                                
                            </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    ))}
                </ol> */}
            </div>


        </div>
    )
}

export default OrganiserHome