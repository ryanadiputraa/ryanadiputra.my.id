#!/bin/bash
# Extract command line arguments
email="$1"
google_app_password="$2"

ENV_CONTENT="
EMAIL='$email'
GOOGLE_APP_PASSWORD='$google_app_password'
"

# Write the YAML content to the file
echo "$ENV_CONTENT" >.env

echo "ENV config has been written to .env"
