import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
   csharp: `\n// Define custom attributes for enemy properties AttributeUsage(AttributeTargets.Class)
   
    public class EnemyHealthAttribute : Attribute
    {
        public int Health { get; }
    
        public EnemyHealthAttribute(int health)
        {
            Health = health;
        }
    }
    
   
    public class EnemyDamageAttribute : Attribute
    {
        public int Damage { get; }
    
        public EnemyDamageAttribute(int damage)
        {
            Damage = damage;
        }
    }
    
    [AttributeUsage(AttributeTargets.Class)]
    public class EnemySpeedAttribute : Attribute
    {
        public float Speed { get; }
    
        public EnemySpeedAttribute(float speed)
        {
            Speed = speed;
        }
    }
    
    // Define enemy classes with attributes
    [EnemyHealth(100)]
    [EnemyDamage(20)]
    [EnemySpeed(5.0f)]
    public class GoblinEnemy
    {
        // Enemy behavior and implementation
    }
    
    [EnemyHealth(200)]
    [EnemyDamage(30)]
    [EnemySpeed(4.0f)]
    public class OgreEnemy
    {
        // Enemy behavior and implementation
    }
    
    // Game class
    public class DungeonGame
    {
        public void SpawnEnemies()
        {
            // Use reflection to dynamically spawn enemies
            foreach (Type enemyType in Assembly.GetExecutingAssembly().GetTypes().Where(t => t.IsClass && t.GetCustomAttributes(typeof(EnemyHealthAttribute), true).Length > 0))
            {
                // Instantiate enemy based on attributes
                var enemy = Activator.CreateInstance(enemyType);
                // Spawn enemy in the game world
            }
        }
    }
    
    `}
    const answer ={
      csharp:`\n // Define custom attributes for enemy properties AttributeUsage(AttributeTargets.Class)
      [AttributeUsage(AttributeTargets.Class)]
      public class EnemyHealthAttribute : Attribute
      {
          public int Health { get; }
      
          public EnemyHealthAttribute(int health)
          {
              Health = health;
          }
      }
      
      [AttributeUsage(AttributeTargets.Class)]
      public class EnemyDamageAttribute : Attribute
      {
          public int Damage { get; }
      
          public EnemyDamageAttribute(int damage)
          {
              Damage = damage;
          }
      }
      
      [AttributeUsage(AttributeTargets.Class)]
      public class EnemySpeedAttribute : Attribute
      {
          public float Speed { get; }
      
          public EnemySpeedAttribute(float speed)
          {
              Speed = speed;
          }
      }
      
      // Define enemy classes with attributes
      [EnemyHealth(100)]
      [EnemyDamage(20)]
      [EnemySpeed(5.0f)]
      public class GoblinEnemy
      {
          // Enemy behavior and implementation
      }
      
      [EnemyHealth(200)]
      [EnemyDamage(30)]
      [EnemySpeed(4.0f)]
      public class OgreEnemy
      {
          // Enemy behavior and implementation
      }
      
      // Game class
      public class DungeonGame
      {
          public void SpawnEnemies()
          {
              // Use reflection to dynamically spawn enemies
              foreach (Type enemyType in Assembly.GetExecutingAssembly().GetTypes().Where(t => t.IsClass && t.GetCustomAttributes(typeof(EnemyHealthAttribute), true).Length > 0))
              {
                  // Instantiate enemy based on attributes
                  var enemy = Activator.CreateInstance(enemyType);
                  // Spawn enemy in the game world
              }
          }
      }
      
    `}
    
  return (
    <>

    <Maincom  title={"Reflection and Attribute"}
    answer={answer}
  
    game={"https://html-classic.itch.zone/html/3198875/index.html"}
    
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/7990d5b71c1de2c6f0/4afffb692d922b5e'}
       steps={['Game Concept: In our game, the player controls a hero character who must navigate through a dungeon filled with different types of enemies. Each enemy has its own unique attributes, such as health, damage, and movement speed, which are defined using attributes. Reflection is used to dynamically spawn and control these enemies based on their attributes.',
       'Enemy Attributes: We define custom attributes to specify the properties of each enemy type. For example, we may have attributes like [EnemyHealth], [EnemyDamage], and [EnemySpeed].',
       'These attributes are applied to different enemy classes to define their characteristics.',
       'Add the class top off function [AttributeUsage(AttributeTargets.Class)]',
       'Reflection to Spawn Enemies: At runtime, our game uses reflection to scan through all enemy classes and instantiate them dynamically. We use attributes to filter and select enemy classes based on certain criteria. For example, we may only spawn enemies with the [BossEnemy] attribute for boss encounters.',
       'Encountering different enemies along the way. Each enemy behaves according to its defined attributes. For example, enemies with high health may require multiple hits to defeat, while enemies with high damage may deal significant damage to the player.',
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
