import { FccPage } from './app.po';

describe('fcc App', () => {
  let page: FccPage;

  beforeEach(() => {
    page = new FccPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
