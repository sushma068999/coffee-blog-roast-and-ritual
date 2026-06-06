export function Hero() {
    return (
        <section
            style={{
                width: "100%",
                minHeight: "90vh",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://espresso-works.com/cdn/shop/articles/featured-finished-latte-rosetta.jpg?v=1779814511&width=1376")`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                color: "#fff",
                boxSizing: "border-box",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "3.5rem",
                        marginBottom: "2rem",
                        letterSpacing: "1px",
                        color: "#e6e6e6",

                    }}
                >
                    Roast & Ritual
                </h1>

                <p
                    style={{
                        fontSize: "1.2rem",
                        marginBottom: "2rem",
                        color: "#e6e6e6",
                        lineHeight: "1.6",
                    }}
                >
                    Exploring the art, science, and culture of coffee—one cup at a time.
                </p>

                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <button
                        style={{
                            padding: "0.7rem 1.2rem",
                            backgroundColor: "#c49559",
                            border: "none",
                            color: "#fff",
                            fontWeight: "bold",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Explore Journal
                    </button>

                    <button
                        style={{
                            padding: "0.7rem 1.2rem",
                            backgroundColor: "transparent",
                            border: "2px solid #fff",
                            color: "#fff",
                            fontWeight: "bold",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Guides
                    </button>
                </div>
            </div>
        </section>
    );
}