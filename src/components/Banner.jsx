export function Banner() {
    return (
        <section
            style={{
                position: "relative",
                height: "65vh",
                minHeight: "450px",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Dark Overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45))",
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    padding: "2rem",
                    maxWidth: "800px",
                }}
            >
                <p
                    style={{
                        color: "#d8b68a",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        marginBottom: "1rem",
                        fontWeight: "bold",
                    }}
                >
                    Roast & Ritual
                </p>

                <h2
                    style={{
                        color: "white",
                        fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                        lineHeight: "1.2",
                        marginBottom: "1rem",
                    }}
                >
                    Crafting Moments,
                    <br />
                    One Cup at a Time
                </h2>

                <p
                    style={{
                        color: "#f5e6d3",
                        fontSize: "1.1rem",
                        lineHeight: "1.8",
                    }}
                >
                    Every bean carries a story.
                    Every brew creates a memory.
                </p>
            </div>
        </section>
    );
}