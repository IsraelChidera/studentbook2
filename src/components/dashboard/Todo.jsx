import React, {useState, useEffect} from 'react';
import { Form, Input } from 'antd';
import Button from '../UI/Button';
import {useNavigate} from 'react-router-dom';
import Box from '../UI/Box';
import Text from '../UI/Text';
import { collection, serverTimestamp, addDoc, getDocs, query, where, getDoc, orderBy, doc, onSnapshot} from "firebase/firestore"; 
import db from '../../firebase';
import {auth} from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Todo = ({click, ids}) => {
    const navigate = useNavigate();
    console.log("ids", ids)

    const [inputs, setInputs] = useState({
        todotag: '',
        todotask: '',        
    })

    const handleChange = (e) => {
        setInputs((prevInput) => {
            return {...prevInput, [e.target.name]: e.target.value}
        })
    }

    
    const onFinish = async(values) => {
        console.log('Success:', values);

        try {
            const docRef = await addDoc(collection(db, "todos").doc(ids), inputs);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        setInputs({
            todotag: '',
            todotask: ''
        })        
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    // const FetchData = async() => {
    //     let unsubscribed = false;

    //     const usersRef = collection(db, "todos");
    //     const user = doc(usersRef, ids);

    //     getDoc(user).then((doc) => {
    //         setTodos(doc.data().todos);
    //     })

        

    //     //  getDocs(collection(db, "todos"))
    //     //     .then((querySnapshot) => {
    //     //         if(unsubscribed) return;

    //     //         const newData = querySnapshot.docs
    //     //             .map((doc) => ({...doc.data(), id: doc.id}));

    //     //         setTodos(newData);
    //     //         setLoading(false);
    //     //         console.log(newData)
    //     //         console.log(todos)
                
    //     //     })
    //     //     .catch((err) => {
    //     //         if(unsubscribed) return;
    //     //         console.error("failed to retrieve data", err);
    //     //     })

    //         return () => unsubscribed  = true;
    // }

    const fetchData = async() => {

        const colRef = collection(db, "todos");
        // const user = doc(colRef, myUser.uid);
        const q = query(colRef, orderBy("todotask"));
        
        

        onSnapshot(q, (snapshot) => {            
            const newData = snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id}));
            setTodos(newData);
            console.log("todos" );
        })
    }

    const check = () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              const snapshot = await getDoc(doc(db, "todos", user.uid))
              console.log("wait", snapshot.data())
            }
          });
    }

    // const myUser = auth.currentUser;
    // console.log(myUser)
    // const usersRef = collection(db, "todos");
    // const user = doc(usersRef, myUser.uid);

    useEffect(() => {
        check();


        fetchData();
        
    }, [        
    
    ])

    const handleDelete =() => {
        console.log("yesss")
    }

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
                                        <option value="select tag">
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
                                        <Box 
                                            key={idx}
                                            className='relative bg-secondary
                                            text-white p-4 my-6 rounded-lg
                                             '
                                        >
                                            <Box className='pt-4 lg:flex justify-between items-center'>
                                                <Text className='text-lg mb-6'>
                                                    {todo.todotask}
                                                </Text>
                                                <Text className='text-sm'>
                                                    {todo.todotag}
                                                </Text>
                                            </Box>
                                            <Box 
                                                className='absolute top-0 right-2 
                                                cursor-pointer '
                                                
                                            >
                                                <i onClick={handleDelete} className="fa fa-times" aria-hidden="true"></i>
                                            </Box>
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