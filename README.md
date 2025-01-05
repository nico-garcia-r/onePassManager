# onePassManager

1. Create a new vault in 1Password. It is required to create the vault BEFORE creating the service account. You can create and link more than one vault to the service account.

2. Go to https://my.1password.com/developer-tools/infrastructure-secrets/serviceaccount

3. Create a new service account. Select a name and click Next.

4. Grant the service account access to the vaults you want to use (Vaults must be created before), select `Write permission` for the vaults you want to create items in and/or select `Read permission` for the vaults you want to read items from. The service account cannot be modified after creation, so make sure you grant the correct permissions. Click `Create Service Account`.

5. Set the service token in the .env file with the name `OP_SERVICE_ACCOUNT_TOKEN`.

## Item categories
Here you can find the categories that are used to group the items in the vaults: https://support.1password.com/item-categories/
All mapped categories are available in utils/CONST.js

## Item field types
This is the value you must complete in the `fieldType` inside each of the `fields` array that you want to create in the item. Here you can find the field types that are supported: https://developer.1password.com/docs/sdks/concepts/#supported-fields
All mapped field types are available in utils/CONST.js

## SWAGGER
The swagger documentation is available at /api-docs