import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import { CardModule } from './CardModule'

export const Column = ({modules}) => {
  return (
    <div  className="column">
        <SortableContext items={modules} strategy={verticalListSortingStrategy}>
            {modules.map((module) => (
                <CardModule key={module.id} id={module.id} title={module.title}/>
            ))}
        </SortableContext>
    
    </div>
  )
}
