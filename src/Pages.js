import Page from './Page';

const Pages = ({ pages, handlePageToggled, onParamToggled }) => {
  return (
      pages.map((page) => {
        return (
          <Page
            key={page.name}
            page={page}
            onPageToggled={handlePageToggled}
            onParamToggled={onParamToggled}
          ></Page>
        );
      })
  );
};

export default Pages;
