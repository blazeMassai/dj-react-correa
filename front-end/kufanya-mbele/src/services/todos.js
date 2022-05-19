import axios from 'axios';



    // getAll=(token)=> ({
    //     axios.defaults.headers.common["Authorization"] = "Token" + token;
    //     return axios.get('http://localhost:8000/api/todos')
    // });


    const getAll=(token)=>{
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('http://localhost:8000/api/todos/');
    }

    const createTodo=(data, token)=>{
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("http://localhost:8000/api/todos/", data);
    };

    const updateTodo=(id, data, token)=>{
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todos/${id}`, data);
    };

    const constdeleteTodo=(id, token)=>{
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/todos/${id}`);
    };

    const completeTodo =(id, token)=>{
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/todos/${id}/complete`);
    };

    const login =(data)=>{
        return axios.post("http://localhost:8000/api/login/", data);
    };

    // signup(data){
    //     return axios.post("http://localhost:8000/api/signup/", data);
    // };



export  {getAll, createTodo, updateTodo, constdeleteTodo, completeTodo};