import 'intl';
import { IntlProvider } from 'react-intl';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { styles } from './stylesheet';

const ConnectedIntlProvider = ({ children, locale, messages = {} }) => {
  if (!locale) return <ActivityIndicator color="rgb(79, 119, 255)" size="large" style={styles.fetching} />
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  locale: state.intl.locale,
  messages: state.intl.messages[state.intl.locale] || {},
  message: state.message,
});

ConnectedIntlProvider.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
  messages: PropTypes.object,
};

export default connect(mapStateToProps)(ConnectedIntlProvider);
