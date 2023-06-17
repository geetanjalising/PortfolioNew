import React from 'react'
import "./Project.css"
import Todo from "./todo.png"
import Puzzle from "./Puzzle.png"
import Android from "./android.jpeg"
import Ecommerce from "./e-commerce.png"

const Project = () => {
  return (
    <div className='bd'>
     <div className='heading'><h1>Work/{">"}</h1></div> 
      <div className='project'> 
      
        <div style={{ backgroundImage: `url(${Todo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
          <div className='info'>
            <h1>Todo-App</h1>
            <hr></hr>
            <p>Todo-app is used to maintain our day-to-day tasks by Adding, Deleting, Editing, and Storing tasks that we have to do.</p>
            <button><a href='https://geetanjalising.github.io/To-Do-App/'>Preview</a></button>
          </div>

        </div>
        <div style={{ backgroundImage: `url(${Puzzle})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
          
            <div className='info'>
              <h1>PuzzleGame</h1>
              <hr></hr>
              <p>Solve puzzles to search the treasure. A complete MERN Website.</p>
              <button><a href='https://6484c8586225df13b43f7347--eloquent-phoenix-51c879.netlify.app/'>Preview</a></button>
         
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Android})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}  className='project1'>
          <div className='info'>
            <h1>Music App</h1>
            <p>Oragnise your all music of your device at one place with attractive and easy to use interface.</p>
            <button><a href="https://drive.google.com/file/d/1SPfZkUww_oLKBH7JudrXErNWbvZn55gb/view?usp=drivesdk">Preview</a></button>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${Ecommerce})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='project1'>
          <div className='info'>
            <h1>Amazon Clone</h1>
            <p>It is a complete amazon clone made using MERN stack.</p>
            <button><a href="https://github.com/geetanjalising/e-commerce">Preview</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
