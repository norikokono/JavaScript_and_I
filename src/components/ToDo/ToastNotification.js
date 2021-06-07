/* https://www.geeksforgeeks.org/reactjs-toast-notification/
npm add react-toastify */

// import { color } from 'd3-color';
import React from 'react';
  
// Importing toastify module
import {toast} from 'react-toastify'; 
  
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 

 // toast-configuration method, 
 // it is compulsory method.
toast.configure()
  
// This is main function
function ToastNotification(){
    // function which is called when 
    // button is clicked
    const notify_1 = ()=>{ 
  
        // Calling toast method by passing string
        toast('Hello') 
    }
    
    const notify_2 = ()=>{ 
        toast('Hello 4', 
           {position: toast.POSITION.BOTTOM_LEFT})
        toast('Hello 6', 
           {position: toast.POSITION.BOTTOM_RIGHT})
        toast('Hello 5', 
           {position: toast.POSITION.BOTTOM_CENTER})
        toast('Hello 1', 
           {position: toast.POSITION.TOP_LEFT})
        toast('Hello 3', 
           {position: toast.POSITION.TOP_RIGHT})
        toast('Hello 2', 
           {position: toast.POSITION.TOP_CENTER})
    }

    const notify_3 = ()=>{ 
        // inbuilt-notification
        toast.warning('Danger')
        // inbuilt-notification
        toast.success('Successful')
        // inbuilt-notification
        toast.info('Information')
        // inbuilt-notification
        toast.error('Runtime error')
        // default notification
        toast('Hello')       
    }

    const notify_4 = ()=>{ 
        // Set to 10sec
        toast.warning('Danger', {autoClose:10000})
        // Set to 3sec
        toast.success('Successful', {autoClose:3000})
        // User have to close it
        toast.info('Information', {autoClose:false})
        // Set to 15sec
        toast.error('Runtime error', { position: toast.POSITION.BOTTOM_LEFT, autoClose:15000})
        // Default
        toast('Hello')
    }

    const buttonStyle = {
        margin: '7px',
        border: '5px solid beige',
        borderRadius: '5px',
        background: 'orange',
        fontFamily: 'Arial, Helvetica, sansSerif',
        fontSize: '23px',
        color: 'white'
      };
   
    return (
        <div className="ToastNotification">
            <h4> Toastify Notifications</h4>
            <button style={buttonStyle} onClick={notify_1}>Click Me!</button><br/>
            <button style={buttonStyle} onClick={notify_2}>Click Me!</button><br/>
            <button style={buttonStyle} onClick={notify_3}>Click Me!</button><br/>
            <button style={buttonStyle} onClick={notify_4}>Click Me!</button>
        </div>
    );
}
   
export default ToastNotification;