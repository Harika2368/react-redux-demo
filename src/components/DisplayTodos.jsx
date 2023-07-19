import React from 'react'
import { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap'
import  DisplayCount  from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/todo'

const DisplayTodos = ({todos,deleteTodo}) => {
    // const [todos,setTodos]=useState([])
    
    return (
        <Container>
            <Row>
                <Card className='shadow sm-3 mt-3'>
                    <Card.Body>
                        <h3>All todos are here</h3>
                        <DisplayCount/>
                        <ListGroup>
                            {
                                todos.map((todo,index)=>
                                <ListGroup.Item key={index}>
                                    <h4>{todo.title}</h4>
                                    <p>{todo.description}</p>
                                    <Button onClick={e=>deleteTodo(todo.id)} variant='danger' size='small'>Delete</Button>
                                </ListGroup.Item>)
                            }
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {todos:state.todos}
}
const mapDispatchToProps = (dispatch)=>(
    {
        deleteTodo:id=>(dispatch(deleteTodo(id)))
    }
    )
export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodos)
