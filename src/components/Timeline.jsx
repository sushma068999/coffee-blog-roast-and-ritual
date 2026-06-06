export function Timeline() {
    const journey = [
        {
            title: "Cultivation",
            image: "https://img.magnific.com/premium-photo/arabica-coffee-beans-ripe-plant-harvest-produce-farmer-s-bucket_369024-893.jpg",
            description:
                "Coffee plants grow in tropical regions where altitude, climate, and soil create distinctive flavor profiles.",
        },
        {
            title: "Harvesting",
            image: "https://img.magnific.com/free-photo/closeup-shot-male-hand-picking-cherry-red-coffee-beans-tree_181624-59044.jpg",
            description:
                "Ripe coffee cherries are carefully hand-picked to ensure only the highest quality beans are selected.",
        },
        {
            title: "Processing",
            image: "https://perfectdailygrind.com/wp-content/uploads/2022/10/depulping-1024x640.jpg",
            description:
                "Beans are extracted from the fruit and dried using methods that influence their final taste.",
        },
        {
            title: "Roasting",
            image: "https://thumbs.dreamstime.com/b/coffee-beans-roasting-factory-image-captures-process-inside-features-close-up-view-being-heated-drum-389134684.jpg",
            description:
                "Heat transforms green beans into aromatic coffee while developing flavor and body.",
        },
        {
            title: "Brewing",
            image: "https://www.kbvresearch.com/images/blog/coffee-machine.jpg",
            description:
                "Different brewing methods unlock different characteristics and experiences from the same bean.",
        },
    ];

    return (
        <section
            style={{
                padding: "5rem 2rem",
                backgroundColor: "#fff",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                }}
            >
                <h2
                    style={{
                        fontSize: "3rem",
                        color: "#2c472c",
                        marginBottom: "1rem",
                    }}
                >
                    From Bean to Brew
                </h2>

                <p
                    style={{
                        color: "#666",
                        maxWidth: "700px",
                        margin: "0 auto",
                        lineHeight: "1.7",
                    }}
                >
                    Follow the journey of coffee from cultivation to the perfect cup.
                </p>
            </div>

            <div
                style={{
                    position: "relative",
                    maxWidth: "1000px",
                    margin: "0 auto",
                }}
            >
                {/* Timeline Line */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "#c68b59",
                        transform: "translateX(-50%)",
                    }}
                />

                {journey.map((step, index) => (
                    <div
                        key={step.title}
                        style={{
                            display: "flex",
                            justifyContent:
                                index % 2 === 0 ? "flex-start" : "flex-end",
                            marginBottom: "1.5rem",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                width: "42%",
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                                backgroundColor: "#f7f3ef",
                                padding: "1rem",
                                borderRadius: "18px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                style={{
                                    width: "140px",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    transition: "transform 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                }}
                            />

                            <div>
                                <div
                                    style={{
                                        color: "#c68b59",
                                        fontSize: "0.8rem",
                                        fontWeight: "bold",
                                        letterSpacing: "1px",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    STEP {index + 1}
                                </div>

                                <h3
                                    style={{
                                        color: "#2c472c",
                                        marginBottom: "0.4rem",
                                    }}
                                >
                                    {step.title}
                                </h3>

                                <p
                                    style={{
                                        color: "#555",
                                        lineHeight: "1.5",
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>
                        </div>

                        {/* Timeline Dot */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: "#2c472c",
                                border: "4px solid white",
                                transform:
                                    "translate(-50%, -50%)",
                                boxShadow:
                                    "0 0 0 4px #c68b59",
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}