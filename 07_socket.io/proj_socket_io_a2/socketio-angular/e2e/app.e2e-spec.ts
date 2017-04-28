import { SocketioAngularPage } from './app.po';

describe('socketio-angular App', function() {
  let page: SocketioAngularPage;

  beforeEach(() => {
    page = new SocketioAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
