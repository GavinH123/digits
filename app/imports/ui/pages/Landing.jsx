import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className="digits-landing-background">
        <Grid container centered stackable columns={3}>
          <Grid.Column width={4}>
            <Image size='small' circular src="/images/meteor-logo.png"/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
