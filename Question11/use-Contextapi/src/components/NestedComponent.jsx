import ChildComponent from "./ChildComponent";

function NestedComponent() {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Nested Component</h2>
            <ChildComponent />
        </div>
    );
}

export default NestedComponent;
