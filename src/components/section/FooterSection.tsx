import React from 'react'

function FooterSection() {
  return (
  <div>
	  <footer id="fh5co-footer" className='relative' role="contentinfo" style={{background: "url('/img/background/repeat-background/witewall_3.png')", backgroundRepeat:"repeat" }}>
			<img className="flower-1" style={{position: "absolute", right: 0, bottom: 0}} src="/img/background/flowers/bottom-right-1.svg"/>
			<img className="flower-1" style={{position: "absolute", left: 0, bottom:0}} src="/img/background/flowers/bottom-left-1.svg"/>
		<div className="container ">
			<div className="row copyright animate-box ">
				<div className="col-md-12 text-center flex justify-center items-center flex-col">
					<p className='font-cookie text-3xl'>
						Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
						<br/>Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
					<h3 style={{color: "#bf9b73"}} className='font-dancing-script'>Wassalamu'alaikum Wr. Wb.</h3>
					Jazakumullahu Khairan
					</p>
					<img src="/img/half circle flower.png" className='w-[150px] md:w-[200ps]'/>
					<br/>
					<h1 style={{fontFamily: "Satisfy, Arial, serif"}}>Rehan & Maulidan</h1>
					<p>
						© Copyright 2022 NIKAH DIGITAL All Rights Reserved <br/>
						<small>Instagram : nikahdigitalcom | Whatsapp : (+62) 853-6006-1021 | NikahDigital.com |halo@nikahdigital.com</small>
					<ul className="fh5co-social-icons">
						<li><a target="_blank" href="https://wa.me/6285360061021/"><i className="icon-phone"></i></a></li>
						<li><a target="_blank" href="https://nikahdigital.com/"><i className="icon-globe"></i></a></li>
						<li><a target="_blank" href="https://www.instagram.com/nikahdigitalcom/"><i className="icon-instagram"></i></a></li>
						<li><a target="_blank" href="https://github.com/maulidandev"><i className="icon-github"></i></a></li>
						<li><a target="_blank" href="https://www.linkedin.com/in/maulidandev/"><i className="icon-linkedin"></i></a></li>
					</ul>
					</p>
				</div>
			</div>

		</div>
	</footer>
  </div>
  )
}

export default FooterSection