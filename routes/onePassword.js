import express from 'express';
import OnePassService from '../services/onePassword.js';

const router = express.Router();
const onePassService = new OnePassService();

/**
 * @swagger
 * /api/v1/items:
 *   get:
 *     summary: Retrieve an item from the vault
 *     description: Returns item data based on the provided vault, item, and field
 *     parameters:
 *       - in: query
 *         name: vault
 *         required: true
 *         schema:
 *           type: string
 *         description: Vault name
 *       - in: query
 *         name: item
 *         required: true
 *         schema:
 *           type: string
 *         description: Item name
 *       - in: query
 *         name: field
 *         required: false
 *         schema:
 *           type: string
 *         description: Field name
 *     responses:
 *       200:
 *         description: Item data
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Example secret value"

 */
router.get('/items', async (req, res) => {
  const { vault, item, field } = req.query;
  const items = await onePassService.getSecret(vault, item, field);
  res.json(items);
});

/**
 * @swagger
 * /api/v1/vaults:
 *   get:
 *     summary: List all vaults
 *     description: Retrieves a list of existing vaults in the service account
 *     responses:
 *       200:
 *         description: An array of vaults
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 elements:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *               example:
 *                 elements:
 *                   - id: "gfilquczqkfndi4aqmbuch5esy"
 *                     title: "test_3"
 *                   - id: "3qjebzhh34qxu233tczorf47fi"
 *                     title: "Test"
 *                   - id: "ioxjustl27hfbj2hetkrewusge"
 *                     title: "test_2"
 */
router.get('/vaults', async (req, res) => {
  const vaults = await onePassService.listVaults();
  res.json(vaults);
});

/**
 * @swagger
 * /api/v1/items:
 *   post:
 *     summary: Create a new item in the vault
 *     description: Creates an item using title, category, and custom fields
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vaultId:
 *                 type: string
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               fields:
 *                 type: array
 *                 items:
 *                   type: object
 *             example:
 *               vaultId: "gfilquczqkfndi4aqmbuch5esy"
 *               title: "New Login Secret"
 *               category: "LOGIN"
 *               fields:
 *                 - id: "username"
 *                   title: "username"
 *                   fieldType: "Text"
 *                   value: "nicogcba"
 *                 - id: "password"
 *                   title: "password"
 *                   fieldType: "Concealed"
 *                   value: "nico1234"
 *     responses:
 *       200:
 *         description: Newly created item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 id: "paszehusxy2kxiei7lragmi7ra"
 *                 title: "New Login Secret"
 *                 category: "Login"
 *                 vaultId: "gfilquczqkfndi4aqmbuch5esy"
 *                 fields:
 *                   - id: "username"
 *                     title: "username"
 *                     value: "nicogcba"
 *                   - id: "password"
 *                     title: "password"
 *                     value: "nico1234"
 */
router.post('/items', async (req, res) => {
  let { vaultId, title, category, fields } = req.body;
  category = category.toUpperCase();
  const item = await onePassService.createItem(vaultId, title, category, fields);
  res.json(item);
});

export default router;