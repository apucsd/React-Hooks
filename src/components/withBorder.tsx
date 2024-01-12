const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border border-purple-600 rounded-full">
      <h1>HOC</h1>
      <WrappedComponent {...props}></WrappedComponent>
    </div>
  );
};

export default withBorder;
