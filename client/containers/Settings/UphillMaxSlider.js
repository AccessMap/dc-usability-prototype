import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';

import Slider from 'react-md/src/js/Sliders';

const UphillMaxSlider = (props) => {
  const {
    actions,
    inclineUphillMax,
    inclineUphillMin,
  } = props;

  const percent = +(inclineUphillMax / 10).toFixed(1);

  return (
    <Slider
      discrete
      id='uphill-max-slider'
      label={`Maximum uphill incline ${percent}%`}
      defaultValue={percent}
      min={inclineUphillMin / 10}
      max={15}
      step={0.5}
      valuePrecision={1}
      onChange={d => actions.setUphillMax(d * 10)}
      value={percent}
    />
  );
};

UphillMaxSlider.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  inclineUphillMax: PropTypes.number.isRequired,
  inclineUphillMin: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const {
    inclineRanges,
  } = state;

  return {
    inclineUphillMax: inclineRanges.inclineUphillMax,
    inclineUphillMin: inclineRanges.inclineUphillMin,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UphillMaxSlider);
