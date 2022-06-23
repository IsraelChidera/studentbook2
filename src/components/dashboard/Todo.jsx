import React, {useState, useEffect} from 'react';
import { Form, Input } from 'antd';
import Button from '../UI/Button';
import {useNavigate} from 'react-router-dom';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { collection, addDoc, getDocs, query, where} from "firebase/firestore"; 
import db from '../../firebase';

const Todo = ({click}) => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        todotag: '',
        todotask: ''
    })

    const handleChange = (e) => {
        setInputs((prevInput) => {
            return {...prevInput, [e.target.name]: e.target.value}
        })
    }

    
    const onFinish = async(values) => {
        console.log('Success:', values);

        try {
            const docRef = await addDoc(collection(db, "todos"), inputs);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        setInputs({
            todotag: '',
            todotask: ''
        })
        console.log(inputs)
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [todos, setTodos] = useState([]);

    const FetchData = async() => {
        let unsubscribed = false;

         getDocs(collection(db, "todos"))
            .then((querySnapshot) => {
                if(unsubscribed) return;

                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));

                setTodos(newData);
                console.log(newData)
                console.log(todos)
            })
            .catch((err) => {
                if(unsubscribed) return;
                console.error("failed to retrieve data", err);
            })

            return () => unsubscribed  = true;
    }

    // const onFetchData = async() => {
    //     const querySnapshot = await getDocs(collection(db, "todos"));
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         setTodos([doc.data()])
    //         console.log(todos)
    //     });

    // }

    useEffect(() => {
        FetchData()
        // const querySnapshot =  getDocs(collection(db, "todos"));
        //     querySnapshot.map((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
    // });
    // onFetchData()
    }, [])
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
                        Todo
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
                                    label="Todo tag"
                                    name="todotag"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please select your todo tag!',
                                    },
                                    ]}
                                    className='mb-4'
                                >                                   
                                    <select
                                        className="bg-gray-50 border border-primary text-secondary 
                                            text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                            block w-full p-2.5 dark:bg-white dark:border-primary 
                                            dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        name="todotag"  
                                    >
                                        <option value="Education">
                                            Select tag
                                        </option>
                                        <option value="Education">
                                            Education
                                        </option>
                                        <option value="Entertainment">
                                            Entertainment
                                        </option>
                                        <option value="Sports">
                                            Sports
                                        </option>
                                        <option value="Finances">
                                            Finances
                                        </option>
                                        <option value="Coding and designs">
                                            Coding and designs
                                        </option>
                                        <option value="Work stuff">
                                            Work stuff
                                        </option>
                                        <option value="Others">
                                            Others
                                        </option>
                                    </select>
                                </Form.Item>                                

                                <Form.Item
                                    name="todotask"
                                    label="Todo task"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your task!',
                                    },
                                    ]}
                                    hasFeedback
                                >   
                                    <textarea
                                        rows={4} 
                                        className="bg-gray-50  border border-primary text-secondary 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-primary 
                                        block w-full p-2.5 dark:bg-white dark:border-primary 
                                        dark:placeholder-dark dark:text-secondary" 
                                        onChange={handleChange}
                                        name="todotask" 
                                    >                                        
                                    </textarea>                                                                    
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
                                        Add todo
                                    </Button>
                                </Form.Item>

                            
                            </Form>
                        </Box>

                        <Box className='mt-10'>
                            <Box className='bg-white md:mt-0 mt-8 p-4  h-full w-full m-2'>
                                {/* Task one   */}
                                {todos?.map((todo,idx) => (
                                        <Box key={idx}>
                                            <Text>
                                                {todo.todotask}
                                            </Text>
                                            <Text>
                                                {todo.todotag}
                                            </Text>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Box>                        

                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Todo