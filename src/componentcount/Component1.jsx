import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
   csharp:`using System;
   using System.Collections.Generic;
   using System.Threading.Tasks;
   
   class Program
   {
       static async Task Main(string[] args)
       {
           try
           {
               // Call the GetDataAsync method asynchronously
               
   
               // Output the retrieved data
               foreach (string item in data)
               {
                   Console.WriteLine(item);
               }
           }
           catch (Exception ex)
           {
               // Handle any exceptions
              
           }
       }
   
       static async Task<List<string>> GetDataAsync()
       {
           // Simulate asynchronous data retrieval with a delay
            // Simulate a 2-second delay
   
           // Sample data to return
           List<string> dataList = new List<string>
           {
               "John",
               "Alice",
               "Bob",
               "Emily"
           };
   
           // Return the retrieved data
           return dataList;
       }
   }
   
   `
  }
  const answer = {
    csharp: `using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    
    class Program
    {
        static async Task Main(string[] args)
        {
            try
            {
                // Call the GetDataAsync method asynchronously
                List<string> data = await GetDataAsync();
    
                // Output the retrieved data
                foreach (string item in data)
                {
                    Console.WriteLine(item);
                }
            }
            catch (Exception ex)
            {
                // Handle any exceptions
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    
        static async Task<List<string>> GetDataAsync()
        {
            // Simulate asynchronous data retrieval with a delay
            await Task.Delay(2000); // Simulate a 2-second delay
    
            // Sample data to return
            List<string> dataList = new List<string>
            {
                "John",
                "Alice",
                "Bob",
                "Emily"
            };
    
            // Return the retrieved data
            return dataList;
        }
    }
    `}

  return (
    <>
      
      <Maincom

        game={'https://gunaasin.github.io/firegunfire/'}
        url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/iyLqwyFL0Zc'}
        
       
        steps={[
          'Quest System: In the game, there are various quests that players can undertake, each involving different objectives and rewards. Asynchronous programming can be used to manage quest progress and completion asynchronously. When a player accepts a quest, the game initiates an asynchronous task to track the player progress towards completing the quest. This task runs in the background, periodically checking if the player has fulfilled the quest requirements',
          'Asynchronous programming in C# revolves around the concept of performing tasks concurrently without blocking the main thread of execution. This is crucial for scenarios where an application needs to perform I/O-bound or CPU-bound operations without causing the user interface to freeze or become unresponsive.',
          'Step 1: Call the GetDataAsync method asynchronously.',
          'Step 2: Handle any exceptions Console.WriteLine($"An error occurred: {ex.Message}");',
          'Step 3: Simulate asynchronous data retrieval with a delay',
          'Step 4: Assign the data    "John","Alice","Bob","Emily"',
          
          'What is Asynchronous Programming?',

          ` Asynchronous programming is a programming paradigm that allows tasks to be executed independently of the main program flow. In other words, instead of waiting for a task to complete before moving on to the next one, asynchronous programming enables tasks to be executed concurrently, improving efficiency and responsiveness in applications.`
        ]}
        title={"Asynchronous Programming"}
        answer={answer}
        codesnip={codesnip}

      />

    </>
  )
}


export const ChildComponent = ({ runCodeData}) => {
  
  return (
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
      
    </div>
  )
}


