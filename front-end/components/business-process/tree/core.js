import React, { useState,useEffect } from 'react';
import BPTreeComponent from './tree-view';
import {BPColors} from '../../../utils/business-process/standards';
import BPTreeFilterComponent from './tree-filter';
import {sampleEAIDomains} from '../../../utils/business-process/sample-data';

import {useLPSession} from '@taci-tech/launchpad-js';
import {BPLaunchpad} from '../../../utils/business-process/launchpad/core';

const BPTreeView = ({
  onChange,
}) => {
  const {
    data,
    setData,
  } = useLPSession(BPLaunchpad.tree.getMap());

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {/* Filter Section */}
      <BPTreeFilterComponent
        onChange={(filter) => {
          setData(filter);
        }}
      />

      {/* Divider */}
      <div
        style={{
          width: 1,
          height: '100%',
          backgroundColor: BPColors.border,
        }}
      />

      {/* Map Section */}
      <div
        style={{
          width: '100%',
          height: '100%',
          flexShrink: 1,
          flexGrow: 0,
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BPTreeComponent data={data} onChange={(log) => {
          if (onChange && log) {
            onChange(log.id); // TODO: Will be changed based on the property name in API.
          }
        }}/>
      </div>
    </div>
  );
};

export default BPTreeView;
