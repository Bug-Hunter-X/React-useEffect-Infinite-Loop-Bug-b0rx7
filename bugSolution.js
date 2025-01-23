```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered with count:', count);
    // Now the effect only runs when the component mounts
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```