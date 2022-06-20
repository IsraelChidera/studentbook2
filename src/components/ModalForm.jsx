import React, {useState} from 'react';
import { Checkbox, Form, Input } from 'antd';
import Button from './UI/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase';

const ModalForm = ({setShowModal}) => {

    
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prevInput) => {
            return {...prevInput, [e.target.name]: e.target.value}
        })
    }

    
    const onFinish = (values) => {
        console.log('Success:', values);

        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            navigate('/dashboard')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)
        });

        setInputs({
            email: '',
            password: ''
        })
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    


    
  return (
    <>
        <div className='fixed inset-0 bg-white bg-opacity-75 transition-opacity'>
            <div  
            // className="hidden overflow-y-auto overflow-x-hidden fixed top-0 
            // right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"

            className="justify-center items-center flex overflow-x-hidden  fixed inset-0 z-40 bg-black
                        overflow-y-auto outline-none focus:outline-none h-modal md:h-full mt-20"

            >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button 
                            type="button" 
                            className="absolute top-3 right-2.5 text-gray-400 
                            bg-transparent hover:bg-gray-200 hover:text-gray-900 
                            rounded-lg text-sm p-1.5 ml-auto inline-flex items-center 
                            dark:hover:bg-dark dark:hover:text-white" 
                            onClick={()=>setShowModal(false)}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                        <div className="py-10 px-6 lg:px-8">
                            <h3 className="mb-10 text-xl font-medium 
                                text-secondary"
                            >
                                Sign Up 
                            </h3>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                    ]}
                                >
                                    <Input 
                                        className="bg-gray-50 border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        type="text"
                                        name="username"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    className='my-6'
                                    rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                    ]}
                                >
                                    <Input                                     
                                        className="bg-gray-50 border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password 
                                        className="bg-gray-50 border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                    />
                                </Form.Item>
                        

                                <Form.Item
                                    wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                    }}
                                >
                                    <Button 
                                        className='bg-secondary mt-4'
                                    >
                                        Sign up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  )
}

export default ModalForm