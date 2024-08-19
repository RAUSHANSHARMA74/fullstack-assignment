import Cardmodel from "../model/card.model.js"

const getAllCard = async (req, res) => {
    try {
        const cards = await Cardmodel.find({});

        res.status(200).json({
            message: "Cards retrieved successfully",
            cards: cards
        });

    } catch (error) {
        console.error("Something went wrong while getting all cards:", error);

        res.status(500).json({ message: "Failed to retrieve cards", error: error.message });
    }
};


const addCard = async (req, res) => {
    try {
        const card = new Cardmodel(req.body);

        const savedCard = await card.save();

        res.status(201).json({
            message: "Card added successfully",
            card: savedCard
        });

    } catch (error) {
        console.error("Something went wrong while adding a card:", error);

        res.status(500).json({ message: "Failed to add card", error: error.message });
    }
};


const singleCard = async (req, res) => {
    try {
        const { title } = req.params;
        if (!title) {
            return res.status(400).json({ message: "Title parameter is required" });
        }
        const cards = await Cardmodel.find({
            title: { $regex: `^${title}`, $options: 'i' }
        });

        if (cards.length === 0) {
            return res.status(200).json({ message: "No cards found with the given title" });
        }

        res.status(200).json({ message: "Cards found", cards });
    } catch (error) {
        console.error("Something went wrong while searching for cards:", error);
        res.status(500).json({ message: "Failed to search for cards", error: error.message });
    }
};

export { getAllCard, addCard, singleCard };
