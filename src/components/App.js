import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
/*
DELIVERABLES
------------
Two components, <Navbar> and <Home>, are already defined in the App.js file.
Add both of these components as child components of <App> by including them in
the return statement for the App function.

Create a third component, <About>. The <About> component should also be a child
component of <App>.

The <About> component should return a <div> with an id of about. To match the
screenshot, the div should contain an <h2> element with the text "About."
However, as long as it has an id of about, it will pass the test!
Hint: If you're stuck, try using the screen.debug method in the test file to
see what DOM elements are being returned by your <App> component. If you still
need help, this lab (and others) have a solution branch on GitHub where you can
see one possible solution to this lesson.
*/
