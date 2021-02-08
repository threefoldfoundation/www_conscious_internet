

set -e
cd /Users/despiegk/codewww/github/threefoldfoundation/www_conscious_internet

#need to ignore errors for getting nvm not sure why
set +e
source /Users/despiegk/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/despiegk/.publisher/versions/node/v15.8.0/bin:$PATH

set +e
gridsome build

set -e

mkdir -p /Users/despiegk/.publisher/publish/www_conscious_internet
rsync -ra --delete /Users/despiegk/codewww/github/threefoldfoundation/www_conscious_internet/dist/ /Users/despiegk/.publisher/publish/www_conscious_internet/

cd /Users/despiegk/codewww/github/threefoldfoundation/www_conscious_internet/dist

echo go to http://localhost:9999/
 python3 -m http.server 9999

