import Challange from "./components/Challange";
import MyButton from "./components/MyButton";

export default function Page() {
  return (
    <>
      <main className="space-y-16">
        <Challange Headline="Your First Component" Supporting="Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!">
          <MyButton variant="primary">Hello World</MyButton>
        </Challange>
        <Challange Headline="Importing and Exporting Components" Supporting="The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.!">
        </Challange>
        <Challange Headline="Writing Markup with JSX" Supporting="JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.">
        </Challange>
      </main>
    </>
  )
}