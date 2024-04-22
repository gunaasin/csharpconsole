import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component5 = () => {
  const codesnip = {
    csharp: `\nusing System;

    public class UnsafeExample
    {
        public unsafe static void ModifyArray(int[] arr)
        {
            // Print the original array
            Console.WriteLine("Original array: " + string.Join(", ", arr));
    
            fixed (int ptr = arr)
            {
                // Use pointer arithmetic to modify array elements
                for (int i = 0; i < arr.Length; i++)
                {
                    *(ptr + i) *= 2; // Double each element of the array
                }
            }
    
            // Print the modified array
            Console.WriteLine("Modified array: " + string.Join(", ", arr));
        }
    
        public static void Main(string[] args)
        {
            int[] numbers = { 1, 2, 3, 4, 5 };
    
            // Call the unsafe method to modify the array
            ModifyArray(numbers);
        }
    }
    
    
    `}
    const answer = {
      csharp: `\nusing System;

      public class UnsafeExample
      {
          public unsafe static void ModifyArray(int[] arr)
          {
              // Print the original array
              Console.WriteLine("Original array: " + string.Join(", ", arr));
      
              fixed (int* ptr = arr)
              {
                  // Use pointer arithmetic to modify array elements
                  for (int i = 0; i < arr.Length; i++)
                  {
                      *(ptr + i) *= 2; // Double each element of the array
                  }
              }
      
              // Print the modified array
              Console.WriteLine("Modified array: " + string.Join(", ", arr));
          }
      
          public static void Main(string[] args)
          {
              int[] numbers = { 1, 2, 3, 4, 5 };
      
              // Call the unsafe method to modify the array
              ModifyArray(numbers);
          }
      }
      
      
      
      `}
  return (
    <>
    <Maincom  title={"  Unsafe Code"}
    game={"https://html-classic.itch.zone/html/2049586/Into the Web (Browser)/index.html?v=1591302212"}
    
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ac90d5b71c1de2c725/9dfba70893bdb835'}
      steps={['Unsafe code in C# allows you to bypass some of the safety mechanisms provided by the languages runtime environment, particularly in cases where you need to perform low-level operations that are not typically allowed in managed code. Unsafe code is often used in performance-critical scenarios or when interacting with unmanaged code or memory.',
      'Let explore the game concept of unsafe code through the context of a hacking-themed game where players take on the role of skilled hackers infiltrating complex computer systems and networks. In this game, managed code represents the standard security protocols and safeguards put in place by the targeted systems to prevent unauthorized access. However, hackers often need to resort to unsafe code to bypass these security measures and achieve their objectives.'
    
      ]}
      codesnip={codesnip}
      answer={answer}
      />
    </>
  )
}

