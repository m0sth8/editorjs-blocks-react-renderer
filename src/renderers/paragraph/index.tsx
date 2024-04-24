import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { RenderFn } from '../..';

export interface ParagraphBlockData {
  text: string;
}

export interface ParagraphBlockConfig {
  actionsClassNames?: {
    alignment?: string;
  };
}

const Paragraph: RenderFn<ParagraphBlockData, ParagraphBlockConfig> = ({
  data,
  tunes,
  className = '',
  actionsClassNames,
}) => {
  const props: {
    [s: string]: string;
  } = {};

  const classNames: string[] = [];

  if (className) {
    classNames.push(className);
  }

  if (tunes?.alignment && actionsClassNames && actionsClassNames.alignment) {
    classNames.push(actionsClassNames.alignment.replace('{alignment}', tunes.alignment.alignment));
  }

  if (classNames.length > 0) {
    props.className = classNames.join(' ');
  }

  return <p {...props}>{data?.text && HTMLReactParser(data.text)}</p>;
};

export default Paragraph;
