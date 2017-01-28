import { Angular2CliWebpackPage } from './app.po';

describe('angular2-cli-webpack App', function() {
  let page: Angular2CliWebpackPage;

  beforeEach(() => {
    page = new Angular2CliWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
