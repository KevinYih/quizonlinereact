export default [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.", // ✅ 正确
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.", // ✅ 正确
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.", // ✅ 正确
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.", // ✅ 正确
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: "q5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.", // ✅ 正确
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.", // ✅ 正确
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using the #if template syntax.", // ✅ 正确
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "q8",
    text: "What is the role of the useEffect hook in React?",
    answers: [
      "Handling side effects in function components.", // ✅ 正确
      "Managing global state in React applications.",
      "Defining component styles dynamically.",
      "Creating new React components dynamically.",
    ],
  },
  {
    id: "q9",
    text: "What is the difference between props and state in React?",
    answers: [
      "Props are immutable and passed from parent to child, while state is mutable and managed within a component.", // ✅ 正确
      "Props are mutable and managed within a component, while state is immutable and passed from parent to child.",
      "There is no difference; they are interchangeable.",
      "State is used only in class components, while props are used only in function components.",
    ],
  },
  {
    id: "q10",
    text: "How does React handle events differently from standard JavaScript?",
    answers: [
      "React uses synthetic events for cross-browser consistency.", // ✅ 正确
      "React attaches event listeners to each individual DOM element.",
      "React does not support event handling.",
      "React only supports inline event handlers.",
    ],
  },
  {
    id: "q11",
    text: "What is the significance of keys in React lists?",
    answers: [
      "Keys help React identify which items have changed, are added, or removed efficiently.", // ✅ 正确
      "Keys are required to store data in local storage.",
      "Keys are used to encrypt component data.",
      "Keys automatically generate unique IDs for components.",
    ],
  },
  {
    id: "q12",
    text: "What is the virtual DOM in React?",
    answers: [
      "A lightweight copy of the actual DOM that React uses to optimize rendering.", // ✅ 正确
      "A backup of the real DOM stored in memory.",
      "A separate database for React components.",
      "A tool for debugging React applications.",
    ],
  },
  {
    id: "q13",
    text: "What is the purpose of the useState hook?",
    answers: [
      "To add local state management in function components.", // ✅ 正确
      "To fetch data from an API.",
      "To handle global state management.",
      "To create new components dynamically.",
    ],
  },
  {
    id: "q14",
    text: "Which lifecycle method is commonly used to fetch data in class components?",
    answers: [
      "componentDidMount", // ✅ 正确
      "shouldComponentUpdate",
      "componentWillUnmount",
      "render",
    ],
  },
  {
    id: "q15",
    text: "How do you update the state in a React class component?",
    answers: [
      "Using this.setState().", // ✅ 正确
      "By directly modifying this.state.",
      "Using a global state variable.",
      "By reloading the page.",
    ],
  },
  {
    id: "q16",
    text: "What is React Router used for?",
    answers: [
      "Managing navigation and routing in React applications.", // ✅ 正确
      "Handling HTTP requests in React components.",
      "Managing global state in React applications.",
      "Creating animations in React applications.",
    ],
  },
  {
    id: "q17",
    text: "What is the purpose of the Context API in React?",
    answers: [
      "To manage global state without prop drilling.", // ✅ 正确
      "To create reusable components.",
      "To handle HTTP requests.",
      "To optimize performance when rendering lists.",
    ],
  },
  {
    id: "q18",
    text: 'What does "lifting state up" mean in React?',
    answers: [
      "Moving state to a common parent component to share it between child components.", // ✅ 正确
      "Removing state from a component to reduce complexity.",
      "Passing state as props from child to parent.",
      "Using local storage to persist state.",
    ],
  },
  {
    id: "q19",
    text: "What is the purpose of React.memo?",
    answers: [
      "To optimize functional components by preventing unnecessary re-renders.", // ✅ 正确
      "To create memoized values for use in React applications.",
      "To handle asynchronous state updates.",
      "To store component data in memory.",
    ],
  },
  {
    id: "q20",
    text: "What is the difference between useEffect and useLayoutEffect?",
    answers: [
      "useEffect runs asynchronously after render, while useLayoutEffect runs synchronously before the browser repaints.", // ✅ 正确
      "useEffect is used for fetching data, while useLayoutEffect is used for animations.",
      "There is no difference; they are interchangeable.",
      "useEffect is only available in class components, while useLayoutEffect is for functional components.",
    ],
  },
];
