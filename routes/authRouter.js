const express = require("express");
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const knex = require("knex")(require("../knexfile.js"));

const router = express.Router();

const googleClientId = process.env.GOOGLE_CLIENT_ID;

const client = new OAuth2Client(googleClientId);

router.post('/google', async (req, res) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: googleClientId,
        });

        const payload = ticket.getPayload();
        const googleUserId = payload['sub'];

        // Check if the user exists in your database using googleUserId
        let user = await knex('users').where({ googleUserId }).first();

        // If not, create a new user
        if (!user) {
            await knex('users').insert({
                googleUserId: googleUserId,
                email: payload['email']
                // ... any other fields you want to store
            });
            user = await knex('users').where({ googleUserId }).first();
        }

        // Create a JWT token
        const userToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            user,
            token: userToken
        });

    } catch (error) {
        console.error("Error in /auth/google:", error);
        res.status(501).json({ error: 'Authentication failed' });
    }
});

module.exports = router;
