import React from 'react';
import { Text, Icon } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styleSheet';
import { showSidePanel } from '../../actions/toggleSidePanel';

const Header = ({ title, showSidePanel: doShowSidePanel, goBack }) => (
  <View style={styles.headerContainer}>
    <Icon
      name={goBack ? 'arrow-left' : 'bars'}
      iconStyle={styles.burgerButton}
      type='font-awesome'
      color='rgb(79, 119, 255)'
      onPress={() => (goBack) ? goBack() : doShowSidePanel()}
    />
    <Text h5 style={styles.headerTitle} >{title}</Text>
    <Icon
      name='cog'
      iconStyle={styles.burgerButton}
      type='font-awesome'
      color='rgb(79, 119, 255)'
    />
  </View>
)

const actions = { showSidePanel };

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);