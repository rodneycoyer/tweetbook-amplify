import Main from "./components/MainComponent";
import React from "react"


// AWS
import Amplify, {API} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import awsConfig from "./aws-exports";
Amplify.configure(awsConfig);



function App() {

  return (
    <Authenticator variation="modal" socialProviders={['google']}>
      <Main />
    </Authenticator>
  );
}

export default App;