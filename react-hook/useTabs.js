
const content = [
    {
        tab: "Section 1",
        content: "Im the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "Im the content of the Section 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    //에러 확인용 -> 아래 if문은 array가 아닐때 return을 햐준다.
    if(!allTabs || Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
}

const App = () => {
    // const [item, setItem] = useState(0);
    // const IncrementItem = () => setItem(item + 1);
    // const DecrementItem = () => setItem(item - 1);
    const {currentItem} = useTabs(0, content);
    return (
        <div className="App">
            {/* 위 코드는 <h1>Hello</h1> {item} 이 원래 코드 */}
            {/* <button onClick={IncrementItem}>Increment</button>
            <button onClick={DecrementItem}>Decrement</button> */}
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>
            {currentItem.content}
            </div>
        </div>
    );