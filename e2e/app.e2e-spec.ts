import { Ng2Issue1204Page } from './app.po';

describe('ng2-issue-1204 App', function() {
  let page: Ng2Issue1204Page;

  beforeEach(() => {
    page = new Ng2Issue1204Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
