const shortid = require("shortid");
const URL = require("../models/Urlmodels");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });

    let url = body.url;

    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }

    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

async function handleSearchByShortID(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    console.log("Logging...", shortId, entry);
    // if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
        res.json({
            redirectURL: entry.redirectURL
        });
    // } else {
        // res.redirect(entry.redirectURL);
    // }
}


async function getAllUrls (req, res) {
    try {
        const urls = await URL.find();
        console.log(urls);
        return res.status(200).json({
            urls
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleSearchByShortID,
    getAllUrls
};