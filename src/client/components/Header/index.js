import React from 'react';
import { Text, Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import LanguageSelector from '../LanguageSelector';
import PropTypes from 'prop-types';
import { setLocale } from '../../actions/intl';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styleSheet';
import { showSidePanel } from '../../actions/toggleSidePanel';

const Header = ({ title, goBack, showSidePanel: doShowSidePanel, setLocale: doSetLocale, langs, intl = {}}) => (
  <View style={styles.headerContainer}>
    <Icon
      name={goBack ? 'arrow-left' : 'bars'}
      iconStyle={styles.burgerButton}
      type='font-awesome'
      color='rgb(79, 119, 255)'
      onPress={() => (goBack) ? goBack() : doShowSidePanel()}
    />
    <Text h5 style={styles.headerTitle} >{title}</Text>
    <LanguageSelector langs={langs} setLocale={doSetLocale}/>
  </View>
)

const actions = { showSidePanel, setLocale };

const mapStateToProps = state => ({
  langs: state.config.langs,
  intl: state.intl,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

Header.propTypes = {
  setLocale: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  langs: PropTypes.array,
  currentLanguage: PropTypes.string,
  goBack: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
