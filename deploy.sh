aws s3 sync .  s3://xenodatapartners.com --acl public-read --exclude "*" --include "*.html" --include "*.csv" --include "*.js" --include "*.xml" --include "css/*" --include "fonts/*"  --include "images/*" --include "js/*"