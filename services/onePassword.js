import dotenv from 'dotenv';
import sdk from '@1password/sdk';
import { categories, fieldTypes } from '../utils/CONST.js';



dotenv.config();

class OnePasswordService {
  constructor() {
    this.client = null;

    this.initClient().then((client) => {
      this.client = client;
      console.info('1Password client initialized');
    });
  }

  async initClient() {
    try {
      const client = await sdk.createClient({
        auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
        integrationName: 'Development',
        integrationVersion: 'v1.0.0',
      });

      return client;
    } catch (error) {
      console.error(error);
    }
  }

  async getSecret(vault, item, field) {
    try { 
      const secret = await this.client.secrets.resolve(`op://${vault}/${item}/${field}`);
      return secret;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }

  async listVaults() {
    try {
      const vaults = await this.client.vaults.listAll();
      return vaults;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }

  async createItem(vaultId, title, category, fields) {
    try {
      if (!categories[category]) {
        throw new Error(`Invalid category: ${category}. Please provide a valid category.`);
      }

      fields.forEach(field => {
        const normalizedFieldType = field.fieldType.toUpperCase();
        if (!fieldTypes[normalizedFieldType]) {
          throw new Error(`Invalid fieldType: ${field.fieldType}. Please provide a valid fieldType.`);
        }
        field.fieldType = fieldTypes[normalizedFieldType];
      });

      let item = await this.client.items.create({
        title: title,
        category: categories[category],
        vaultId: vaultId,
        fields: fields,
      })
  
      return item;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  }
}

export default OnePasswordService;