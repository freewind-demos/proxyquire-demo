'use strict';
const proxyquire = require('proxyquire');

describe('proxyquire', ()=> {
  it('should mock ./core', () => {
    let coreMock = function () {
      return 'this is mock-core';
    };
    let index = proxyquire('../index', {'./core': coreMock});
    const result = index();
    expect(result).toEqual('index > this is mock-core > bbb');
  });

  it('should mock path', () => {
    let pathMock = {
      basename: function () {
        return 'mock-basename';
      }
    };
    let index = proxyquire('../index', {'path': pathMock});
    const result = index();
    expect(result).toEqual('index > this is core > mock-basename');
  });
});