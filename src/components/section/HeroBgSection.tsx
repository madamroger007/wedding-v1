
import CountdownTimer from "../elemen/CountdownTimer";

function HeroBgSection() {
  return (
    <div id="fh5co-header">
      <div className="container">
        <img
          className="flower-1"
          style={{ position: "absolute", right: 0, top: 0 }}
          src="/img/background/flowers/top-right-1.svg"
        />
        <img
          className="flower-1"
          style={{ position: "absolute", left: "-25px", top: 0 }}
          src="/img/background/flowers/top-left-1.svg"
        />
        <div className="w-full md:mt-30 mt-20 mb-5">
          <div className="col-md-8 col-md-offset-2 title-head text-center">
            <span>The Wedding Of</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
            <img
              src="/img/half circle flower.png"
              alt=""
              className="couple-main"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="col-md-8 col-md-offset-2 text-center ">
            <span className="font-allura md:text-8xl text-5xl text-blue-900">
              Rehan & Maulidan
            </span>
            <p style={{ color: "#bf9b73" }} className="my-5 font-serif">
              Kami berharap Anda menjadi bagian dari hari istimewa kami!
            </p>
            <div className="simply-countdown simply-countdown-wedding"></div>
            <br />
            <CountdownTimer deadline="Wed May 30 2024 18:51:31 GMT+0700 (Waktu Indonesia Barat)" />
            <p className="flex flex-col items-center justify-center">
              <a
                href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NW0zY2Ewam91bnUzbW5ub2YwdjVxaTliNmUgcDY4MjI3cmY0dTJ0cWI1b3JrZjEwbTN1NDRAZw&tmsrc=p68227rf4u2tqb5orkf10m3u44%40group.calendar.google.com"
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                Save the date
              </a>
              <br />
              <i style={{ fontSize: "15px" }} className="text-blue-950">
                *Klik tombol ini untuk menyimpan tanggal pada google kalender
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBgSection;
