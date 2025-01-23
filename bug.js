```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
    // This will cause an infinite loop because it updates the state, triggering a re-render, and thus this effect again
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```