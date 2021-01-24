import Page from './Page';
import ChannelPage from './ChannelPage';

const Pages = ({
  pages,
  channels,
  onPageToggled,
  onParamToggled,
  onChannelToggled,
}) => {
  const pageComponents = pages.map((page) => {
    return (
      <Page
        key={page.name}
        page={page}
        onPageToggled={onPageToggled}
        onParamToggled={onParamToggled}
      ></Page>
    );
  });

  const allComponents = [
    <ChannelPage
      key="channelpage"
      onChannelToggled={onChannelToggled}
      channels={channels}
    />,
  ].concat(pageComponents);
  return allComponents;
};

export default Pages;
