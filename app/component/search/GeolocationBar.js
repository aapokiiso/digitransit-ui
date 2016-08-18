import React from "react";
import Icon from "../icon/icon";

import { FormattedMessage } from "react-intl";

import cx from "classnames";

const getLocationMessage = function (geolocation) {
  if (geolocation.hasLocation) {
    return <FormattedMessage id="own-position" defaultMessage="Your current location" />;
  } else if (geolocation.isLocationingInProgress) {
    return <FormattedMessage id="searching-position" defaultMessage="Searching for your position..." />;
  } else {
    return <FormattedMessage id="no-position" defaultMessage="No position" />;
  }
};

const GeolocationBar = props => <div className="geolocation input-placeholder" onClick={props.onClick}><div className="geolocation-selected"><Icon img="icon-icon_position" />{getLocationMessage(props.geolocation)}<span className="close-icon right cursor-pointer"><Icon img="icon-icon_close" /></span></div></div>;

GeolocationBar.propTypes = {
  geolocation: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

GeolocationBar.displayName = "GeolocationBar";
export default GeolocationBar;
