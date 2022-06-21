import React, {useState} from 'react';
import { Checkbox, Form, Input, Upload, } from 'antd';
import Button from '../UI/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {auth} from '../../firebase';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const Report = ({click}) => {
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

    const normFile = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e?.fileList;
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
                        Reports
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
                                        name="upload"
                                        label="Upload"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}    
                                        className='font-semibold'                                   
                                    >
                                        <Upload 
                                            name="logo" 
                                            action="/upload.do" 
                                            listType="picture"                                            
                                        >
                                            <Button 
                                                icon={<UploadOutlined />}
                                                className='bg-secondary mt-4'    
                                            >
                                                Click to upload
                                            </Button>
                                        </Upload>
                                    </Form.Item>
                            </Form>
                        </Box>

                        <Box className='mt-10'>
                            <Box className='bg-white md:mt-0 mt-8 p-4  h-full w-full m-2'>
                                <Text className='text-sm'>
                                    No file added yet    
                                </Text> 
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Report