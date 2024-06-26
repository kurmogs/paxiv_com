const FullScreenIC = (props: any) => {
  return (
    <svg
      className="svg-icon"
      style={{
        width: "1.5em",
        height: "1.5em",
        verticalAlign: "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M213.333333 213.333333h213.333334V128H170.666667a42.666667 42.666667 0 0 0-42.666667 42.666667v256h85.333333V213.333333zM170.666667 896h256v-85.333333H213.333333v-213.333334H128v256a42.666667 42.666667 0 0 0 42.666667 42.666667z m725.333333-42.666667v-256h-85.333333v213.333334h-213.333334v85.333333h256a42.666667 42.666667 0 0 0 42.666667-42.666667zM597.333333 213.333333h213.333334v213.333334h85.333333V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667h-256v85.333333z"
        fill=""
      />
    </svg>
  );
};

export default FullScreenIC;
