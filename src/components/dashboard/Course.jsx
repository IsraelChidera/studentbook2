import React, {useState} from 'react';
import { Checkbox, Form, Input, TextArea } from 'antd';
import Button from '../UI/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {auth} from '../../firebase';
import Box from '../UI/Box'
import Text from '../UI/Text'

const Course = ({click}) => {
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
        <Box 
            className='dbgrid bg-gray pt-10 '
            // className='fixed inset-0 bg-white bg-opacity-75 transition-opacity'
        >
            <Box 
                className={click? 'ml-56 w-full pb-10 px-10': 'px-10 lg:ml-56 w-full pb-10'} 
            >
                <Box className=''>
                    <Text className='text-4xl font-semibold mb-8'>
                        Courses
                    </Text>

                    <Box className=''>
                        <Box>
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
                                // onValuesChange={onFormLayoutChange}
                                // disabled={componentDisabled}
                            >
                                <Form.Item
                                    label="Course title"
                                    name="Course title"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your course title!',
                                    },
                                    ]}
                                    className='mb-6'
                                >
                                    <Input 
                                        className="bg-gray-50 border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        type="text"
                                        name="username"  
                                        value={inputs.username}                          
                                    />
                                </Form.Item>
                                
                                <Form.Item
                                    label="Course unit"
                                    name="courseunit"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your course unit!',
                                    },
                                    ]}
                                    className='mb-6'
                                >
                                    <Input 
                                        className="bg-gray-50 border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        type="text"
                                        name="username"  
                                        value={inputs.username}                          
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Course code"
                                    name="coursecode"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your course code!',
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
                                        value={inputs.username}                          
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
                                        Add Todo
                                    </Button>
                                </Form.Item>

                            
                            </Form>
                        </Box>

                        <Box className='mt-10 text-center'>
                            <Box className='p-8 mx-0 mb-20 md:m-4 mt-4 rounded-3xl bg-white'>
                                <Box className='text-center'>
                                    <Text className='text-lg font-semibold'>
                                        Registered courses
                                    </Text>                                    
                                </Box>

                                <Box className='mt-6 md:grid md:grid-cols-3 border-lightgray border-b'>
                                    <Text className='mb-4 font-semibold'>
                                        Title
                                    </Text>

                                    <Text className='mb-4 font-semibold'>
                                        Unit
                                    </Text>

                                    <Text className='mb-4 font-semibold'>
                                        Code
                                    </Text>
                                </Box>

                                <Box className='pt-4 md:grid md:grid-cols-3 
                                    border-lightgray border-b'
                                >
                                    <Text className='mb-4'>
                                        Mathematics
                                    </Text>

                                    <Text className='mb-4'>
                                        Mathematics
                                    </Text>

                                    <Text className='mb-4'>
                                        Mathematics
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Course