import { Ng2projectPage } from './app.po';

describe('ng2project App', function() {
  let page: Ng2projectPage;

  beforeEach(() => {
    page = new Ng2projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
