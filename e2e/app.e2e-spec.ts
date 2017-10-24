import { MeanVideoAppPage } from './app.po';

describe('mean-video-app App', function() {
  let page: MeanVideoAppPage;

  beforeEach(() => {
    page = new MeanVideoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
