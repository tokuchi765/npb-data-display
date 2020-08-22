import React from 'react';
import Header from '../containers/Header';
import { render, fireEvent, screen } from '@testing-library/react';
import assert from 'assert';

describe('Header test', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Initially, Titleis displayed', () => {
    assert(screen.queryByText('プロ野球データ分析'));
  });

  // Headerクラス内のメソッドをモック化してテストしたいが、やりかたがわからんのでとりあえずTODOにしておく
});
