import React from 'react'

function UcapanSection() {
  return (
    <div id="fh5co-testimonial" style={{background: "url('/img/background/repeat-background/so-white.png')", backgroundRepeat:"no-repeat",backgroundSize:"cover", borderTop: "1px solid #f2f2f2"}}>
    <img height="400" className="flower-bukutamu-right" style={{right: 0,top: 0,position: "absolute"}} src="/img/background/flowers/top-right-3.svg"/>
    <img height="400" className="flower-bukutamu-left" style={{position: "absolute", left: 0, bottom: 0}} src="/img/background/flowers/bottom-left-3.svg"/>
    <div className="container p-5">
        <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Buku Tamu & Ucapan</h2>
                <span style={{color: "#bf9b73"}}>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 animate-box">
                <div className="wrap-testimony">
                    <div className="owl-carousel-fullwidth">
                        <div className="item">
                            <div className="testimony-slide active text-center">
                                <figure>
                                    <img src="/img/couple-1.jpg" alt="user"/>
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics"</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-slide active text-center">
                                <figure>
                                    <img src="/img/couple-2.jpg" alt="user"/>
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, at the coast of the Semantics, a large language ocean."</p>
                                </blockquote>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimony-slide active text-center">
                                <figure>
                                    <img src="/img/couple-3.jpg" alt="user"/>
                                </figure>
                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                <blockquote>
                                    <p>"Far far away, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2">
                <div className="list-group"></div>
            </div>
        </div>

        <div id="button-send" className="text-center animate-box gap-10">
        <br/>
        <a href="https://wa.me/6285793561844?text=Halo%20min%20apakah%20produk%20masih%20tersedia?"
 target="_blank" className="btn btn-primary btn-sm">Kirim Ucapan</a><br/><br/>

            <i style={{fontSize: "15px"}} className='text-blue-950'>*Note : Klik untuk memsan produk sekarang</i>
        </div>
    </div>
</div>
  )
}

export default UcapanSection