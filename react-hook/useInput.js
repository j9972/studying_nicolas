export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onchange = event => {
        const {
            target: { value }
        } = event;
        let willUpadte = true;
        if(typeof validator === "function" ) {
            willUpadte = validator(value);
        }
        if(willUpadte) {
            setValue(value);
        }
        
    };
    return { value, onchange }; 
}

const App = () => {
    // const [item, setItem] = useState(0);
    // const IncrementItem = () => setItem(item + 1);
    // const DecrementItem = () => setItem(item - 1);
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1> 
            {/* 위 코드는 hello {item} 이 원래 코드 */}
            {/* <button onClick={IncrementItem}>Increment</button>
            <button onClick={DecrementItem}>Decrement</button> */}
            <input placeholder="Name" {...name } />
        </div>
    );
};