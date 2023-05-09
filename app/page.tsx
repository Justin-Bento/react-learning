import React from 'react'
import MyButton from './components/MyButton'

export default function page() {
  return (
    <>
      <main className="space-y-20 divide-y-2">
        <Day01 />
        <Day02 />
      </main>
    </>
  )
}

function Day01() {
  return (
    <section className='p-4 space-y-2' aria-label='day-02--react-component'>
      <h1 className="text-2xl">Day 1: React Component</h1>
      <p className="text-base">Create a functional component that with custom parameters</p>
      <MyButton>Button Component</MyButton>
    </section>
  )
}
function Day02() {
  const Item = ({ name, isPacked }: any) => {
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
  }
  return (
    <section className="p-4 space-y-4" aria-label='day-02--conditional-rendering'>
      <div className="space-y-2">
        <h1 className="text-2xl">Day 2: Conditional Rendering</h1>
        <p className="text-base">Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators</p>
      </div>
      <ul className="p-4 bg-gray-100">
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
        
      </ul>
    </section>
  )
}