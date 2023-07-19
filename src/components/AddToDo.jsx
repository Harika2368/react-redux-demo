import React from 'react'
import { useState } from 'react'
import { Card, Container, Form, Row,Col, Button } from 'react-bootstrap'
import  DisplayCount  from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import {v4 as uuidv4} from 'uuid'

const AddToDo = ({addTodo}) => {
    const [todo,setTodo]=useState({
        title:'',
        description:'',
        id:''
    })
    const handleSubmit=e=>{
        e.preventDefault()
        //add todo in store here
        addTodo({...todo,id:v4()})
        console.log(todo)
        setTodo({
            title:'',
            description:'',
            id:''
        })
    }
    return (
        <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add ToDo Here</h3>
                            <DisplayCount/>
                            {/* form */}
                            <Form>
                                {/* title */}
                                <Form.Group>
                                    <Form.Label>ToDo Title</Form.Label>
                                    <Form.Control type='text' placeholder='Enter here' value={todo.title} onChange={e=>setTodo({...todo,title:e.target.value})}/>
                                </Form.Group>
                                {/* description */}
                                <Form.Group>
                                    <Form.Label>ToDo Description</Form.Label>
                                    <Form.Control as={'textarea'} type='text' placeholder='Enter here'
                                    value={todo.description} onChange={e=>setTodo({...todo,description:e.target.value})}/>
                                </Form.Group>
                                <Container className='text-center mt-3'>
                                    <Button type='submit' variant='primary' onClick={handleSubmit}>
                                        Add ToDO
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps=(state)=>({})

const mapDispatchToProps = (dispatch)=>(
    {
    addTodo:todo=>{dispatch(addTodo(todo))}
    }
    )
export default connect(mapStateToProps,mapDispatchToProps) (AddToDo)