import { GentAngCliPage } from './app.po';

describe('gent-ang-cli App', () => {
  let page: GentAngCliPage;

  beforeEach(() => {
    page = new GentAngCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
