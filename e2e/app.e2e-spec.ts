import { MsdwDemoPage } from './app.po';

describe('msdw-demo App', () => {
  let page: MsdwDemoPage;

  beforeEach(() => {
    page = new MsdwDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
