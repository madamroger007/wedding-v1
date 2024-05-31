import React from 'react'

function CoupleSection() {
  return (
    <div id="fh5co-couple" className="bg-[url('/img/background/repeat-background/so-white.png')] bg-cover bg-no-repeat">
    <div className="container">
        <img className="flower-2-right" style={{position: "absolute"}} src="/img/background/flowers/right-1.svg" />
        <img className="flower-2-left" style={{position: "absolute"}} src="/img/background/flowers/left-1.svg" />
        <div className="row-auto">
            <div className="flex items-center justify-center flex-col text-center fh5co-heading animate-box">
                <img src="/img/bismillah.svg" alt="" style={{marginBottom: "20px"}}/>
                <h2>Assalamu'alaikum Wr. Wb.</h2>
                <p style={{color: "#bf9b73"}}>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:</p>
            </div>
        </div>
        <div className="couple-wrap gap-10 md:gap-0">
            <div className="couple-half">
                <div className="groom ">
                    <img src="/img/rehan-square.jpg" alt="groom" className="img-responsive"/>
                </div>
                <div className="text-center ">
                    <h3 >Rayhan Yulanda</h3>
                    <p><span style={{color: "#bf9b73"}}>Putri Keempat dari</span><br/>
                        <span className="parents-font">Bapak Samidan Angkasa Wijaya</span>
                        <br/>
                        <span className="parents-font">Ibu Sufrida</span>
                    </p>
                    <div id="social-media-rehan">
                        <ul className="fh5co-social-icons">
                            <li><a target="_blank" href="https://github.com/rayhanyulanda"><i className="icon-github-with-circle"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/rayhanyulanda/"><i className="icon-linkedin-with-circle"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="heart text-center"><i className="icon-heart2"></i></p>
            <div className="couple-half ">
                <div className="bride">
                    <img src="/img/molid-square.jpg" alt="groom" className="img-responsive" />
                </div>
                <div className="text-center ">
                    <h3>Maulidan Nashuha</h3>
                    <p><span style={{color: "#bf9b73"}}>Putra Kedua dari</span><br/>
                        <span className="parents-font">Bapak Asri Abdurrahman</span>
                        <br/>
                        <span className="parents-font">Ibu Marliana</span>
                    </p>
                    <div id="social-media-molid">
                        <ul className="fh5co-social-icons">
                            <li><a target="_blank" href="https://github.com/maulidandev"><i className="icon-github-with-circle"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/maulidandev/"><i className="icon-linkedin-with-circle"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/maulidannashuha/"><i className="icon-instagram-with-circle"></i></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/maulidannashuha"><i className="icon-facebook-with-circle"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/ngodingsolusi"><i className="icon-twitter-with-circle"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CoupleSection