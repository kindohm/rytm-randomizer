import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <small>
          Developed by <a href="http://kindohm.com">kindohm</a>. Inspired by the{' '}
          <a href="http://algorithmic-instruments.com/dsi-tempest-randomizer">
            DSI Tempest Randomizer
          </a>
          .{' '}
          <a href="https://github.com/kindohm/rytm-randomizer" target="_blank">
            Source code
          </a>
          .
        </small>
      </footer>
    </div>
  );
};

export default Footer;
