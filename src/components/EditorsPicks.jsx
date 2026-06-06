export function EditorsPicks() {
    const picks = [
        {
            title: "The Beginner's Guide to Pour Over Coffee",
            category: "Brewing",
            readTime: "5 min read",
            image:
                "https://www.harmonycoffee.co.uk/cdn/shop/articles/Pourover_Coffee_34e3746d-46ca-42a9-b63d-a2eb91df6e6e.jpg?v=1779312327",
        },
        {
            title: "How Roasting Changes Flavor Profiles",
            category: "Coffee Science",
            readTime: "7 min read",
            image:
                "https://firebeancoffee.ca/cdn/shop/files/preview_images/e1916baf04ba40da85bda6e34860353b.thumbnail.0000000000_600x.jpg?v=1769834786",
        },
        {
            title: "Top 5 Coffee Origins Every Enthusiast Should Try",
            category: "Origins",
            readTime: "6 min read",
            image:
                "https://coffeelounge.delonghi.com/wp-content/uploads/2020/11/03_05-singleorigins.jpg",
        },
    ];

    return (
        <section
            style={{
                padding: "5rem 3rem",
                backgroundColor: "#f7f3ef",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
                <h2
                    style={{
                        color: "#2c472c",
                        fontSize: "3rem",
                        marginBottom: "1rem",
                    }}
                >
                    Editor's Picks
                </h2>

                <p
                    style={{
                        color: "#666",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    Hand-selected articles for coffee lovers looking
                    to deepen their knowledge and appreciation.
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {picks.map((pick) => (
                    <div
                        key={pick.title}
                        style={{
                            width: "320px",
                            backgroundColor: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.08)",
                            transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-8px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                        }}
                    >
                        <img
                            src={pick.image}
                            alt={pick.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                            }}
                        />

                        <div
                            style={{
                                padding: "1.5rem",
                            }}
                        >
                            <span
                                style={{
                                    color: "#c68b59",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {pick.category}
                            </span>

                            <h3
                                style={{
                                    color: "#2c472c",
                                    marginTop: "0.8rem",
                                    marginBottom: "0.8rem",
                                    lineHeight: "1.4",
                                }}
                            >
                                {pick.title}
                            </h3>

                            <p
                                style={{
                                    color: "#777",
                                    marginBottom: "1rem",
                                }}
                            >
                                {pick.readTime}
                            </p>

                            <button
                                style={{
                                    backgroundColor: "#2c472c",
                                    color: "white",
                                    border: "none",
                                    padding: "0.7rem 1.2rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                }}
                            >
                                Read Article →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}