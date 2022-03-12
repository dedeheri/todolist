function Input({ border, ...rest }) {
  return (
    <input
      {...rest}
      className={`border w-64 outline-none bg-transparent  rounded-lg px-3 h-10 ${
        border ? "border-red-500" : "dark:border-[#30363d]"
      }`}
      placeholder="Email"
      type="email"
    />
  );
}

export default Input;
