export default function ButtonYt() {
  const handleMouseMove = e => {
    let btn = e.target;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
  };
  return (
    <div>
      <a onMouseMove={handleMouseMove} href="#" className="btn_yt">
        Button
      </a>
    </div>
  );
}
