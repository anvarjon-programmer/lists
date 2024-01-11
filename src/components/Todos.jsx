import React, { useState } from 'react'
import { Button, Modal } from 'reactstrap'
import Modals from './Modal'

export default function Todo(){
    const [modalVisible,setModalVisble] = useState(false);
    const [text,setText] = useState()
    const [data,setData] = useState([
        {id: 1, header: 'Open',title:"task1",status:'open'},
        {id: 2, header: 'Pending',title:"task1",status:'Pending'},
        {id: 3, header: 'Payload',title:"task1",status:'Payload'},
        {id: 4, header: 'Progress',title:"task1",status:'Progress'},

    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target[0].value;
        let status = e.target[1].value;
        let payload = {
            id: data.length + 1,
            title,
            status
        };
        data.push({ ...payload });
        setData([...data]);
        setModalVisble(false);
    }
    
    const deleteItem=(id)=>{
        let filtered_arr = data.filter((item) =>item.id !== id)
        setData([...filtered_arr])
    }
    const editItem =(item)=>{
        setText(item)
        setModalVisble(true)
    }
    const toggle = () =>{
        setModalVisble(false)
        setText('')
    }
    return (
        <div className='container'>
            <Modals open={modalVisible} toggle={()=>setModalVisble(false)} handleSubmit={handleSubmit} text={text}/>
          <div className='row m-20'>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                     <h1>Open</h1>
                    </div>
                        {
                            data.filter(item=> item.status == 'open').map((item,index) =>{
                              return <div className="card-body d-flex align-items-center gap-3">
                                <span>{item.title}</span>
                                <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                                <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                              </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={()=>setModalVisble(true)}>Add User</button>
                        </div>
                </div>
            </div>
            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                     <h1>Pending</h1>
                    </div>
                        {
                            data.filter(item=> item.status == 'pending').map((item,index) =>{
                              return <div className="card-body d-flex align-items-center gap-3">
                                <span>{item.title}</span>
                                <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                                <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                              </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success'onClick={()=>setModalVisble(true)}>Add User</button>
                        </div>
                </div>
            </div>


            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                     <h1>payload</h1>
                    </div>
                        {
                            data.filter(item=> item.status == 'payload').map((item,index) =>{
                              return <div className="card-body d-flex align-items-center gap-3">
                                <span>{item.title}</span>
                                <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                                <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                              </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={()=>setModalVisble(true)}>Add User</button>
                        </div>
                </div>
            </div>


            <div className="col-3">
                <div className="card">
                    <div className="card-header">
                     <h1>Progress</h1>
                    </div>
                        {
                            data.filter(item=> item.status == 'progress').map((item,index) =>{
                              return <div className="card-body d-flex align-items-center gap-3">
                                <span>{item.title}</span>
                                <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                                <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                              </div>
                            })
                        }
                        <div className="card-footer">
                            <button className='btn btn-success' onClick={()=>setModalVisble(true)}>Add User</button>
                        </div>
                </div>
            </div>
          </div>
        </div>
    )
}