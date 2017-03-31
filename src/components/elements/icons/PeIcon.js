import React from 'react';
import './css/pe-icon-7-stroke.css';
import './PeIcon.css';

/**
 * See the full icon set at http://themes-pixeden.com/font-demos/7-stroke/
 */
function PeIcon(props) {
  var className = 'PeIcon pe-7s-' + props.icon;

  return (
    <span className={className}></span>
  )
}

PeIcon.defaultProps = {
  icon: "close-circle"
};

export default PeIcon;
