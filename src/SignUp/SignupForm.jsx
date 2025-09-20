import React from 'react';
import { useState } from 'react';
import logo from '../images/employee-profile_783192-4-removebg-preview.png';
import './SignupForm.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const SignupForm=()=>{
    const [msg,setMsg]=useState("");
    const { watch,register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit=async(data)=>{
            console.log(data);
            const {name,email,password}=data
            try{
            const res =await axios.post('http://localhost:4000/signup',{name,email,password});
            
                setTimeout(()=>{
                    setMsg(res.data.message);
                },3000)
            }catch(err){
                const errorMessage = err.response?.data?.error || 'Unknown error';
      setMsg(errorMessage);

      setTimeout(() => setMsg(''), 5000);
                
                
            }
            reset();
            
        }
           

    return(
        <>
        <div className='msg'>{msg}</div>

         
        

        <div className="main">
        <div className="main1">
            <h2>Register ur account</h2>
            <br/>
            <p>A quick way to access 
                the content </p>
        </div>
        <div className="main3">
            <img src={logo}/>
        </div>
        
        <div className="main2">
            <p>Signup now</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="main21">
                    <label>Full name</label>
                    <br/>
                <input type="text" {...register("name",{
                    required:"NAme is required"
                })}/>
                {errors.name && <p>{errors.name.message}</p>}
                 
                </div>
                <div className="main22">
                    <label>Email</label><br/>
                <input type="email"{...register("email",{
                    required:"Email is required",
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:"Invalid email address"
                    }
                })}/>
                {errors.email && <p>{errors.email.message}</p>}
                </div>
                
                <div className="main23">
                    <label>Password</label><br/>
                <input type="password" {...register("password",{
                    required:"Password is required",
                    minLength:{
                        value:6,
                        message:"Password must be at least 6 characters"
                    }
                })}/>
                {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="main24">
                    <label>Confirm password</label><br/>
                <input type="password" {...register("confirmPassword",{
                    required:"Confirm password is required",
                    validate:(value)=>{
                        if(value !== watch("password")){
                            return "Passwords do not match"
                        }
                    }

                    
                })}/>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                </div>
                <div className="main25">
                    <button type="submit" >Submit</button>

                </div>
                
            </form>
        </div>
    </div>
      </>
    )
}
export default SignupForm;