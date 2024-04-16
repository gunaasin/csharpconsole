import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'

export const Component2 = () => {
  const [runCodeData] = useState(null);
const codesnip = {
    csharp: `using System;

    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Code that may throw an exception
                 // Attempting to divide by zero
                 // This line will not be reached
            }
            catch (DivideByZeroException ex)
            {
                // Handling the exception
                
            
            
            {
                // Cleanup code (optional)
                Console.WriteLine("End of program");
            }
        }
    
        static int Divide(int numerator, int denominator)
        {
            if (denominator == 0)
            {
                // If the denominator is zero, throw a DivideByZeroException
                throw new DivideByZeroException("Cannot divide by zero");
            }
            return numerator / denominator;
        }
    }
    
`}

    const answer = {
      csharp: `using System;

      class Program
      {
          static void Main(string[] args)
          {
              try
              {
                  // Code that may throw an exception
                  int result = Divide(10, 0); // Attempting to divide by zero
                  Console.WriteLine("Result: " + result); // This line will not be reached
              }
              catch (DivideByZeroException ex)
              {
                  // Handling the exception
                  Console.WriteLine("Error: " + ex.Message);
              }
              finally
              {
                  // Cleanup code (optional)
                  Console.WriteLine("End of program");
              }
          }
      
          static int Divide(int numerator, int denominator)
          {
              if (denominator == 0)
              {
                  // If the denominator is zero, throw a DivideByZeroException
                  throw new DivideByZeroException("Cannot divide by zero");
              }
              return numerator / denominator;
          }
      }
      
      `}
  return (
    <>
      <Maincom title={"Scope"}

       game={'https://gunaasin.github.io/dataintegration/ '}
       url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/_Ss42Vb1SU4'}
       
        steps={['Exception handling is a programming concept used to manage unexpected or exceptional conditions that may occur during the execution of a program. These conditions, often referred to as exceptions, can range from runtime errors to special situations that require special handling, such as user input errors, file I/O errors, or network failures.',
        'We have a Divide method that attempts to divide two integers. If the denominator is zero, a DivideByZeroException is thrown.',
        'In the Main method, we call the Divide method with a denominator of zero, which triggers the exception.',
       ' We use a try-catch block to catch the DivideByZeroException and handle it by printing an error message.',
        'The finally block is used to execute cleanup code, such as closing files or releasing resources. In this example, we simply print "End of program".',
      
        ]}
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
