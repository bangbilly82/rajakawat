import React, { Component } from 'react';
import Media from "react-media";
import WorksHelper from '../../utils/WorksHelper';

class Services extends Component {

  constructor(props) {
    super(props);
    this.state = {
      works: WorksHelper.works
    }
  }

  handleClick() {
    alert('button clicked');
  }

  generateThumbnail() {
    const { works } = this.state;
    let work;
    work = works.map((item, index) => {
      return (
        <div className="column is-one-third" key={index}>
          <div>
            <div className="image-thumbnail">
              <img src={require(`../../static/images/service/service1.png`)}/>
              <div className="title">
                <h5>{item.title}</h5>
              </div>
              <div className="description">
                <p>
                  {item.description}
                </p>
                <a className="button-service" href="/service/detail">
                  View Service
                </a>
              </div>
            </div>
          </div>
        </div>
      ); 
    })
    return work;
  }

  generateContent(isMobile = false) {
    return (
      <section className={"work-container " + ((isMobile) ? 'is-mobile' : null)}>
        <h3 className="title is-3">Our <span>Services</span></h3>
        <hr/>
        <div className="columns is-variable is-1 is-services">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-12">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service1.png`)}/>
                      <div className="title">
                        <h5>KAP BAJA</h5>
                      </div>
                      <div className="description">
                        <p>
                          Struktur atap menggunakan konstruksi baja yang kuat & ringan
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service3.png`)}/>
                      <div className="title">
                        <h5>TRALIS</h5>
                      </div>
                      <div className="description">
                        <p>
                          Konstruksi besi yang berfungsi sebagai pengaman sekaligus hiasan (dekorasi) pada pintu atau jendela.
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <div className="image-thumbnail taller">
                      <img src={require(`../../static/images/service/service7.png`)}/>
                      <div className="title">
                        <h5>PAGAR</h5>
                      </div>
                      <div className="description">
                        <p>
                          Pastikan keamanan rumah Anda terjaga dengan menggunakan pagar yang sesuai dengan design dan bentuk rumah Anda.
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service2.png`)}/>
                      <div className="title">
                        <h5>KANOPI</h5>
                      </div>
                      <div className="description">
                        <p>
                          Atap yang dibuat secara khusus untuk melindungi bagian tertentu rumah yang terletak di luar dari panas / hujan.
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service4.png`)}/>
                      <div className="title">
                        <h5>RAILING TANGGA</h5>
                      </div>
                      <div className="description">
                        <p>
                          Railing tangga, memberikan keamanan pada tangga dan menambah keindahan dekorasi bangunan
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service5.png`)}/>
                      <div className="title">
                        <h5>PINTU LIPAT</h5>
                      </div>
                      <div className="description">
                        <p>
                          Pintu lipat, menjadi salah satu solusi bagi bangunan dengan ukuran ruang relatif kecil.
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service6.png`)}/>
                      <div className="title">
                        <h5>PINTU DORONG</h5>
                      </div>
                      <div className="description">
                        <p>
                          Pintu dengan mekanisme dorong (sliding), memberikan kesan lega pada bangunan
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service2.png`)}/>
                      <div className="title">
                        <h5>ORNAMEN TEMPA</h5>
                      </div>
                      <div className="description">
                        <p>
                          Ornamen dekoratif terbuat dari besi yang dibentuk menggunakan metode tempa
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="tile is-child">
                    <div className="image-thumbnail">
                      <img src={require(`../../static/images/service/service4.png`)}/>
                      <div className="title">
                        <h5>KONSOL</h5>
                      </div>
                      <div className="description">
                        <p>
                          Konsol memiliki fungsi untuk menopang bagian bangunan yang menjorok ke arah luar,seperti balkon.
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <div className="image-thumbnail taller">
                      <img src={require(`../../static/images/service/service8.png`)}/>
                      <div className="title">
                        <h5>BALKON</h5>
                      </div>
                      <div className="description">
                        <p>
                          Besi pengaman pada bangunan (outdoor)  yang biasa dipasang pada perbatasan antara dua lantai
                        </p>
                        <a className="button-service" href="/service/detail">
                          View Service
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <Media query="(max-width: 420px)">
        {matches =>
          matches ? (
            this.generateContent(true)
          ) : (
            this.generateContent()
          )
        }
      </Media>
    );
  }
}

export default Services;
