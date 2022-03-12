function borderValidation(error) {
  if (typeof error === "object") {
    return (
      <div className="flex space-x-2 text-red-500">
        <div className="leading-5">
          {error?.map((x, i) => (
            <p key={i}>{x.msg}</p>
          ))}
        </div>
      </div>
    );
  }

  if (typeof error == "string") {
    return (
      <div className="flex items-center space-x-2 text-red-500">
        <div className="leading-5">{error}</div>
      </div>
    );
  }
}

export default borderValidation;
