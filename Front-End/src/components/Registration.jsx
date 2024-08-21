
import React from 'react';
import { useForm } from 'react-hook-form';
import './Registration.css'; 

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = async (data) => {
    try{
        let response = await fetch("http://localhost:3001/register",{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
       },
       body:JSON.stringify(data),
        })
        alert("Form Submitted Successfully");
    } catch(err){
        console.log("Some error occured",err);
    }   
  };

  return (
    <div className="form-container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            {...register('firstName', { required: 'First Name is required' })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength:{
                value:15,
                message:"Password must not be longer than 15 characters"
              }
              
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: value => value === watch('password') || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="male"
                {...register('gender', { required: 'Please select your gender' })}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                {...register('gender', { required: 'Please select your gender' })}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="other"
                {...register('gender', { required: 'Please select your gender' })}
              />
              Other
            </label>
          </div>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        
        <div className="form-group">
          <label>Hobbies</label>
          <div className="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                value="reading" 
                {...register('hobbies', { required: 'Please select at least one hobby' })}
              />
              Reading
            </label>
            <label>
              <input 
                type="checkbox" 
                value="traveling" 
                {...register('hobbies', { required: 'Please select at least one hobby' })}
              />
              Traveling
            </label>
            <label>
              <input 
                type="checkbox" 
                value="gaming" 
                {...register('hobbies', { required: 'Please select at least one hobby' })}
              />
              Gaming
            </label>
          </div>
          {errors.hobbies && <p>{errors.hobbies.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
 
export default RegistrationForm;
