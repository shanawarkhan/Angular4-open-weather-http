import { HttpGetAppPage } from './app.po';

describe('http-get-app App', () => {
  let page: HttpGetAppPage;

  beforeEach(() => {
    page = new HttpGetAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
