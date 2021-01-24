import Page from './Page';

const Pages = ({ pages, onPageToggled, onParamToggled }) => {
  return pages.map((page) => {
    return (
      <Page
        key={page.name}
        page={page}
        onPageToggled={onPageToggled}
        onParamToggled={onParamToggled}
      ></Page>
    );
  });
};

export default Pages;
