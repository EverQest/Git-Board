import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import githubReducer, { moveIssue } from '../features/github/githubSlice';
import { Flex } from 'antd';
import "./index.css"

interface BoardProps {
  issues: Issue[];
}

interface Issue {
  id: number;
  title: string;
  state: string;
  assignee?: string;
}

const Board: React.FC<BoardProps> = ({ issues }) => {
  const dispatch = useDispatch();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    dispatch(
      moveIssue({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
        destinationState: result.destination.droppableId,
      })
    );
  };

  return (
  <Flex className='font' gap="large" align="center" justify='space-around'>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>ToDo</h2>
            {issues
              .filter((issue) => issue.state === 'open' && !issue.assignee)
              .map((issue, index) => (
                <Draggable key={issue.id} draggableId={issue.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {issue.title}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todo">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>In Progress</h2>
            {issues
              .filter((issue) => issue.state === 'open' && !issue.assignee)
              .map((issue, index) => (
                <Draggable key={issue.id} draggableId={issue.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {issue.title}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="todo">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <h2>Done</h2>
            {issues
              .filter((issue) => issue.state === 'open' && !issue.assignee)
              .map((issue, index) => (
                <Draggable key={issue.id} draggableId={issue.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {issue.title}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </Flex>
  );
};

export default Board;