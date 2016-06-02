import React from 'react';
import dimensions from 'react-dimensions';

function DesktopWrapper({ children, containerWidth }) {
  if (containerWidth < 980 ||
    (typeof window !== 'undefined' && window.location.pathname === '/styleguide')
  ) {
    return children;
  }
  return (
    <div className="fullscreen desktop-wrapper">
      <div className="desktop-wrapper--content">
        <div className="desktop-wrapper--left-bar">
          <h2>
            <svg
              viewBox="0 0 84 34"
              height={'34px'}
              style={{ verticalAlign: 'bottom', marginRight: 5 }}
            >
              <path
                fill="#999"
                d="M60.9 17.86c-.36 0-.65.3-.65.64v4.42h-6.58V18.5c0-.35-.3-.64-.65-.64-.34 0-.64.3-.64.64v10.1c0 .34.3.63.64.63.36 0 .65-.3.65-.65V24.1h6.58v4.48c0 .36.3.65.65.65.34 0 .63-.3.63-.65V18.5c0-.35-.3-.64-.63-.64zm7.36.08H64c-.35 0-.64.3-.64.64v10c0 .36.3.65.64.65.35 0 .65-.3.65-.64v-3.8h3.27l3.2 4.1c.15.18.35.33.6.33.33 0 .66-.3.66-.63 0-.18-.08-.32-.2-.46l-2.84-3.6c1.77-.33 3.04-1.4 3.04-3.24v-.03c0-.88-.32-1.67-.88-2.2-.72-.7-1.84-1.13-3.24-1.13zm2.82 3.4c0 1.45-1.22 2.32-2.93 2.32h-3.5V19.1h3.5c1.85 0 2.93.84 2.93 2.22v.03zm10.32-3.4h-7.92c-.32 0-.6.27-.6.6 0 .3.28.57.6.57h3.3v9.48c0 .36.3.65.66.65.36 0 .65-.3.65-.65v-9.47h3.3c.32 0 .6-.25.6-.57 0-.32-.28-.6-.6-.6zM60.52 4.84c-.7 0-1.25.54-1.25 1.23v3.3h-4.62v-3.3c0-.7-.56-1.23-1.26-1.23s-1.26.54-1.26 1.23V15c0 .7.55 1.24 1.25 1.24s1.25-.55 1.25-1.23v-3.36h4.62V15c0 .7.55 1.24 1.25 1.24s1.26-.55 1.26-1.23V6.07c0-.7-.55-1.23-1.26-1.23zm3.23 10.12c1.27.9 2.8 1.34 4.28 1.34 2.46 0 4.2-1.25 4.2-3.47v-.04c0-1.96-1.32-2.77-3.63-3.37-1.97-.5-2.45-.73-2.45-1.47v-.03c0-.54.5-.98 1.46-.98.8 0 1.57.27 2.4.76.2.12.4.18.64.18.65 0 1.17-.5 1.17-1.14 0-.48-.27-.8-.54-.97-1.03-.64-2.23-1-3.62-1-2.33 0-4 1.35-4 3.38v.04c0 2.2 1.5 2.84 3.8 3.4 1.9.5 2.3.8 2.3 1.44v.03c0 .66-.63 1.06-1.66 1.06-1.1 0-2.05-.4-2.9-1-.17-.12-.4-.24-.73-.24-.65 0-1.17.5-1.17 1.13 0 .38.2.74.47.93zm11.22 1.18h5.9c.63 0 1.13-.5 1.13-1.12 0-.62-.5-1.12-1.14-1.12h-4.64V6.07c0-.7-.55-1.23-1.26-1.23-.7 0-1.25.54-1.25 1.23v8.84c0 .7.57 1.24 1.27 1.24zM29 14.84c-.06 0-1.3 0-2.27.88l-1.9-4.56c1.32-.03 2.22-.9 2.27-.95 1.17-1.14 1.34-2.63.42-3.54-.92-.9-2.44-.74-3.6.4-.06.06-.93.94-.98 2.2l-4.62-1.9c.9-.92.92-2.17.92-2.24 0-1.62-.95-2.8-2.26-2.8-1.3 0-2.26 1.18-2.26 2.8 0 .07.02 1.3.9 2.24L11 9.23c-.04-1.3-.93-2.18-.98-2.23-1.17-1.15-2.7-1.33-3.6-.42-.94.9-.76 2.4.4 3.55.06.05.95.9 2.26.96l-1.94 4.53c-.95-.9-2.22-.9-2.3-.9-1.64 0-2.84.93-2.84 2.22 0 1.28 1.2 2.22 2.85 2.22.07 0 1.32-.02 2.28-.9l1.9 4.57c-1.32.03-2.23.9-2.27.95-1.17 1.14-1.35 2.63-.42 3.54.92.9 2.44.74 3.6-.4.06-.06.93-.94.98-2.2l4.62 1.9c-.9.92-.92 2.17-.92 2.24 0 1.62.95 2.8 2.26 2.8 1.3 0 2.25-1.18 2.25-2.8 0-.07 0-1.3-.9-2.24l4.64-1.87c.03 1.3.92 2.18.97 2.23 1.17 1.15 2.7 1.32 3.6.42.94-.9.76-2.4-.4-3.56-.06-.04-.95-.9-2.26-.95l1.94-4.54c.95.9 2.22.9 2.3.9 1.64 0 2.84-.92 2.84-2.2 0-1.3-1.2-2.23-2.86-2.23zM4.85 17.88c-.9 0-1.55-.4-1.55-.95 0-.55.65-.94 1.56-.94.05 0 1.15.03 1.7.96-.56.9-1.65.93-1.7.93zm19.98-9.93c.63-.62 1.38-.8 1.77-.4.4.38.22 1.1-.42 1.74-.03.04-.84.8-1.9.5-.24-1 .5-1.78.55-1.83zM16.98 3.6c.56 0 .96.64.96 1.53 0 .05-.02 1.13-.97 1.67-.9-.55-.94-1.62-.94-1.68 0-.88.4-1.53.95-1.53zM7.75 9.22c-.64-.63-.82-1.36-.42-1.75.4-.38 1.14-.2 1.78.42.04.04.8.82.52 1.86-1.03.25-1.83-.5-1.87-.53zm1.28 16.8c-.64.62-1.38.8-1.77.4-.4-.38-.22-1.1.42-1.74.03-.04.83-.8 1.9-.5.24 1-.5 1.78-.55 1.83zm7.85 4.38c-.56 0-.96-.64-.96-1.53 0-.05.02-1.13.97-1.67.9.55.93 1.62.93 1.68 0 .88-.4 1.53-.95 1.53zm9.23-5.63c.65.63.82 1.36.43 1.75-.4.38-1.14.2-1.78-.42-.03-.04-.8-.82-.52-1.86 1.04-.25 1.84.5 1.88.53zm-2.87-1.53L16.9 25.8l-6.3-2.6-2.62-6.23 2.65-6.2 6.33-2.57 6.3 2.6 2.6 6.23-2.63 6.2zM29 18c-.05 0-1.16-.03-1.7-.96.56-.9 1.64-.93 1.7-.93.9 0 1.56.4 1.56.95 0 .55-.66.95-1.56.95zM39.3 2.32c-.37 0-.68.3-.68.64v28.08c0 .35.3.64.67.64.36 0 .67-.28.67-.64V2.96c0-.35-.3-.64-.68-.64zm2.7 0c-.37 0-.68.3-.68.64v28.08c0 .36.3.64.67.64.36 0 .67-.28.67-.64V2.96c0-.35-.3-.64-.68-.64z" // eslint-disable-line max-len
              />
            </svg>
            Reittiopas<sup>BETA</sup>
          </h2>
          <h1>Kokeile uutta Reittiopasta!</h1>
          Reittiopas uudistuu pian ja tuo mukanaan liudan kauan kaivattuja parannuksia
          <ul>
            <li>Reaaliaikatiedot</li>
            <li>Parannettu kartta</li>
            <li>Ennakoiva haku</li>
            <li>Joku neljäs kohta</li>
          </ul>
          Uusi Reittiopas on suunniteltu erityisesti mobiililaitteet huomioiden, mutta se tulee toki
          toimimaan erinomaisesti myös tietokoneella. Tässä vaiheessa voit tutustua vain
          mobiilioptimoituun versioon.
          {/* <p>Anna palautetta</p> */}
        </div>
        <div className="desktop-wrapper--child-content">
          <svg viewBox="0 0 500 1000" className="desktop-wrapper--phone">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#222"
              d="M11 137h3v39h-3v-39zm0 84h3v72h-3v-72zm475 0h3v72h-3v-72zM11 311h3v72h-3v-72zM431
                13.8H69c-30.3 0-55 24.6-55 55v862.4c0 30.4 24.7 55 55 55h362c30.3 0 55-24.6
                55-55V68.8c0-30.4-24.7-55-55-55zM458 872H42V154h416v718z"
            />
            <path
              d="M249.4 963.2c-21 0-37.8-17-37.8-37.8s17-37.7 37.8-37.7c20.8 0 37.7 17 37.7
                37.7s-16.6 37.8-37.4 37.8zm0-71.5c-18.7 0-33.8 15-33.8 33.7s15 33.8 33.8 33.8c18.6 0
                33.7-15.2 33.7-33.8s-15-33.7-33.4-33.7z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M174.6 68.7c4.3 0 7.8 3.5 7.8 7.8s-3.5 7.8-7.8 7.8-7.8-3.5-7.8-7.8 3.5-7.8
                7.8-7.8zm75.4-30c3.2 0 6 2.7 6 6 0 3-2.8 5.8-6 5.8s-5.8-2.6-5.8-5.8c0-3.3 2.6-6
                5.8-6zm-34 34h68c1.7 0 3 1.3 3 3v1.7c0 1.7-1.3 3-3 3h-68c-1.7 0-3-1.3-3-3v-1.8c0-1.6
                 1.3-3 3-3zM457 130H43c-1.7 0-3 1.3-3 3v738c0 1.6 1.3 3 3 3h414c1.7 0 3-1.4
                 3-3V133c0-1.7-1.3-3-3-3zm1 742H42V154h416v718z"
            />
          </svg>
          <div className="fullscreen">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

DesktopWrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
  containerWidth: React.PropTypes.number.isRequired,
};

export default dimensions()(DesktopWrapper);
