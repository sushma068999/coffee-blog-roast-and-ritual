export function Navbar() {
    return (
        <nav
            style={{
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 3rem",
                backgroundColor: "#2c472c",
                color: "#fff",
                borderBottom: "1px solid #3a2a22",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                }}
            >
                ☕ Roast & Ritual
            </div>

            {/* Navigation Links */}
            <ul
                style={{
                    display: "flex",
                    gap: "2rem",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Guide
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Newsletter
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Recipes
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Right Side */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >

                <a
                    href="#"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "1.2rem",
                    }}
                >
                    🔍︎
                </a>

                <button
                    style={{
                        backgroundColor: "#c49559",
                        color: "white",
                        border: "none",
                        padding: "0.7rem 1.2rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Sign In
                </button>
            </div>
        </nav>
    );
}