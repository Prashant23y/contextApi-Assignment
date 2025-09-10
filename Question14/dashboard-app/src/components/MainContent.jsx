const sampleProducts = [
    "Alpha Phone",
    "Beta Headphones",
    "Gamma Laptop",
    "Delta Watch",
    "Epsilon Camera",
    "Zeta Speaker"
];

export default function MainContent() {
    return (
        <main className="main-content">
            <h2>Products</h2>
            <div className="grid">
                {sampleProducts.map((p) => (
                    <div className="card" key={p}>
                        <h3>{p}</h3>
                        <p>Sample product description</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
