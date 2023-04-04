import React from 'react';
import ContentCss from './Content.module.css';

export default function Content(props) {
  return (
    <div className={ContentCss.content}>
        {props.children}
    </div>
  )
}
