# CMS

## Development

```bash
# Run database in docker
# Run only once when database is not running
yarn db:run

# dev server
yarn cms dev
```

## DB

```bash
# Auto-generate migration file
yarn cms db:generate --name={migration_name}

# Generate custom migration file (write SQL statements as you want)
yarn cms db:generate --custom --name={custom_migration_name}

# Apply new migration files
yarn cms db:migrate
```
