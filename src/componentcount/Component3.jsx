import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component3 = () => {
  const codesnip = {
    csharp: `using System;
    class Program
    {
        static void Main(string[] args)
        {
            // Create and start two threads concurrently
            Thread thread1 = new Thread(DoWork1);
            Thread thread2 = new Thread(DoWork2);
            thread1.Start();
            thread2.Start();
    
            // Wait for both threads to finish
            thread1.Join();
            thread2.Join();
    
            Console.WriteLine("Both threads have finished their work.");
        }
    
        static void DoWork1()
        {
            // Simulate some work being done
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Thread 1 is working...");
                Thread.Sleep(1000); // Sleep for 1 second
            }
        }
    
        static void DoWork2()
        {
            // Simulate some work being done
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Thread 2 is working...");
                Thread.Sleep(1500); // Sleep for 1.5 seconds
            }
        }
    }
    
    `}
    const answer = {
      csharp: `\ using System;
      using System.Threading;
      
      class Program
      {
          static void Main(string[] args)
          {
              // Create and start two threads concurrently
              Thread thread1 = new Thread(DoWork1);
              Thread thread2 = new Thread(DoWork2);
              thread1.Start();
              thread2.Start();
      
              // Wait for both threads to finish
              thread1.Join();
              thread2.Join();
      
              Console.WriteLine("Both threads have finished their work.");
          }
      
          static void DoWork1()
          {
              // Simulate some work being done
              for (int i = 0; i < 5; i++)
              {
                  Console.WriteLine("Thread 1 is working...");
                  Thread.Sleep(1000); // Sleep for 1 second
              }
          }
      
          static void DoWork2()
          {
              // Simulate some work being done
              for (int i = 0; i < 5; i++)
              {
                  Console.WriteLine("Thread 2 is working...");
                  Thread.Sleep(1500); // Sleep for 1.5 seconds
              }
          }
      }
      
      `}
  return (
    <>
    <Maincom  title={"Concurrency "}
    game={"https://concoren.vercel.app/"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/7090d5b71c1de1c0f9/81e4627c5552f9e0'}
     steps={['Concurrency and parallelism are important concepts in C# (and programming in general) for improving performance and scalability by leveraging multiple threads or processes to execute tasks concurrently. While they are related concepts, they address different aspects of concurrent programming',
     ' use the using System.Threading Concurrency refers to the ability of a system to handle multiple tasks or processes simultaneously, making progress on more than one task during the same period.',
     'In C#, concurrency is typically achieved using multiple threads. Threads allow different parts of a program to execute independently, allowing for tasks to be performed concurrently.',
     'Parallelism refers to the simultaneous execution of multiple tasks or processes to improve performance and reduce execution time.',
     ]}
     answer={answer}
     codesnip={codesnip}
     />
    </>
  )
}
