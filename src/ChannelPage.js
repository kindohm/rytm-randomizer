import './Page.css';

const ChannelPage = ({ channels, onChannelToggled }) => {
  const handleToggled = (channelNumber) => {
    onChannelToggled(channelNumber);
  };

  return (
    <div className="page">
      <h3>Channels</h3>
      <ul className="paramList">
        {channels.map((channel) => {
          return (
            <li key={channel.number}>
              <label className="checkLabel">
                <input
                  type="checkbox"
                  onChange={() => handleToggled(channel.number)}
                  checked={channel.randomize}
                />{' '}
                {channel.number}
                <span className="checkmark"></span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChannelPage;
