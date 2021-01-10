// import React, {
//   useState,
//   useRef,
//   useCallback,
//   useMemo,
//   useReducer
// } from "react";

// import { useForm } from "./useForm";
// import { useMeasure } from "./useMeasure";

// import { Hello } from "./Hello";
// import { Square } from "./Square";
// import { useFetch } from "./useFetch";
// -------------------------------------------------------------------------------------------
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/About";
import { UserContext } from "./UserContext";

// -------------------------------------------------------------------------------------------
// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: ""
//   });

//   const inputRef = useRef();
//   const hello = useRef(() => console.log("hello"));

//   const [showHello, setShowHello] = useState(true);

//   const [rect, inputRef2] = useMeasure([]);

//   return (
//     <div>
//       <button onClick={() => setShowHello(!showHello)}>toggle</button>
//       {showHello && <Hello />}
//       <form>
//         <input
//           ref={inputRef2}
//           name="firstName"
//           placeholder="first name"
//           value={values.firstName}
//           onChange={handleChange}
//         />
//         <input
//           ref={inputRef}
//           name="email"
//           // autoComplete="on"
//           value={values.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           // autoComplete="on"
//           value={values.password}
//           onChange={handleChange}
//         />
//         <button
//           onClick={() => {
//             inputRef.current.focus();
//             hello.current();
//           }}
//         >
//           focus
//         </button>
//       </form>
//     </div>
//   );
// };
// -------------------------------------------------------------
// const App = () => {
//   const [count, setCount] = useState(0);
//   const favoriteNums = [7, 21, 37];

//   // const increment = useCallback(() => {
//   //   setCount(count + 1);
//   // }, [count, setCount]);
//   const increment = useCallback(
//     n => {
//       setCount(c => c + n);
//     },
//     [setCount]
//   );

//   return (
//     <div>
//       <Hello increment={increment} />
//       <div>count: {count}</div>
//       {favoriteNums.map(n => {
//         return <Square increment={increment} n={n} key={n} />;
//       })}
//     </div>
//   );
// };
// ----------------------------------------------------------------------------
// function computeLongestWord(arr) {
//   if (!arr) {
//     return [];
//   }

//   console.log("computing longest word");

//   return JSON.parse(arr).map(item => <div key={item.id}>{item.title}</div>);
// }
// const App = () => {
//   const [count, setCount] = useState(0);
//   const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");

//   const longestWord = useMemo(() => computeLongestWord(data), [data]);

//   return (
//     <div>
//       <div>count: {count}</div>
//       <button onClick={() => setCount(count + 1)}>increment</button>
//       {longestWord}
//     </div>
//   );
// };
// ----------------------------------------------------------------------------
// function reducer(state, action) {
//   switch (action.type) {
//     case "add-todo":
//       return {
//         todos: [...state.todos, { text: action.text, completed: false }],
//         todoCount: state.todoCount + 1
//       };
//     case "toggle-todo":
//       return {
//         todos: state.todos.map((t, idx) =>
//           idx === action.idx ? { ...t, completed: !t.completed } : t
//         ),
//         todoCount: state.todoCount
//       };
//     default:
//       return state;
//   }
// }
// const App = () => {
//   const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
//     todos: [],
//     todoCount: 0
//   });
//   const [text, setText] = useState();

//   return (
//     <div>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           dispatch({ type: "add-todo", text });
//           setText("");
//         }}
//       >
//         <input value={text} onChange={e => setText(e.target.value)} />
//       </form>
//       <div>number od todos: {todoCount}</div>
//       {todos.map((t, idx) => (
//         <div
//           key={t.text}
//           onClick={() => dispatch({ type: "toggle-todo", idx })}
//           style={{
//             textDecoration: t.completed ? "line-through" : ""
//           }}
//         >
//           {t.text}
//         </div>
//       ))}
//     </div>
//   );
// };

function AppRouter() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
