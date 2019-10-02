#### Initial boilerplate installation

- Needed to install enzyme for component testing
  
  npm install --save-dev react-addons-test-utils enzyme enzyme-adapter-react-16
  
- Needed to install jsdom to mount components in testing
  
  npm install --save-dev --save-exact jsdom jsdom-global
  
- Needed to configure WebStorm debugging

  The following steps were needed to get testing working in WebStorm without importing jsdom-global/register (which caused a conflict when running tests from cli):

  - Created an "All Tests" Jest configuration in Run/Debug Configurations window
  
  - In "Node options" field, entered:
  
    --require jsdom-global/register
    
  - In "Jest options" field, entered:
  
    --env=jsdom
