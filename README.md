// These are the Console commands we used to create this test

npm init -y

npm install -D jest ts-jest @types/jest

npx ts-jest config:init

npm set-script test "jest"
npm set-script test:watch "jest --watchAll"

// Optional Options

git init
adding a .gitignore file
add prettier
