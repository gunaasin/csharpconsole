import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
  const codesnip = {
    csharp: `

    class Program
    {
        // Define a value type struct
        struct ValueType
        {
            public int Value;
        }
    
        // Define a reference type class
        class ReferenceType
        {
            public int Value;
        }
    
        static void Main(string[] args)
        {
            // Create instances of value type and reference type
            ValueType valueTypeInstance1 = new ValueType();
            ReferenceType referenceTypeInstance1 = new ReferenceType();
    
            // Assign values to the instances
            valueTypeInstance1.Value = 10;
            referenceTypeInstance1.Value = 20;
    
            // Create another instance of value type and reference type
            ValueType valueTypeInstance2 = valueTypeInstance1;
            ReferenceType referenceTypeInstance2 = referenceTypeInstance1;
    
            // Modify values of the second instances
            valueTypeInstance2.Value = 30;
            referenceTypeInstance2.Value = 40;
    
            // Print values of the original instances
            Console.WriteLine("Original value type instance value: " + valueTypeInstance1.Value); // Output: 10
            Console.WriteLine("Original reference type instance value: " + referenceTypeInstance1.Value); // Output: 40
    
            // Print values of the second instances
            Console.WriteLine("Second value type instance value: " + valueTypeInstance2.Value); // Output: 30
            Console.WriteLine("Second reference type instance value: " + referenceTypeInstance2.Value); // Output: 40
        }
    }
    
    `}
    const answer = {
      csharp: `using System;

      class Program
      {
          // Define a value type struct
          struct ValueType
          {
              public int Value;
          }
      
          // Define a reference type class
          class ReferenceType
          {
              public int Value;
          }
      
          static void Main(string[] args)
          {
              // Create instances of value type and reference type
              ValueType valueTypeInstance1 = new ValueType();
              ReferenceType referenceTypeInstance1 = new ReferenceType();
      
              // Assign values to the instances
              valueTypeInstance1.Value = 10;
              referenceTypeInstance1.Value = 20;
      
              // Create another instance of value type and reference type
              ValueType valueTypeInstance2 = valueTypeInstance1;
              ReferenceType referenceTypeInstance2 = referenceTypeInstance1;
      
              // Modify values of the second instances
              valueTypeInstance2.Value = 30;
              referenceTypeInstance2.Value = 40;
      
              // Print values of the original instances
              Console.WriteLine("Original value type instance value: " + valueTypeInstance1.Value); // Output: 10
              Console.WriteLine("Original reference type instance value: " + referenceTypeInstance1.Value); // Output: 40
      
              // Print values of the second instances
              Console.WriteLine("Second value type instance value: " + valueTypeInstance2.Value); // Output: 30
              Console.WriteLine("Second reference type instance value: " + referenceTypeInstance2.Value); // Output: 40
          }
      }
      
      `}
  return (
    <>
    <Maincom  title={" Value Types vs Reference Types"}
  game={"https://html-classic.itch.zone/html/2170194/IsleOfLight/index.html?v=1591301915"}
  
  url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/1190d5b71c1de1cd98/8db84f8890e7595e'}
    steps={['Value types and reference types are two fundamental classifications of data types in C# and many other programming languages. Understanding the differences between them is crucial for writing efficient and bug-free code.',
    'In "Memory Island," players embark on an adventure to explore a mysterious island filled with treasures and challenges. Each aspect of the island landscape and inhabitants serves as an analogy for value types and reference types in programming.',
'Reference Types:In contrast, the inhabitants of the island, such as NPCs (non-player characters) and creatures, represent reference types. These entities exist independently of the player and are accessed through references rather than directly interacted with. When players encounter an NPC or creature, they communicate with them through dialogue or actions, much like interacting with reference types in programming.',
    'Value Types:Imagine the treasures scattered throughout the island as value types. These treasures are directly visible and tangible, much like value types in programming. When players discover a treasure chest, they immediately see and interact with its contents without needing any additional instructions. These treasures are like value types stored directly on the island, readily accessible and manageable.',
]}
       codesnip={codesnip}
       answer={answer}
       />
       
    </>
  )
}
