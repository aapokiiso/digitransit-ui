import React from 'react';
import Relay, { Route } from 'react-relay';
import connectToStores from 'fluxible-addons-react/connectToStores';

import StopPageContentContainer from './StopPageContentContainer';
import Error404 from '../component/404';
import Loading from '../component/LoadingPage';

class TerminalPageContainerRoute extends Route {
  static queries = {
    stop: (RelayComponent, variables) => Relay.QL`
      query {
        station(id: $terminalId) {
          ${RelayComponent.getFragment('stop', variables)}
        }
      }
    `,
  };
  static paramDefinitions = {
    startTime: { required: true },
    timeRange: { required: true },
    numberOfDepartures: { required: true },
  };
  static routeName = 'StopPageContainerRoute';
}

const TerminalPageRootContainer = routeProps => (
  <Relay.Renderer
    Container={StopPageContentContainer}
    queryConfig={new TerminalPageContainerRoute({
      terminalId: routeProps.params.terminalId,
      ...routeProps,
    })}
    environment={Relay.Store}
    render={({ error, props }) => {
      if (error) {
        return <Error404 />;
      } else if (props) {
        return <StopPageContentContainer {...props} />;
      }
      return <Loading />;
    }}
  />
);

export default connectToStores(TerminalPageRootContainer, ['TimeStore', 'FavouriteStopsStore'],
  ({ getStore }) => ({
    startTime: getStore('TimeStore').getCurrentTime().unix(),
    timeRange: 3600,
    numberOfDepartures: 100,
  }));
