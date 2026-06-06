export function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#2c472c",
                color: "rgb(247, 243, 239)",
                padding: "0.75rem 0.75rem 0.5rem",
                marginTop: "0rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Brand */}
                <div style={{ maxWidth: "300px" }}>
                    <h2
                        style={{
                            fontSize: "1rem",
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            color: "#c49559",
                        }}
                    >
                        ☕ Roast & Ritual
                    </h2>

                    <p
                        style={{
                            padding: 0,
                            margin: 0,
                            lineHeight: "1.7",
                            color: "#f7f3ef",
                            fontSize: "0.9rem",

                        }}
                    >
                        Exploring the world of coffee one cup at a time.
                        From bean origins to brewing techniques,
                        discover stories behind every sip.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3
                        style={{
                            fontSize: "1rem",
                            marginBottom: "1rem",
                            color: "#c49559",
                        }}
                    >
                        Explore
                    </h3>

                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            lineHeight: "1.7",
                            fontSize: "0.9rem",

                        }}
                    >
                        <li>Home</li>
                        <li>Editor's Picks</li>
                        <li>Coffee Journey</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3
                        style={{
                            fontSize: "1rem",
                            marginBottom: "1rem",
                            color: "#c49559",
                        }}
                    >
                        Categories
                    </h3>

                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            lineHeight: "1.7",
                            fontSize: "0.9rem",
                        }}
                    >
                        <li>Brewing Guides</li>
                        <li>Coffee Origins</li>
                        <li>Roasting</li>
                        <li>Equipment</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div style={{ maxWidth: "300px" }}>
                    <h3
                        style={{
                            fontSize: "1rem",
                            marginBottom: "1rem",
                            color: "#c49559",
                        }}
                    >
                        Stay Updated
                    </h3>

                    <p
                        style={{
                            color: "#f7f3ef",
                            marginBottom: "1rem",
                            fontSize: "0.9rem",
                        }}
                    >
                        Get fresh coffee stories and guides delivered to your inbox.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your email"
                            style={{
                                flex: 1,
                                padding: "0.8rem",
                                border: "none",
                                borderRadius: "8px",
                                outline: "none",
                            }}
                        />

                        <button
                            style={{
                                backgroundColor: "#c49559",
                                color: "white",
                                border: "none",
                                padding: "0.8rem 1rem",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    paddingTop: "1.5rem",
                    textAlign: "center",
                    color: "#b9b0a5",
                }}
            >
                © 2026 Roast & Ritual • Crafted for coffee lovers everywhere
            </div>
        </footer>
    );
}