import { CLEAR_ERROR_MESSAGE } from '../../actions/actionTypes'

import { clearErrorMessage } from '../../actions/common'


describe('Common actions', () => {
  it('should create an action to clear error message', () => {
    const expectedAction = {
      type: CLEAR_ERROR_MESSAGE,
    }
    expect(clearErrorMessage()).toEqual(expectedAction);
  });
});