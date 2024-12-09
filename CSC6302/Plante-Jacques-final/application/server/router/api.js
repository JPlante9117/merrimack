import express from "express";
import BoardGameBLL from "../../BLL/BoardGameBLL.js";
import PublisherBLL from "../../BLL/PublisherBLL.js"
import CategoryBLL from "../../BLL/CategoryBLL.js";

const router = express.Router();

router.get("/boardgames", async (req, res) => {
    try {
        let userType = req.session.userType;
        const rows = await BoardGameBLL.getAllGames(userType);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching board games:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/boardgames/:id", async (req, res) => {
    try {
        let userType = req.session.userType,
            id       = req.params.id;
        const rows = await BoardGameBLL.getBoardGame(userType, id);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching board game with ID ", id, error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/boardgames", async(req, res) => {
    try {
        let userType = req?.session?.userType;
        const {
            title,
            description,
            publisherName,
            expansion,
            minPlayers,
            maxPlayers,
            timeToPlay,
            minAge,
            complexity,
            categories
        } = req.body;

        let addedGame = await BoardGameBLL.createBoardGame(userType, title, description, publisherName, expansion, minPlayers, maxPlayers, timeToPlay, minAge, complexity, categories);
        res.json({
            "message" : "Board Game Added Successfully",
            "payload" : addedGame
        });
    } catch (error) {
        if (error.code === 'ER_PROCACCESS_DENIED_ERROR') {
            res.status(403).json({ error: 'Permission denied' });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

router.get('/publishers', async (req, res) => {
    try {
        let userType = req.session.userType;
        const rows = await PublisherBLL.getAllPublishers(userType);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching publishers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getPublisherGames', async (req, res) => {
    try {
        let userType = req.session.userType,
            name = req.query.name;

        const rows = await PublisherBLL.getGames(userType, name);
        res.json(rows);
    } catch (error) {
        console.error("Error getting publisher games: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/categories', async (req, res) => {
    try {
        let userType = req.session.userType;
        const rows = await CategoryBLL.getCategories(userType);
        res.json(rows);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getCategoryGames', async (req, res) => {
    try {
        let userType = req.session.userType,
            id = req.query.id;

        const rows = await CategoryBLL.getGames(userType, id);
        res.json(rows);
    } catch (error) {
        console.error("Error getting category games: ", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/switchUser', async (req, res) => {
    try {
        let { userType } = req.body;
        req.session.userType = userType;
        res.json({success: true});
    } catch (err) {
        console.error("Error swapping users: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('login', (req, res) => {
    res.json({ success: true });
})

export default router;
