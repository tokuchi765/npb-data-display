import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Image from '../components/Image';
import { act } from 'react-dom/test-utils';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import analysisConst from '../components/Constants';

Enzyme.configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render contact information', () => {
  act(() => {
    render(<Image path={analysisConst.IMG_CENTRAL} name={analysisConst.CENTLAL_NAME} />, container);
  });

  const button = document.querySelector('Button');
  expect(button.innerHTML).toContain(analysisConst.CENTLAL_NAME);
  // "閉じる"が表示されるテストが実装できていないが、そもそもの作りが悪いような気もするので、いったんあきらめる
});
