import { ChuckPage } from './app.po';

describe('chuck App', () => {
  let page: ChuckPage;

  beforeEach(() => {
    page = new ChuckPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to gid!');
  });
});
