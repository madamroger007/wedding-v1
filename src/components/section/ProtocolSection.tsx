import React from 'react'

function ProtocolSection() {
  return (
    <div id="fh5co-health-protocol" className="py-12">
      <div className="container mx-auto">
        <div className="row animate-box">

          <div className="md:col-span-8 md:col-start-3 text-center">
            <h2 className="text-6xl md:text-7xl font-semibold mb-4 font-dancing-script text-blue-950">Protokol Kesehatan & Anjuran</h2>
            <p className="text-[#bf9b73] font-serif">Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol Kesehatan di bawah ini :</p>
          </div>

          <div className="md:col-span-8 md:col-start-3 text-center mt-8 px-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/distance.png" alt="Jaga jarak" />
                  </div>
                  <div className="description">
                    <h3 className=" ">Jaga Jarak</h3>
                    <p className='text-gray-700 font-thin'>Jaga jarak minimal 2m dengan orang lain</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto p-3.5"  src="/img/health-protocol/gel.png" alt="Hand Sanitizer" />
                  </div>
                  <div className="description">
                    <h3 className="">Gunakan Handsanitizer</h3>
                    <p className='text-gray-700 font-thin'>Gunakan handsanitizer secara berkala</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/washing-hands.png" alt="Cuci Tangan" />
                  </div>
                  <div className="description">
                    <h3 className="">Cuci Tangan</h3>
                    <p className='text-gray-700 font-thin'>Cuci tangan yang bersih</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/quarantine.png" alt="Jaga jarak" />
                  </div>
                  <div className="description">
                    <h3 className="">Hindari Kerumunan</h3>
                    <p className='text-gray-700 font-thin'>Hindari kerumunan untuk mencegah penyebaran covid</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto p-3.5"  src="/img/health-protocol/mask.png" alt="Pakai Masker" />
                  </div>
                  <div className="description">
                    <h3 className="">Gunakan Masker</h3>
                    <p className='text-gray-700 font-thin'>Pakai masker sebelum memasuki gedung acara</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/shaking-hands.png" alt="Tidak Bersalaman" />
                  </div>
                  <div className="description">
                    <h3 className="">Tidak Bersalaman</h3>
                    <p className='text-gray-700 font-thin'>Diusahakan untuk tidak bersalaman</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#bf9b73] mt-8 font-serif">dan mengikuti anjuran di bawah ini :</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/eating.png" alt="Adab makan minum" />
                  </div>
                  <div className="description">
                    <h3 className="">Makan Minum</h3>
                    <p className='text-gray-700 font-thin'>Mohon memperhatikan adab makan dan minum (duduk, membaca bismillah, tidak mencela makanan dan tidak mubazir)</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto p-3.5" height="100" width="100" src="/img/health-protocol/no-shaking-hands.png" alt="Jaga jarak" />
                  </div>
                  <div className="description">
                    <h3 className="">Tidak Bercampur Baur</h3>
                    <p className='text-gray-700 font-thin'>Mohon untuk tidak bercampur baur dan tidak bersalaman antara tamu laki-laki dan perempuan termasuk saat berfoto (kecuali dengan mahram)</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="item-protocol">
                  <div className="icon mb-4">
                    <img className="mx-auto"  src="/img/health-protocol/rug.png" alt="Sholat" />
                  </div>
                  <div className="description">
                    <h3 className="">Sholat</h3>
                    <p className='text-gray-700 font-thin'>Memperhatikan waktu shalat wajib dan tidak meninggalkannya</p>
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
