const NotSupported = () => {
  return (
    <div className="container">
      <p>
        Your web browser does not support access to Web MIDI. Please refer to{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#browser_compatibility"
          target="_blank"
          rel="noreferrer"
        >
          Web MIDI browser compatibility.
        </a>
      </p>
    </div>
  );
};
export default NotSupported;
