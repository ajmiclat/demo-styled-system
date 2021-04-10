import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Box from './components/Box';
import Text from './components/Text';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <main>
          <header>
            <Box color="white" bg="black" p={5}>
              <Text as="h1" fontSize={5}>
                Base route
              </Text>
              <Text fontSize={3} as={Link} to="/secondary">
                Go to secondary
              </Text>
            </Box>
          </header>
        </main>
      </Route>
      <Route exact path="/secondary">
        <main>
          <header>
            <Box display="flex" color="white" bg="blue" p={5}>
              <Text as="h1" fontSize={5}>
                Secondary route
              </Text>
              <Text fontSize={3} as={Link} to="/">
                Go to home
              </Text>
            </Box>
          </header>
        </main>
      </Route>
    </Switch>
  );
};

/*
  <Flex as="section">
  </Flex>
  <Grid></Grid>
  <Box></Box>
  <Text></Text>
*/

export default App;
