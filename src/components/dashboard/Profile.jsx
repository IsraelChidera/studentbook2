import React, {useState} from 'react';
import { Checkbox, Form, Input, TextArea } from 'antd';
import Button from '../UI/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {auth} from '../../firebase';
import Box from '../UI/Box'
import Text from '../UI/Text'

const Profile = ({click}) => {

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

    // const [componentDisabled, setComponentDisabled] = useState(true);

    // const onFormLayoutChange = ({ disabled }) => {
    //   setComponentDisabled(disabled);
    // };
  return (
    <>
        <Box 
            className='dbgrid bg-gray pt-10 '
            // className='fixed inset-0 bg-white bg-opacity-75 transition-opacity'
        >
            <Box className={click? 'ml-56 w-full pb-10 ': 'lg:ml-56 w-full pb-10'} >
                <Box className='mx-auto w-9/12 mt-10 p-4'>
                    <Text className='text-4xl font-semibold mb-8'>
                        Profile
                    </Text>

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
                                value={inputs.username}                          
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
                                Update
                            </Button>
                        </Form.Item>

                        
                    </Form>
                </Box>
            </Box>
            
        </Box>

        {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  )
}

export default Profile