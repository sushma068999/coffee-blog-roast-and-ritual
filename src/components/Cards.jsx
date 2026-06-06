export function Cards() {
    const cards = [
        {
            title: "The Bean Journal",
            image:
                "https://i.etsystatic.com/39409693/r/il/14cf0a/7201502350/il_570xN.7201502350_9c5h.jpg",
            description:
                "A popular motivational fable about how to handle adversity.",
        },
        {
            title: "Coffee Science",
            image:
                "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
            description:
                "Examines the chemical composition, agriculture, brewing physics, and physiological effects of the beloved brew.",
        },
        {
            title: "Brewing Guides",
            image:
                "https://www.sweltercoffee.com/cdn/shop/files/french_press.jpg?v=1764861181&width=2000",
            description:
                "Master the art of coffee with step-by-step brewing techniques.",
        },
        {
            title: "Café Culture",
            image:
                "https://i.pinimg.com/564x/fb/b8/66/fbb866f2b7a50ae8fc502adfeb9a24a4.jpg",
            description:
                "The social behaviors, rituals, and traditions surrounding the consumption of coffee and café food.",
        },
    ];

    return (
        <section
            style={{
                padding: "6rem 4rem",
                backgroundColor: "#f7f3ef",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    color: "#2c472c",
                }}
            >
                Explore Our World
            </h2>

            <p
                style={{
                    textAlign: "center",
                    color: "#666",
                    maxWidth: "600px",
                    margin: "0 auto 4rem",
                }}
            >
                From expertly roasted beans to brewing knowledge,
                everything you need for a better coffee experience.
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {cards.map((card) => (
                    <div
                        key={card.title}
                        style={{
                            width: "240px",
                            backgroundColor: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow:
                                "0 10px 25px rgba(0,0,0,0.08)",
                            transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(-10px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                                "translateY(0)";
                        }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            style={{
                                width: "100%",
                                height: "240px",
                                objectFit: "cover",
                            }}
                        />

                        <div style={{ padding: "1rem" }}>
                            <h3
                                style={{
                                    marginBottom: "1rem",
                                    color: "#2c472c",
                                }}
                            >
                                {card.title}
                            </h3>

                            <p
                                style={{
                                    color: "#666",
                                    lineHeight: "1.7",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {card.description}
                            </p>

                            <button
                                style={{
                                    backgroundColor: "#c49559",
                                    color: "white",
                                    border: "none",
                                    padding: "0.8rem 1.4rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >
                                Explore →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}