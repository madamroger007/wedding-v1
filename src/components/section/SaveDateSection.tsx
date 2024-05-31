
function SaveDateSection() {
  return (
    <div id="fh5co-event" className="fh5co-bg bg-[url(/img/background/blue-brush-5.jpg)] " style={{borderTop: "1px solid #f2f2f2"}}>
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2>Save The Date <a href="calendar.ics" className="btn btn-primary"><i className="icon-download2"></i></a></h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box ">
                        <h3 className='font-merriweather'>Akad Nikah</h3>
                        <div className="event-col">
                            <i className="icon-clock"></i>
                            <span>09:00</span>
                            <span>Selesai</span>
                        </div>
                        <div className="event-col">
                            <i className="icon-calendar"></i>
                            <span>Jumat</span>
                            <span className="tanggal">20 Mei 2022</span>
                        </div>
                        <p  className='text-red-400 mb-10 font-serif'>Alamat : Masjid Keuchik Leumik, Gampong Lamseupeung, Kec. Lueng Bata, Banda Aceh</p>

                        <a href="https://goo.gl/maps/kSZez6MQC8SDNevM7" target="_blank"
                           className="btn btn-primary">Penunjuk Lokasi <i className="icon-map2"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 text-center">
                    <div className="event-wrap animate-box">
                        <h3 className='font-merriweather'>Resepsi Nikah</h3>
                        <div className="event-col">
                            <i className="icon-clock"></i>
                            <span>11:00</span>
                            <span>Selesai</span>
                        </div>
                        <div className="event-col">
                            <i className="icon-calendar"></i>
                            <span>Sabtu</span>
                            <span className="tanggal">21 Mei 2022</span>
                        </div>
                        <p  className='text-red-400 mb-10 font-serif'>Alamat : Amel Convention Hall, Jl. Prof. Ali Hasyimi, Lamteh, Kec. Ulee Kareng, Banda Aceh</p>

                        <a href="https://goo.gl/maps/c8UZnR3s92rDSDEp8" target="_blank"
                           className="btn btn-primary">Penunjuk Lokasi <i className="icon-map2"></i></a>
                    </div>
                </div>
 
            </div>
        </div>
    </div>
</div>

  )
}

export default SaveDateSection