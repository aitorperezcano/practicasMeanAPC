import { Angular2BasicPage } from './app.po';

describe('angular2-basic App', function() {
  let page: Angular2BasicPage;

  beforeEach(() => {
    page = new Angular2BasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
