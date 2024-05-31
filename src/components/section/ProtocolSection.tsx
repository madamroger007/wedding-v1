import React from 'react'

function ProtocolSection() {
  return (
<div id="fh5co-health-protocol">
		<div className="container">
			<div className="row-1 animate-box">
                
				<div className="md:col-span-8 md:col-start-3 text-center fh5co-heading">
					<h2>Protokol Kesehatan & Anjuran</h2>
					<p style={{color: "#bf9b73"}}>Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol Kesehatan di bawah ini :</p>
				</div>

				<div className="md:col-span-8 md:col-start-3 text-center">
					<div className="row">
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/distance.png" alt="Jaga jarak"/>
								</div>
								<div className="description">
									<h3>Jaga Jarak</h3>
									<p>Jaga jarak minimal 2m dengan orang lain</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "15px"}} height="90px" width="90px" src="/img/health-protocol/gel.png" alt="Hand Sanitizer"/>
								</div>
								<div className="description">
									<h3>Gunakan Handsanitizer</h3>
									<p>Gunakan handsanitizer secara berkala</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/washing-hands.png" alt="Cuci Tangan"/>
								</div>
								<div className="description">
									<h3>Cuci Tangan</h3>
									<p>Cuci tangan yang bersih</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/quarantine.png" alt="Jaga jarak"/>
								</div>
								<div className="description">
									<h3>Hindari Kerumunan</h3>
									<p>Hindari kerumunan untuk mencegah penyebaran covid</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "15px"}} height="90px" width="90px" src="/img/health-protocol/mask.png" alt="Pakai Masker"/>
								</div>
								<div className="description">
									<h3>Gunakan Masker</h3>
									<p>Pakai masker sebelum memasuki gedung acara</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/shaking-hands.png" alt="Tidak Bersalaman"/>
								</div>
								<div className="description">
									<h3>Tidak Bersalaman</h3>
									<p>Diusahakan untuk tidak bersalaman</p>
								</div>
							</div>
						</div>
					</div>
					<p style={{color: "#bf9b73"}}>dan mengikuti anjuran di bawah ini :</p>
					<div className="row">
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/eating.png" alt="Adab makan minum"/>
								</div>
								<div className="description">
									<h3>Makan Minum</h3>
									<p>Mohon memperhatikan adab makan dan minum (duduk, membaca bismillah, tidak mencela makanan dan tidak mubazir)</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "15px"}} height="100px" width="100px" src="/img/health-protocol/no-shaking-hands.png" alt="Jaga jarak"/>
								</div>
								<div className="description">
									<h3>Tidak Bercampur Baur</h3>
									<p>Mohon untuk tidak bercampur baur dan tidak bersalaman antara tamu laki-laki dan perempuan termasuk saat berfoto (kecuali dengan mahram)</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-xs-6">
							<div className="item-protocol">
								<div className="icon">
									<img style={{padding: "10px"}} height="90px" width="90px" src="/img/health-protocol/rug.png" alt="Sholat"/>
								</div>
								<div className="description">
									<h3>Sholat</h3>
									<p>Memperhatikan waktu shalat wajib dan tidak meninggalkannya</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

  )
}

export default ProtocolSection