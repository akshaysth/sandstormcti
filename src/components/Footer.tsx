function Footer() {
  return (
    <div className="flex absolute left-0 bottom-0 h-10 w-full">
      <div className="flex flex-1 items-center justify-center">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
